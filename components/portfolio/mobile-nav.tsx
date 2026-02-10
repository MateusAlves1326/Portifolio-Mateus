'use client';

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formacao", href: "#formacao" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
        <span className="text-sm font-bold text-foreground tracking-wide">
          Mateus Alves
        </span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-muted-foreground transition-colors hover:text-primary border-b border-border last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}
