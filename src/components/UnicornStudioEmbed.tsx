"use client"

import { useEffect, useRef } from 'react';

interface UnicornStudioEmbedProps {
  projectId: string;
  className?: string;
}

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function UnicornStudioEmbed({ projectId, className = "" }: UnicornStudioEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if UnicornStudio is already loaded
    if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
      return;
    }

    // Load UnicornStudio script if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`unicorn-studio-container ${className}`}
    >
      <div
        data-us-project={projectId}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}