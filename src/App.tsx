import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { MobileNav } from "@/components/portfolio/mobile-nav"
import { Spotlight } from "@/components/portfolio/spotlight"

export function App() {
  return (
    <>
      <Spotlight />
      <MobileNav />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[400px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 pt-20 lg:pt-24">
            <Hero />
          </header>

          <main className="pt-16 lg:w-full lg:py-24">
            <div className="flex flex-col gap-24 lg:gap-32 group/list">
              <About />
              <Experience />
              <Education />
              <Skills />
              <Contact />
            </div>

            <footer className="mt-24 pb-12 text-sm text-muted-foreground">
              <p>
                Desenvolvido com{" "}
                <span className="text-primary">React</span> +{" "}
                <span className="text-primary">Vite</span> e{" "}
                <span className="text-primary">Tailwind CSS</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
