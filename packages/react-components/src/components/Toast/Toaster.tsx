import React, { createContext, useContext, useEffect, useRef } from "react";
import { useToastRegion } from "react-aria";
import { useToastState } from "react-stately";
import Toast, { ToastVariant } from "./Toast";
import "./Toast.css";

type ToastContent = {
  title?: string;
  message: string;
  variant?: ToastVariant;
  isDismissable?: boolean;
};

interface ToastContextValue {
  add: (toast: ToastContent, opts?: { timeout?: number }) => string;
  close: (key: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToastQueue() {
  const ctx = useContext(ToastContext);
  if (!ctx)
    throw new Error("useToastQueue must be used inside <ToasterProvider />");
  return ctx;
}

type TimerEntry = {
  timerId: ReturnType<typeof setTimeout>;
  dueAt: number;
  remaining: number;
  paused: boolean;
};

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const state = useToastState<ToastContent>({
    maxVisibleToasts: 3,
  });

  const regionRef = useRef<HTMLDivElement | null>(null);
  const { regionProps } = useToastRegion({}, state, regionRef);

  const timersRef = useRef<Map<string, TimerEntry>>(new Map());

  const clearTimer = (key: string) => {
    const entry = timersRef.current.get(key);
    if (!entry) return;
    clearTimeout(entry.timerId);
    timersRef.current.delete(key);
  };

  const scheduleClose = (key: string, ms: number) => {
    if (!Number.isFinite(ms) || ms <= 0) return;

    clearTimer(key);

    const dueAt = Date.now() + ms;
    const timerId = setTimeout(() => {
      timersRef.current.delete(key);
      state.close(key);
    }, ms);

    timersRef.current.set(key, {
      timerId,
      dueAt,
      remaining: ms,
      paused: false,
    });
  };

  const pause = (key: string) => {
    const entry = timersRef.current.get(key);
    if (!entry || entry.paused) return;

    clearTimeout(entry.timerId);
    const remaining = Math.max(0, entry.dueAt - Date.now());

    timersRef.current.set(key, {
      ...entry,
      remaining,
      paused: true,
      dueAt: Date.now() + remaining,
    });
  };

  const resume = (key: string) => {
    const entry = timersRef.current.get(key);
    if (!entry || !entry.paused) return;

    scheduleClose(key, entry.remaining);
  };

  const add = (toast: ToastContent, opts?: { timeout?: number }) => {
    const {
      variant = "info",
      isDismissable = variant !== "progress",
      ...content
    } = toast;

    const DEFAULT_TIMEOUTS: Record<ToastVariant, number> = {
      success: 5000,
      info: 5000,
      warning: 6000,
      danger: 6000,
      progress: 0,
    };

    const timeout =
      variant === "progress"
        ? Infinity
        : (opts?.timeout ?? DEFAULT_TIMEOUTS[variant]);

    const key = state.add({ ...content, variant, isDismissable });

    scheduleClose(key, timeout);
    return key;
  };

  const close = (key: string) => {
    clearTimer(key);
    state.close(key);
  };

  useEffect(() => {
    const visible = new Set(state.visibleToasts.map((t) => t.key));
    for (const key of timersRef.current.keys()) {
      if (!visible.has(key)) {
        clearTimer(key);
      }
    }
  }, [state.visibleToasts]);

  useEffect(() => {
    return () => {
      for (const key of timersRef.current.keys()) {
        clearTimer(key);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ add, close }}>
      {children}
      <div className="bcds-toaster-viewport" {...regionProps} ref={regionRef}>
        {state.visibleToasts.map((t) => (
          <Toast
            key={t.key}
            title={t.content.title}
            message={t.content.message}
            variant={t.content.variant}
            isDismissable={t.content.isDismissable}
            onClose={() => close(t.key)}
            onPause={() => pause(t.key)}
            onResume={() => resume(t.key)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
