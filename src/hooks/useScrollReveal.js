import { useEffect, useRef } from 'react'

/**
 * Observes elements with the `.reveal` class inside a container ref.
 * Adds `is-visible` when they enter the viewport (once).
 * Respects prefers-reduced-motion — makes everything visible immediately.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')
    if (elements.length === 0) return

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
