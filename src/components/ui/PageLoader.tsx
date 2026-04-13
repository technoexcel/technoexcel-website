"use client";
import { useEffect } from "react";

export default function PageLoader() {
  useEffect(() => {
    const el = document.getElementById("te-page-loader");
    if (el) {
      el.style.opacity = "0";
      const t = setTimeout(() => el.remove(), 450);
      return () => clearTimeout(t);
    }
  }, []);
  return null;
}
