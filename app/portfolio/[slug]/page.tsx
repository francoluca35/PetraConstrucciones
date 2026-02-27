import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/src/data/projects';
import { SITE_URL } from '@/src/lib/site';
import { ProjectDetailClient } from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Proyecto no encontrado' };
  const title = `${project.label} | Constructora Conesa - Mérida, Yucatán`;
  const url = `${SITE_URL}/portfolio/${slug}`;
  return {
    title,
    description: project.description,
    keywords: `proyecto construcción Mérida, ${project.label}, constructora Conesa, construcción residencial comercial Yucatán, ${project.category ?? 'construcción'}, obra realizada Mérida, portfolio Constructora Estrategia Conesa, referencia construcción península, proyecto llave en mano Mérida, ${project.location ?? 'Mérida Yucatán'} construcción`,
    openGraph: {
      title,
      description: project.description,
      url,
      images: project.image ? [{ url: project.image.startsWith('http') ? project.image : `${SITE_URL}${project.image}` }] : undefined,
      locale: 'es_MX',
    },
    twitter: { card: 'summary_large_image', title, description: project.description },
    alternates: { canonical: url },
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
