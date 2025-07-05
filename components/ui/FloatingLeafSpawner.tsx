'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import leafAnimation from '@/public/leaves.json'

type Leaf = {
  id: string
  left: string
  delay: number
  scale: number
}

export default function FloatingLeafSpawner() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID()
      const left = `${Math.random() * 100}%` // anywhere on the screen
      const delay = Math.random() * 0.7 // slight animation desync
      const scale = 100 + Math.random() * 1.2

      const newLeaf: Leaf = { id, left, delay, scale }
      setLeaves((prev) => [...prev, newLeaf])

      // remove after 10s
      setTimeout(() => {
        setLeaves((prev) => prev.filter((leaf) => leaf.id !== id))
      }, 20000)
    }, 1500) // spawn rate: every 800ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[-20] overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0"
          style={{
            left: leaf.left,
            animation: `fall 10s linear`,
            animationDelay: `${leaf.delay}s`,
            transform: `scale(${leaf.scale})`,
            opacity: Math.random() * 0.3,
          }}
        >
          <Lottie
            animationData={leafAnimation}
            autoplay
            loop={false}
            style={{
              width: 300,
              height: 1000,
            }}
          />
        </div>
      ))}

      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(110%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
