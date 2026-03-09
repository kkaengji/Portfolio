import { useState, useEffect, useRef } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  const idsRef = useRef(ids)
  idsRef.current = ids

  useEffect(() => {
    const getActive = () => {
      const scrollY = window.scrollY
      const viewportMid = scrollY + window.innerHeight / 3

      let current = idsRef.current[0]
      for (const id of idsRef.current) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= viewportMid) {
          current = id
        }
      }
      setActive(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    return () => window.removeEventListener('scroll', getActive)
  }, [])

  return active
}
