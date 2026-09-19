"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    fetch("https://blog-analytics.zimingding.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || null,
      }),
    }).catch(() => {
      // Analytics should never affect the blog.
    });
  }, []);

  return null;
}