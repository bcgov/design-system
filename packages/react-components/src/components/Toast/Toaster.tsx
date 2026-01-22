import { createContext, useContext, useRef } from "react";
import { useToastRegion } from "react-aria";
import { useToastState } from "react-stately";
import Toast, { ToastVariant } from "./Toast";
import "./Toast.css";

type ToastContent = {
    title?: string;
    message: string;
    variant?: ToastVariant;
    dismissible?: boolean;
};


interface ToastContextValue {
    add: (toast: ToastContent, opts?: { timeout?: number }) => string;
    close: (key: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToastQueue() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToastQueue must be used inside <ToasterProvider />");
    return ctx;
}

export function ToasterProvider({ children }: { children: React.ReactNode }) {
    const state = useToastState<ToastContent>({
        maxVisibleToasts: 3
    }); 
    const regionRef = useRef<HTMLDivElement | null>(null);
    const { regionProps } = useToastRegion({}, state, regionRef); // provides landmark region semantics. [1](https://react-aria.adobe.com/Toast/useToast)

    const add = (toast: ToastContent, opts?: { timeout?: number }) => {
        const {
            variant = "info",
            dismissible = variant !== "progress",
            ...content
        } = toast;

        const DEFAULT_TIMEOUTS: Record<ToastVariant, number> = {
            success: 4000,
            info: 4000,
            error: 6000,
            progress: 0,
        };

        const timeout =
            variant === "progress"
                ? Infinity
                : opts?.timeout ?? DEFAULT_TIMEOUTS[variant];

        return state.add(
            { ...content, variant, dismissible },
            { timeout }
        );
    };


    const close = (key: string) => state.close(key);

    return (
        <ToastContext.Provider value={{ add, close }}>
            {children}
            <div className="bcds-toaster-viewport" {...regionProps} ref={regionRef}>
                {state.visibleToasts.map(t => (
                    <Toast
                        key={t.key}
                        title={t.content.title}
                        message={t.content.message}
                        variant={t.content.variant}
                        dismissible={t.content.dismissible}
                        onClose={() => close(t.key)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
