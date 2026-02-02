"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyIframeProps {
  children: ReactNode;
  className?: string;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazyIframe({ 
  children, 
  className = "", 
  placeholder = null,
  threshold = 0.01,
  rootMargin = "200px" 
}: LazyIframeProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isInView ? children : placeholder}
    </div>
  );
}
