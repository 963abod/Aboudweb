"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface StylishCarouselItem {
  src: string;
  title?: string;
  alt?: string;
  demoUrl?: string;
  category?: string;
  client?: string;
  technologies?: string[];
}

export interface StylishCarouselProps {
  items: StylishCarouselItem[];
  initialIndex?: number;
  slideSize?: string;
  rotationDegrees?: number;
  inactiveScale?: number;
  yOffsetPercent?: number;
  springBounce?: number;
  springDuration?: number;
  showArrows?: boolean;
  showDots?: boolean;
  clickToNavigate?: boolean;
  autoPlay?: number;
  className?: string;
  onIndexChange?: (index: number) => void;
  borderRadius?: string;
  dotActiveColor?: string;
  dotInactiveColor?: string;
  arrowClassName?: string;
}

const StylishCarousel = ({
  items = [],
  initialIndex = 0,
  slideSize = "clamp(260px, 45vw, 420px)",
  rotationDegrees = 18,
  inactiveScale = 0.72,
  yOffsetPercent = 12,
  springBounce = 0.15,
  springDuration = 0.8,
  showArrows = true,
  showDots = true,
  clickToNavigate = true,
  autoPlay = 0,
  className,
  onIndexChange,
  borderRadius = "1.5rem",
  dotActiveColor = "bg-cyan-400",
  dotInactiveColor = "bg-white/30",
  arrowClassName,
}: StylishCarouselProps) => {
  const clampedInitial = Math.max(0, Math.min(initialIndex, items.length - 1));
  const [activeIndex, setActiveIndex] = useState(clampedInitial);

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      let targetIndex = index;
      if (targetIndex < 0) targetIndex = items.length - 1;
      if (targetIndex >= items.length) targetIndex = 0;

      setActiveIndex(targetIndex);
      onIndexChange?.(targetIndex);
    },
    [items.length, onIndexChange]
  );

  const toPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const toNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toPrev, toNext]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(delta) > 40) {
      delta > 0 ? toNext() : toPrev();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        onIndexChange?.(next);
        return next;
      });
    }, autoPlay);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, items.length, onIndexChange]);

  const spring = {
    type: "spring" as const,
    bounce: springBounce,
    duration: springDuration,
  };

  if (!items.length) return null;

  const currentItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      className={cn("relative flex flex-col items-center select-none w-full", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Stylish Portfolio Carousel"
      role="region"
    >
      <div
        style={{
          width: slideSize,
          aspectRatio: "16 / 10",
        }}
        className="relative mt-4 flex justify-center items-center overflow-visible"
      >
        <motion.div
          className="flex w-fit items-center justify-center"
          animate={{
            x: `calc(${-activeIndex * 100}% / ${items.length})`,
          }}
          transition={spring}
          style={{ width: `${items.length * 100}%` }}
        >
          {items.map((item, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;

            return (
              <motion.div
                key={i}
                style={{
                  width: `${100 / items.length}%`,
                  aspectRatio: "16 / 10",
                }}
                className="flex-shrink-0 flex flex-col items-center gap-3 px-3 will-change-transform"
                animate={{
                  rotate: offset * rotationDegrees,
                  scale: isActive ? 1 : inactiveScale,
                  y: `${offset * yOffsetPercent}%`,
                }}
                transition={spring}
              >
                <AnimatePresence>
                  {item.title && (
                    <motion.span
                      key={`title-${i}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base font-bold whitespace-nowrap text-white/90 tracking-wide"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl group/slide border border-white/10"
                  style={{ borderRadius }}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? item.title ?? `Slide ${i + 1}`}
                    draggable={false}
                    onClick={() => clickToNavigate && goTo(i)}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500 will-change-transform",
                      !isActive && "brightness-60 blur-[1px]",
                      clickToNavigate && !isActive && "cursor-pointer hover:brightness-90"
                    )}
                    loading="lazy"
                  />

                  {isActive && (
                    <motion.div
                      layoutId="glow-ring"
                      className="absolute inset-0 rounded-[inherit] pointer-events-none"
                      style={{
                        boxShadow: "0 0 25px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1)",
                        borderRadius,
                      }}
                      transition={spring}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Active Item Details Overlay */}
      {currentItem && (
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 text-center max-w-lg px-4"
        >
          {currentItem.client && (
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">
              {currentItem.client} • {currentItem.category}
            </p>
          )}
          {currentItem.technologies && currentItem.technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5 mt-2">
              {currentItem.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {currentItem.demoUrl && (
            <a
              href={currentItem.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <span>معاينة المشروع</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      )}

      {/* Carousel Controls */}
      <div className="mt-8 flex items-center gap-4 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl shadow-xl">
        {showArrows && (
          <button
            aria-label="Previous slide"
            onClick={toPrev}
            className={cn(
              "p-2 rounded-full transition-all hover:bg-white/10 text-white/90 hover:text-white",
              arrowClassName
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {showDots && (
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                animate={{
                  width: activeIndex === i ? 28 : 8,
                  opacity: activeIndex === i ? 1 : 0.4,
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className={cn(
                  "h-2 rounded-full cursor-pointer transition-colors",
                  activeIndex === i ? dotActiveColor : dotInactiveColor
                )}
                style={{ minWidth: 8 }}
              />
            ))}
          </div>
        )}

        {showArrows && (
          <button
            aria-label="Next slide"
            onClick={toNext}
            className={cn(
              "p-2 rounded-full transition-all hover:bg-white/10 text-white/90 hover:text-white",
              arrowClassName
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <p className="mt-3 text-xs text-gray-400 font-medium tabular-nums">
        {activeIndex + 1} / {items.length}
      </p>
    </div>
  );
};

export default StylishCarousel;
