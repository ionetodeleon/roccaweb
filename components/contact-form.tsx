"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_o0c24mf"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ez4o49a"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "bH_7DkCpUShlwvvzH"

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Falta configurar EmailJS")
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "No proporcionado",
        subject: formData.subject,
        message: formData.message,
      }, {
        publicKey,
      })

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 className="mb-6 h-12 w-12 text-accent" />
        <h3 className="mb-3 font-serif text-2xl font-light text-foreground">
          Mensaje enviado
        </h3>
        <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
            placeholder="tu@email.com"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
            placeholder="099 123 456"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Asunto *
          </label>
          <select
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-foreground"
          >
            <option value="">Selecciona un asunto</option>
            <option value="Caracterizacion Urbana">Caracterizacion Urbana</option>
            <option value="Permisos BPS / Intendencia">Permisos BPS / Intendencia</option>
            <option value="Proyecto de Arquitectura">Proyecto de Arquitectura</option>
            <option value="Consulta General">Consulta General</option>
            <option value="Presupuesto">Solicitud de Presupuesto</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="resize-none border-b border-border bg-transparent py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
          placeholder="Contanos sobre tu proyecto o consulta..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-3 bg-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar mensaje</span>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
