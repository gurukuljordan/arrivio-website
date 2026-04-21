"use client";

import Image from "next/image";
import type { TouchEvent as ReactTouchEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AppScreenshot } from "@/content/site";

type AppScreensShowcaseProps = {
  screenshots: AppScreenshot[];
};

export function AppScreensShowcase({ screenshots }: AppScreensShowcaseProps) {
  const midpoint = Math.ceil(screenshots.length / 2);
  const topRow = screenshots.slice(0, midpoint);
  const bottomRow = screenshots.slice(midpoint);
  const safeBottomRow = bottomRow.length > 0 ? bottomRow : topRow;
  const topItems = topRow.map((screen, index) => ({ screen, originalIndex: index }));
  const bottomItems = safeBottomRow.map((screen, index) => ({
    screen,
    originalIndex: bottomRow.length > 0 ? midpoint + index : index
  }));
  const dotCount = useMemo(() => Math.min(6, Math.max(3, Math.ceil(screenshots.length / 2))), [screenshots.length]);
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchResumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swipeStartRef = useRef<{ x: number; y: number; at: number } | null>(null);
  const selectedScreen = selectedIndex !== null ? screenshots[selectedIndex] : null;

  useEffect(() => {
    if (isPaused || dotCount <= 1) return;

    const interval = setInterval(() => {
      setActiveDot((previous) => (previous + 1) % dotCount);
    }, 2400);

    return () => clearInterval(interval);
  }, [dotCount, isPaused]);

  useEffect(() => {
    return () => {
      if (touchResumeTimerRef.current) {
        clearTimeout(touchResumeTimerRef.current);
      }
    };
  }, []);

  function handleTouchPause() {
    if (touchResumeTimerRef.current) {
      clearTimeout(touchResumeTimerRef.current);
    }
    setIsPaused(true);
  }

  function handleTouchResume() {
    if (touchResumeTimerRef.current) {
      clearTimeout(touchResumeTimerRef.current);
    }
    touchResumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1800);
  }

  function openPreview(index: number) {
    setSelectedIndex(index);
    setIsPaused(true);
  }

  const closePreview = useCallback(() => {
    setSelectedIndex(null);
    setIsPaused(false);
  }, []);

  const showNext = useCallback(() => {
    if (screenshots.length <= 1) return;
    setSelectedIndex((previous) => {
      if (previous === null) return 0;
      return (previous + 1) % screenshots.length;
    });
  }, [screenshots.length]);

  const showPrev = useCallback(() => {
    if (screenshots.length <= 1) return;
    setSelectedIndex((previous) => {
      if (previous === null) return 0;
      return (previous - 1 + screenshots.length) % screenshots.length;
    });
  }, [screenshots.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePreview();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closePreview, selectedIndex, showNext, showPrev]);

  function handleLightboxTouchStart(event: ReactTouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    if (!touch) return;
    swipeStartRef.current = { x: touch.clientX, y: touch.clientY, at: Date.now() };
  }

  function handleLightboxTouchEnd(event: ReactTouchEvent<HTMLDivElement>) {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    if (!touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    const elapsed = Date.now() - start.at;

    const isHorizontalSwipe = Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;
    const isQuickEnough = elapsed < 800;

    if (!isHorizontalSwipe || !isQuickEnough) return;

    if (deltaX < 0) {
      showNext();
    } else {
      showPrev();
    }
  }

  return (
    <>
      <div
        className={`screens-showcase space-y-5 ${isPaused ? "is-paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchPause}
        onTouchEnd={handleTouchResume}
        onTouchCancel={handleTouchResume}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="screens-marquee">
          <div className="screens-track screens-track-left">
            {[...topItems, ...topItems].map((item, index) => (
              <button
                key={`${item.screen.src}-top-${index}`}
                type="button"
                className="phone-shot"
                onClick={() => openPreview(item.originalIndex)}
                aria-label={`Open ${item.screen.title} screenshot`}
              >
                <div className="phone-notch" aria-hidden />
                <Image
                  src={item.screen.src}
                  alt={item.screen.alt}
                  width={1170}
                  height={2532}
                  className="h-full w-full object-cover object-top"
                />
                <p className="phone-shot-label">{item.screen.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="screens-marquee">
          <div className="screens-track screens-track-right">
            {[...bottomItems, ...bottomItems].map((item, index) => (
              <button
                key={`${item.screen.src}-bottom-${index}`}
                type="button"
                className="phone-shot"
                onClick={() => openPreview(item.originalIndex)}
                aria-label={`Open ${item.screen.title} screenshot`}
              >
                <div className="phone-notch" aria-hidden />
                <Image
                  src={item.screen.src}
                  alt={item.screen.alt}
                  width={1170}
                  height={2532}
                  className="h-full w-full object-cover object-top"
                />
                <p className="phone-shot-label">{item.screen.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-dots" aria-hidden>
          {Array.from({ length: dotCount }).map((_, index) => (
            <span key={`showcase-dot-${index}`} className={`showcase-dot ${activeDot === index ? "is-active" : ""}`} />
          ))}
        </div>
      </div>

      {selectedScreen ? (
        <div className="screen-lightbox-backdrop" role="dialog" aria-modal="true" aria-label={selectedScreen.title} onClick={closePreview}>
          <div className="screen-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="screen-lightbox-close" onClick={closePreview} aria-label="Close preview">
              Close
            </button>
            <div className="screen-lightbox-body">
              <button
                type="button"
                className="screen-lightbox-nav"
                aria-label="Previous screenshot"
                onClick={showPrev}
                disabled={screenshots.length <= 1}
              >
                ‹
              </button>
              <div
                className="screen-lightbox-frame"
                onTouchStart={handleLightboxTouchStart}
                onTouchEnd={handleLightboxTouchEnd}
              >
                <Image
                  src={selectedScreen.src}
                  alt={selectedScreen.alt}
                  width={1170}
                  height={2532}
                  className="h-[78vh] w-auto max-w-full object-contain"
                />
              </div>
              <button
                type="button"
                className="screen-lightbox-nav"
                aria-label="Next screenshot"
                onClick={showNext}
                disabled={screenshots.length <= 1}
              >
                ›
              </button>
            </div>
            <p className="screen-lightbox-caption">{selectedScreen.title}</p>
            <p className="screen-lightbox-hint">Swipe left or right to view more screens</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
