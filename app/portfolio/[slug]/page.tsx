import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/src/data/projects';
import { ProjectDetailClient } from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  return {
    title: `${project.label} - Petra Construcciones`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 && currentIndex >= 0 ? projects[currentIndex + 1] : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
