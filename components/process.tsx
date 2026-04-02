"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description:
      "Nos reunimos para conocer tu proyecto, tus necesidades y tu presupuesto. Esta primera consulta no tiene costo.",
  },
  {
    number: "02",
    title: "Anteproyecto",
    description:
      "Desarrollamos las primeras ideas con planos, volumetrias y definiciones espaciales para que puedas visualizar tu proyecto.",
  },
  {
    number: "03",
    title: "Proyecto ejecutivo",
    description:
      "Elaboramos toda la documentacion tecnica necesaria: planos de obra, detalles constructivos, memorias y especificaciones.",
  },
  {
    number: "04",
    title: "Gestion y tramites",
    description:
      "Nos encargamos de todos los permisos y tramites ante los organismos correspondientes: Intendencia, BPS, Catastro.",
  },
]

export function Process() {
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
    <section ref={sectionRef} className="bg-card py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Como trabajamos
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Nuestro proceso
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative border-t border-border py-10 pr-8 transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <span className="mb-6 block font-serif text-3xl font-light text-border transition-colors duration-300 group-hover:text-accent">
                {step.number}
              </span>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
