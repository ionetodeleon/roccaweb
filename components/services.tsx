"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileText, Building2, Compass } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Caracterización Urbana",
    description:
      "Trámite ante la Dirección Nacional de Catastro necesario para compraventas, permisos, regularizaciones y obras nuevas. Nos ocupamos del relevamiento, la elaboración de planos catastrales y la presentación técnica para dejar tu documentación en regla sin complicaciones.",
    image: "/images/service-catastro.jpg",
    imageAlt: "Planos catastrales y herramientas de relevamiento",
  },
  {
    icon: Building2,
    title: "BPS e Intendencia",
    description:
      "Gestión integral de permisos de construcción y regularización, formularios, seguridad edilicia y certificados municipales. Acompañamos todo el proceso para que tus trámites avancen sin demoras, garantizando el cumplimiento de las exigencias de BPS y la Intendencia.",
    image: "/images/service-permits.jpg",
    imageAlt: "Edificio municipal de gestión de permisos",
  },
  {
    icon: Compass,
    title: "Proyectos",
    description:
      "Proyectamos espacios prácticos y bien diseñados, pensados para tus necesidades reales. Te asesoramos en la elección del terreno, verificando las normativas. Realizamos el anteproyecto y proyecto ejecutivo para: reformas, ampliaciones y obras nuevas.",
    image: "/images/service-proyecto.jpg",
    imageAlt: "Proyecto residencial moderno",
  },
]

export function Services() {
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
    <section
      ref={sectionRef}
      id="servicios"
      className="py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Lo que hacemos
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Servicios
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isReversed = index % 2 !== 0
            return (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="mb-5 font-serif text-2xl font-light text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
