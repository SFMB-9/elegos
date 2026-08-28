"use client";

import { useEffect, useRef, useState } from "react";
import type OpenSeadragon from "openseadragon";
interface OsdViewerProps {
  /** IIIF Image Service base URL (without /info.json) or plain image URL */
  src: string;
  className?: string;
}

export default function OsdViewer({ src, className }: OsdViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    setReady(false);

    let viewer: OpenSeadragon.Viewer | null = null;

    // Dynamic import keeps OpenSeadragon out of the SSR bundle
    import("openseadragon").then(({ default: OpenSeadragon }) => {
      if (!containerRef.current) return;

      const isIIIF = !src.match(/\.(jpe?g|png|webp|gif)(\?.*)?$/i);

      viewer = OpenSeadragon({
        element: containerRef.current,
        tileSources: isIIIF ? src + "/info.json" : {
          type: "image",
          url: src,
        },
        showNavigationControl: false,
        showNavigator: true,
        navigatorPosition: "BOTTOM_RIGHT",
        gestureSettingsMouse: {
          scrollToZoom: true,
          clickToZoom: false,
          dblClickToZoom: true,
        },
        immediateRender: true,
        animationTime: 0.5,
        blendTime: 0.1,
        minZoomLevel: 0.5,
        maxZoomLevel: 20,
        visibilityRatio: 0.5,
      });

      viewer.addHandler("open", () => {
        requestAnimationFrame(() => {
          if (!viewer) return;

          viewer.viewport.goHome(true);
          viewer.viewport.applyConstraints();
          viewer.forceRedraw();

          requestAnimationFrame(() => {
            viewer?.forceRedraw();
            setReady(true);
          });
        });
      });
    });

    return () => {
      viewer?.destroy();
    };
  }, [src]);

  return (
    <div className={`relative ${className ?? ""}`} style={{ background: "var(--wall)" }}>
      {/* Loading placeholder — hidden once OSD fires open */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif italic text-sm text-ink-soft animate-pulse">cargando…</span>
        </div>
      )}
      {/* OSD mounts here; opacity hides flicker before the viewport is positioned */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.35s ease" }}
      />
    </div>
  );
}
