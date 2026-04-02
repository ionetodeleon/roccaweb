import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto - Rocca Arquitectos",
  description:
    "Contacta a Rocca Arquitectos. Enviamos presupuesto detallado sin costo para tu proyecto.",
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-end bg-foreground pb-20 pt-40 lg:pb-28 lg:pt-52">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/50">
            Contacto
          </p>
          <h1 className="font-serif text-4xl font-light text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            Enviamos presupuesto detallado sin costo. Estamos a las ordenes para resolver cualquier consulta sobre tu proyecto.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-20">
            {/* Sidebar info */}
            <aside className="flex flex-col gap-10 lg:col-span-1">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-light text-foreground">
                  Informacion
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:info@roccaarquitectos.com"
                        className="mt-1 text-sm text-foreground transition-colors hover:text-accent"
                      >
                        info@roccaarquitectos.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/59899123456"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-foreground transition-colors hover:text-accent"
                      >
                        +598 96 110 801
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/rocca_arquitectos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 text-sm text-foreground transition-colors hover:text-accent"
                      >
                        @rocca_arquitectos
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Ubicacion
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        Montevideo, Uruguay
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Proyectos en todo el pais
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Horario
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        Lunes a Viernes
                      </p>
                      <p className="text-xs text-muted-foreground">
                        9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-10 font-serif text-2xl font-light text-foreground">
                Enviar consulta
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
