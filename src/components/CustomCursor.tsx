import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [isHover, setIsHover] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80)
    }

    const onEnter = () => setIsVisible(true)
    const onLeave = () => setIsVisible(false)

    const addHover = () => {
      const hoverEls = document.querySelectorAll('a, button, [role="button"], .card')
      hoverEls.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHover(true))
        el.addEventListener('mouseleave', () => setIsHover(false))
      })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    // Re-add hover listeners periodically (for dynamically rendered elements)
    addHover()
    const interval = setInterval(addHover, 2000)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      clearInterval(interval)
    }
  }, [isVisible])

  return (
    <>
      {/* Main dot */}
      <div
        className={`cursor ${isHover ? 'hover' : ''}`}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Ring follower */}
      <div
        className={`cursor-follower ${isHover ? 'hover' : ''}`}
        style={{
          left: follower.x,
          top: follower.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
