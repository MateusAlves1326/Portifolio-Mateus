import { Zap, Users, Brain, BarChart3, Monitor, Globe } from "lucide-react"

const skillGroups = [
  {
    title: "Agile & Scrum",
    icon: Zap,
    items: ["Agile & Scrum", "Facilitacao de cerimonias", "Lideranca servidora"],
  },
  {
    title: "Lideranca & Comunicacao",
    icon: Users,
    items: ["Lideranca e Comunicacao", "Mediacao de conflitos", "Gestao de stakeholders"],
  },
  {
    title: "Metricas Ageis",
    icon: BarChart3,
    items: ["Velocity / Cycle Time", "Burndown Charts", "Burnup Charts"],
  },
  {
    title: "Resolucao de Problemas",
    icon: Brain,
    items: ["Resolucao de problemas", "Melhoria continua", "Pensamento critico"],
  },
  {
    title: "Tecnologia",
    icon: Monitor,
    items: ["Pacote Office", "Ferramentas de gestao", "Adaptacao a novas tecnologias"],
  },
  {
    title: "Idiomas",
    icon: Globe,
    items: ["Portugues (fluente)", "Espanhol (intermediario)", "Ingles (iniciante)"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
        Habilidades
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="group rounded-md border border-border bg-card p-5 transition-all hover:border-primary/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <group.icon className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">{group.title}</h4>
            </div>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
