import { GraduationCap } from "lucide-react"

const education = [
  {
    course: "Administracao",
    institution: "Uniaselvi",
    status: "Conclusao: 2024",
    active: false,
  },
]

const certifications = [
  { name: "Scrum", institution: "Certificacao" },
  { name: "Gestao de Vendas", institution: "Curso" },
  { name: "Atendimento ao Cliente", institution: "Curso" },
  { name: "Edicao de Videos", institution: "Curso" },
  { name: "Canva", institution: "Curso" },
]

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-24">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:hidden">
        Formacao
      </h3>

      <div className="flex flex-col gap-8">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Formacao Academica
          </h4>
          <div className="flex flex-col gap-6">
            {education.map((edu) => (
              <div
                key={edu.course}
                className="group relative rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                {edu.active && (
                  <span className="absolute -top-2 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Em andamento
                  </span>
                )}
                <h5 className="font-medium text-foreground">{edu.course}</h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution} — {edu.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
            Cursos e Certificacoes
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 rounded-md border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
