// This React hook is designed for use in the Vite kitchen sink application, and
// not required by any components in the exported component library.

import { useCallback, useEffect, useState } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height,
      isExtraExtraLarge: width ? width >= 1400 : false,
      isExtraLarge: width ? width >= 1200 : false,
      isLarge: width ? width >= 992 : false,
      isMedium: width ? width >= 768 : false,
      isSmall: width ? width >= 576 : false,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}
