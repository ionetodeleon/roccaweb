"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
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
      id="contacto"
      className="bg-foreground py-28 lg:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/50">
            Contacto
          </p>
          <h2 className="font-serif text-4xl font-light text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            {"¿Tienes preguntas?"}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            {"¡Hablemos de tu proyecto! Enviamos presupuesto detallado sin costo. Estamos a las ordenes para resolver cualquier consulta."}
          </p>
        </div>

        <div
          className={`mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center transition-all delay-300 duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 bg-primary-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] text-foreground transition-all duration-300 hover:bg-primary-foreground/90"
          >
            <span>Escribinos</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:info@roccaarquitectos.com"
            className="inline-flex items-center gap-3 border border-primary-foreground/20 px-10 py-5 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
          >
            info@roccaarquitectos.com
          </a>
        </div>
      </div>
    </section>
  )
}
