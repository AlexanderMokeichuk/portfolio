import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";

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
    <div className="py-24">
      <h1>{project.title}</h1>
      <p>Case study coming soon — under construction.</p>
    </div>
  );
}
