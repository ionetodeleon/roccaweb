"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function FeaturedImage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`relative aspect-[16/7] overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <Image
            src="/images/featured-building.jpg"
            alt="Proyecto arquitectónico residencial contemporáneo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
