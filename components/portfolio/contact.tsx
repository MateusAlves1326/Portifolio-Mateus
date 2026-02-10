import { Mail, MapPin, Linkedin, Github, Briefcase } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
        Contato
      </h3>

      <div className="rounded-md border border-border bg-card p-6 sm:p-8">
        <h4 className="text-xl font-bold text-foreground mb-2">Vamos conversar?</h4>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Estou disponivel para trabalho remoto e aberto a novas oportunidades.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="mailto:mateus1326a@gmail.com"
            className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:bg-secondary/50"
          >
            <Mail className="h-4 w-4 text-primary shrink-0" />
            mateus1326a@gmail.com
          </a>

          <div className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            Marabá - PA
          </div>

          <div className="flex items-center gap-3 rounded-md border border-border p-4 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary shrink-0" />
            Disponivel para remoto
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
          <a
            href="https://www.linkedin.com/in/mateus-alves-pereira-52758a2aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/MateusAlves1326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
