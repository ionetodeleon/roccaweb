"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Proyecto arquitectonico moderno"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/70">
            Estudio de Arquitectura
          </p>
          <h1 className="font-serif text-5xl font-light leading-tight text-background md:text-7xl lg:text-8xl">
            {"Precisión en cada detalle"}
          </h1>
        </div>
        <div
          className={`mt-12 transition-all delay-500 duration-1000 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#contacto"
            className="inline-block border border-background/40 px-10 py-4 text-xs uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-background hover:text-foreground"
          >
            Comienza tu proyecto con nosotros
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#servicios" aria-label="Ir a servicios">
          <ArrowDown className="h-5 w-5 animate-bounce text-background/60" />
        </a>
      </div>
    </section>
  )
}
