import { Mail, MapPin, Linkedin, Github } from "lucide-react"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formacao", href: "#formacao" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
]

export function Hero() {
  return (
    <header className="flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Mateus Alves Pereira
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-wide text-primary sm:text-xl">
          Scrum Master | Agile Coach | Product Owner
        </h2>
        <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
          Facilitando entregas ageis e de valor para equipes de alto desempenho em ambientes corporativos.
        </p>
      </div>

      <nav className="hidden lg:flex flex-col gap-1" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
            <span className="uppercase tracking-widest text-xs">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-2 mt-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Marabá - PA</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <span>mateus1326a@gmail.com</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/mateus-alves-pereira-52758a2aa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/MateusAlves1326"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </header>
  )
}
