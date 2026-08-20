import { useState, useEffect, useRef } from 'react'

/**
 * Tracks which section is currently visible in the viewport.
 * Returns the id of the active section for nav highlighting.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')
  const sectionIdsRef = useRef(sectionIds)

  useEffect(() => {
    sectionIdsRef.current = sectionIds
  }, [sectionIds])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.25,
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80}px 0px 0px 0px`,
      }
    )

    sectionIdsRef.current.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
