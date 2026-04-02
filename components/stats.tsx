"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "100%", label: "Presupuesto sin costo" },
  { value: "UY", label: "Proyectos en todo el pais" },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="border-y border-border py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <span className="block font-serif text-3xl font-light text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
