import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ReferenceCard } from "@/components/reference-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonalityCard, PersonalityType } from "@/components/personality-card";
import { FunFactCard } from "@/components/fun-facts-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SkillBadge } from "@/components/skill-badge";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <header>
        <h1 className="sr-only">{DATA.name}&apos;s Portfolio</h1>
        <section id="hero" aria-labelledby="hero-heading">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div id="hero-heading">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                </div>
                <BlurFadeText
                  className="max-w-[600px] text-base md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="w-28 h-28 border">
                  <AvatarImage className="object-cover" alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
      </header>
      <section id="about" aria-labelledby="about-heading">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 id="about-heading" className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work" aria-labelledby="work-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 id="work-heading" className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <ul className="space-y-3">
            {DATA.work.map((work, id) => (
              <li key={work.company}>
                <BlurFade delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                    accomplishments={[...work.accomplishments]}
                  />
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="education" aria-labelledby="education-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 id="education-heading" className="text-xl font-bold">Education</h2>
          </BlurFade>
          <ul className="space-y-3">
            {DATA.education.map((education, id) => (
              <li key={education.school}>
                <BlurFade delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                  <ResumeCard
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                    description={education.description}
                    accomplishments={[...education.accomplishments]}
                  />
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 id="skills-heading" className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <Tabs defaultValue="Technical" className="w-full">
              <TabsList className="flex justify-between mb-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
                {Object.keys(DATA.skills).map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(DATA.skills).map(([category, skills]) => (
                <TabsContent key={category} value={category}>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, id) => (
                      <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                        <SkillBadge name={skill.name} description={skill.description} />
                      </BlurFade>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </BlurFade>
        </div>
      </section>
      <section id="personality" aria-labelledby="personality-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 id="personality-heading" className="text-xl font-bold">Personality</h2>
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(DATA.personality).map(([name, personality]) => (
              <BlurFade key={name} delay={BLUR_FADE_DELAY * 13 + Object.keys(DATA.personality).indexOf(name) * 0.05}>
                <PersonalityCard name={name} personality={personality as PersonalityType} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="fun-facts" aria-labelledby="fun-facts-heading">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 id="fun-facts-heading" className="text-xl font-bold">Fun Facts</h2>
          </BlurFade>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.funFacts.map((fact, index) => (
              <BlurFade key={fact} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
                <FunFactCard fact={fact} delay={BLUR_FADE_DELAY * 15 + index * 0.05} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <li key={project.title}>
                <BlurFade delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="references" aria-labelledby="references-heading">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  References
                </div>
                <h2 id="references-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Don&apos;t take my word for it
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve had the pleasure of working with some amazing people throughout my career. Here&apos;s what a few of them have to say about our experiences together.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.references.map((reference, id) => (
                <BlurFade key={reference.name} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                  <ReferenceCard
                    name={reference.name}
                    title={reference.title}
                    company={reference.company}
                    description={reference.description}
                    image={reference.image}
                    links={reference.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <footer>
        <section id="contact" aria-labelledby="contact-heading">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 19}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just email me{" "}
                  <Link
                    href="mailto:ben@benvalentin.me"
                    className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    here
                  </Link>{" "}
                  and I&apos;ll respond quickly.<br />
                  (I&apos;ll ignore all soliciting.)
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </footer>
    </main>
  );
}