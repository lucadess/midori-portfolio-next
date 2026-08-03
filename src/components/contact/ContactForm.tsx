"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"

const CONTACT_EMAIL = "midori.fuchs@gmail.com"

const inputClasses =
  "w-full rounded-2xl border-2 border-greenDark/20 bg-white px-5 py-3 text-greenDark placeholder:text-greenDark/40 outline-none transition-colors focus:border-orangeDark"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const subject = `Portfolio message from ${name || "a mystery visitor"}`
    const body = `${message}\n\n—\n${name}\n${email}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 text-left">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-heading text-lg font-bold">
          Your name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-heading text-lg font-bold">
          Your email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@doe.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-heading text-lg font-bold">
          What&apos;s on your mind?
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project, your dream collaboration, or just say hi..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="flex flex-col items-start gap-3 pt-2">
        <Button type="submit" size="lg" className="px-8">
          Send it my way
        </Button>
        <p className="text-sm text-greenDark/70">
          This&apos;ll pop open your email app with everything filled in — just hit send from there.
        </p>
      </div>
    </form>
  )
}
