"use client"

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface UnicornStudioEmbedProps {
  projectId: string;
  darkProjectId?: string;
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

export default function UnicornStudioEmbed({ projectId, darkProjectId, className = "" }: UnicornStudioEmbedProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [embedsInitialized, setEmbedsInitialized] = useState(false);

  // Ensure component is mounted before using theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Load UnicornStudio script only once
    if (!window.UnicornStudio && !scriptLoaded) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      script.onload = function() {
        // Delay initialization to ensure DOM elements are ready
        setTimeout(() => {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
          setScriptLoaded(true);
        }, 100);
      };

      (document.head || document.body).appendChild(script);
    } else if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
      setScriptLoaded(true);
    }
  }, [scriptLoaded]);

  // Initialize embeds after script loads and set visibility after initialization
  useEffect(() => {
    if (scriptLoaded && window.UnicornStudio && window.UnicornStudio.isInitialized && mounted) {
      // Re-init to ensure all embeds are detected
      setTimeout(() => {
        window.UnicornStudio.init();
        // Allow time for embeds to initialize before applying visibility logic
        setTimeout(() => {
          setEmbedsInitialized(true);
        }, 300);
      }, 200);
    }
  }, [scriptLoaded, mounted]);

  // Re-initialize when theme changes to ensure proper loading
  useEffect(() => {
    if (embedsInitialized && window.UnicornStudio && window.UnicornStudio.isInitialized) {
      // Brief delay to ensure visibility changes have taken effect
      setTimeout(() => {
        window.UnicornStudio.init();
      }, 100);
    }
  }, [theme, embedsInitialized]);

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return <div className={`unicorn-studio-container ${className}`} />;
  }

  const isDark = theme === 'dark';

  return (
    <div className={`unicorn-studio-container ${className}`} style={{ position: 'relative' }}>
      {/* Light mode embed */}
      <div
        data-us-project={projectId}
        style={{
          width: '100%',
          height: '100%',
          visibility: embedsInitialized ? (isDark ? 'hidden' : 'visible') : 'visible',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: embedsInitialized ? 1 : 0,
        }}
      />

      {/* Dark mode embed - only render if darkProjectId is provided */}
      {darkProjectId && (
        <div
          data-us-project={darkProjectId}
          style={{
            width: '100%',
            height: '100%',
            visibility: embedsInitialized ? (isDark ? 'visible' : 'hidden') : 'visible',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: embedsInitialized ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}