import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Rocca Arquitectos | Estudio de Arquitectura en Montevideo, Uruguay',
  description: 'Estudio de arquitectura en Montevideo especializado en proyectos residenciales, permisos de construccion, caracterizacion urbana y tramites ante la Intendencia. Presupuesto sin costo.',
  keywords: ['arquitectos montevideo', 'estudio de arquitectura uruguay', 'permisos de construccion', 'caracterizacion urbana', 'proyectos arquitectonicos', 'tramites intendencia montevideo'],
  openGraph: {
    title: 'Rocca Arquitectos | Estudio de Arquitectura en Montevideo',
    description: 'Estudio de arquitectura especializado en proyectos residenciales, permisos y tramites. Presupuesto sin costo.',
    locale: 'es_UY',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
