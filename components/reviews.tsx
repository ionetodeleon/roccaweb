"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    name: "Andrea Lombardo",
    text: "Responsable, excelente comunicación",
    rating: 5,
  },
  {
    name: "Sergio Martínez",
    company: "ALUTIG Soldaduras",
    text: "Persona dinámica, puntual y a un costo coherente.",
    rating: 5,
  },
  {
    name: "Carolina Aguirre",
    text: "Hemos contratado el servicio en varias oportunidades y estamos muy conformes y a gusto con su trabajo. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Patricia González Machado",
    text: "Gonzalo es un excelente profesional. En mi caso, hicimos una caracterización de una propiedad, coordinamos la visita muy rápido y realizó la tarea rapidamente. Lo recomiendo.",
    rating: 5,
  },
  {
    name: "Gabriela Medina",
    text: "Muy buena atención como profesional. Atento a las normas legales y se ocupa por solucionar todo lo posible.",
    rating: 5,
  },
  {
    name: "Matías Coitiño",
    text: "Excelente profesional. Se destaca humildad y confianza. Muy responsable con sus clientes y proyectos.",
    rating: 5,
  },
  {
    name: "Sebastián Riva Goday",
    text: "Muy buen profesional y excelente persona. Vi de cerca el proceso de uno de sus trabajos y recomiendo totalmente.",
    rating: 5,
  },
  {
    name: "Tecnología En Madera",
    text: "Muy confiable, excelente persona y trabajo, recomendable.",
    rating: 5,
  },
  {
    name: "Fernando López",
    text: "Conmigo ha trabajado excelente, lo recomiendo. Ha hecho varias caracterizaciones y una tasación. Todo perfecto y rápido.",
    rating: 5,
  },
  {
    name: "Mario Bruno",
    text: "Excelente profesional muy dedicado.",
    rating: 5,
  },
]

const GOOGLE_RATING = 5.0
const GOOGLE_REVIEW_COUNT = 25

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[0]
}) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="group flex h-full min-w-0 flex-col justify-between border border-border bg-background p-8 transition-all duration-500 hover:border-foreground/20 hover:shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} />
          <Quote className="h-5 w-5 text-foreground/10 transition-colors duration-300 group-hover:text-foreground/20" />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-foreground/80">
          {`"${review.text}"`}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-foreground text-xs font-medium tracking-wider text-primary-foreground">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {review.name}
          </p>
          {review.company && (
            <p className="truncate text-xs text-muted-foreground">
              {review.company}
            </p>
          )}
          <p className="text-xs text-muted-foreground">Google</p>
        </div>
      </div>
    </div>
  )
}

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getCardsPerPage = useCallback(() => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const [cardsPerPage, setCardsPerPage] = useState(3)
  const totalPages = Math.ceil(reviews.length / cardsPerPage)

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage())
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getCardsPerPage])

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

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 6000)
  }, [totalPages])

  useEffect(() => {
    if (isVisible) resetAutoplay()
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [isVisible, resetAutoplay])

  useEffect(() => {
    // Si cambia `cardsPerPage` por resize, aseguramos que la página actual siga siendo válida.
    setCurrentPage((prev) => (totalPages > 0 ? prev % totalPages : 0))
  }, [totalPages])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
    resetAutoplay()
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    resetAutoplay()
  }

  const pages = Array.from({ length: totalPages }, (_, pageIndex) =>
    reviews.slice(
      pageIndex * cardsPerPage,
      pageIndex * cardsPerPage + cardsPerPage
    )
  )

  return (
    <section ref={sectionRef} className="bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Clientes
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl text-balance">
                Lo que dicen de nosotros
              </h2>
            </div>
            <div className="flex items-center gap-6">
              {/* Google badge */}
              <a
                href="https://maps.app.goo.gl/PifqAguBe5UeeoL38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-semibold text-foreground">
                      {GOOGLE_RATING}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {`${GOOGLE_REVIEW_COUNT} reseñas`}
                  </span>
                </div>
              </a>
              {/* Navigation arrows */}
              <div className="hidden gap-2 sm:flex">
                <button
                  onClick={prevPage}
                  className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
                  aria-label="Reseñas anteriores"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextPage}
                  className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
                  aria-label="Reseñas siguientes"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Reviews slider (slide horizontal por páginas) */}
          <div className="mt-14 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {pages.map((pageReviews, pageIndex) => (
                <div
                  key={pageIndex}
                  className="shrink-0"
                  style={{ flex: "0 0 100%" }}
                >
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pageReviews.map((review) => (
                      <div key={review.name}>
                        <ReviewCard review={review} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Page dots + mobile arrows */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground sm:hidden"
              aria-label="Reseñas anteriores"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i)
                    resetAutoplay()
                  }}
                  className={`h-1.5 transition-all duration-300 ${
                    i === currentPage
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground sm:hidden"
              aria-label="Reseñas siguientes"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
