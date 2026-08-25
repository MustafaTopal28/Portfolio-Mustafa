// lib/animations.ts
import { useRef, useEffect } from 'react'

/**
 * Custom hook to trigger fade-in animation on scroll
 * Usage: const ref = useScrollAnimation()
 * Then: <div ref={ref} className="opacity-0">...</div>
 */
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Helper to generate staggered animation delays
 * Usage: style={{ animationDelay: getStaggerDelay(index) }}
 */
export const getStaggerDelay = (index: number, baseDelay = 0.1): string => {
  return `${index * baseDelay}s`
}

/**
 * Animation class names (mapped to tailwind.config.js keyframes)
 */
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideInUp: 'animate-slide-in-up',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse-custom',
  glow: 'animate-glow',
  blink: 'animate-blink',
  bounce: 'animate-bounce-custom',
  rotate: 'animate-rotate',
  float: 'animate-float',
} as const

export type AnimationClass = keyof typeof animationClasses