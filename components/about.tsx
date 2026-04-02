"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="bg-card py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="/images/arquitectos.jpg"
              alt="Gonzalo y Antonella, arquitectos de Rocca Arquitectos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Quiénes somos
            </p>
            <h2 className="mb-10 font-serif text-4xl font-light text-foreground md:text-5xl">
              Nosotros
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Somos Gonzalo y Antonella, los arquitectos detrás de este estudio.
                Completamos nuestra formación en la Facultad de Arquitectura Diseño y
                Urbanismo de la Udelar.
              </p>
              <p>
                Trabajamos de manera cercana y transparente, explicando cada etapa del
                proceso y asegurando un proyecto ordenado.
              </p>
              <p>
                Desde la idea inicial hasta los detalles finales, buscamos soluciones
                funcionales, estéticas y coherentes con tus necesidades.
              </p>
              <p>
                Estamos radicados en Montevideo, pero acompañamos proyectos en cualquier
                punto del país.
              </p>
            </div>

            <div className="mt-12 flex gap-12">
              <div>
                <span className="font-serif text-3xl font-light text-foreground">UdelaR</span>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Formación
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-light text-foreground">MVD</span>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Radicados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
