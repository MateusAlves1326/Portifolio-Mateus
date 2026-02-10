const experiences = [
  {
    period: "Dez/2025 — Atualmente",
    role: "Agile Coach",
    company: "Accenture",
    description: [
      "Desenvolvimento de funcionalidades mobile.",
      "Acompanhamento de sprints.",
      "Melhoria contínua com práticas ágeis.",
    ],
    tags: ["Agile Coach", "Banco do Brasil", "Mobile", "Sprints"],
  },
  {
    period: "Dez/2024 — Ago/2025",
    role: "Scrum Master",
    company: "CúpulaHub",
    description: [
      "Facilitação das cerimônias Scrum.",
      "Criação e manutenção de gateway de pagamentos.",
      "Mediação entre stakeholders e equipe.",
    ],
    tags: ["Scrum", "Gateway de Pagamento", "Stakeholders", "Agile"],
  },
  {
    period: "Jan/2024 — Dez/2024",
    role: "Scrum Master Jr",
    company: "Kejota Code",
    description: [
      "Desenvolvimento de funcionalidades mobile.",
      "Acompanhamento de sprints.",
      "Melhoria contínua com práticas ágeis.",
    ],
    tags: ["Scrum", "Mobilidade Urbana", "Sprints", "Melhoria Contínua"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
        Experiencia Profissional
      </h3>
      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mt-1 text-xs font-mono uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h4 className="font-medium leading-snug text-foreground">
                <span className="text-primary">{exp.role}</span>
                {" · "}
                {exp.company}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary mt-1 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
