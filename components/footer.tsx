import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-white.png"
                alt="Rocca Arquitectos"
                width={150}
                height={71}
                className="h-8 w-auto brightness-0"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Estudio de arquitectura en Montevideo, Uruguay. Proyectos, tramites y gestion integral.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <span className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Navegacion
            </span>
            <Link
              href="/#inicio"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </Link>
            <Link
              href="/#nosotros"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Contacto
            </span>
            <a
              href="mailto:info@roccaarquitectos.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              info@roccaarquitectos.com
            </a>
            <a
              href="https://wa.me/59899123456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3 w-3" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rocca_arquitectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-3 w-3" />
              @rocca_arquitectos
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2025 Rocca Arquitectos. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
