"use client";

import { useEffect } from "react";

export default function TawkToScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/681deaaf4c5e10190a22e6e8/1iqqdpgad";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
