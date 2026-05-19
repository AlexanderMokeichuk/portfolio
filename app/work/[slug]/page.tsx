import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { CaseStudyHero } from "./_components/CaseStudyHero";
import { CaseStudySection } from "./_components/CaseStudySection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.hasCaseStudy === true).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    return {};
  }

  return {
    title: `${project.title} — Alexander Mokeichuk`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero project={project} />

      <CaseStudySection label="01 / Context" title="Skeleton placeholder">
        <p className="text-ink-2 leading-relaxed">Content for the Context section comes next.</p>
      </CaseStudySection>
    </>
  );
}
