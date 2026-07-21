import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BUSINESS_INFO } from '@/lib/constants'
import { getAllProjectDraftSlugs, getProjectDraft } from '@/lib/projects'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllProjectDraftSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectDraft(params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} (Draft)`,
    description: project.draftNote,
    robots: { index: false, follow: false },
  }
}

export default function ProjectDraftPage({ params }: { params: { slug: string } }) {
  const project = getProjectDraft(params.slug)
  if (!project || project.published !== false) notFound()

  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
          Draft — not indexed
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-sm text-gray-600 mb-8">{project.draftNote}</p>
        <dl className="space-y-4 text-gray-700">
          <div>
            <dt className="font-semibold">City</dt>
            <dd>{project.city}</dd>
          </div>
          <div>
            <dt className="font-semibold">Property type</dt>
            <dd>{project.propertyType}</dd>
          </div>
          <div>
            <dt className="font-semibold">Service performed</dt>
            <dd>{project.servicePerformed}</dd>
          </div>
          <div>
            <dt className="font-semibold">Customer goal</dt>
            <dd>{project.customerGoal}</dd>
          </div>
          <div>
            <dt className="font-semibold">Challenges</dt>
            <dd>{project.challenges}</dd>
          </div>
          <div>
            <dt className="font-semibold">Work completed</dt>
            <dd>{project.workCompleted}</dd>
          </div>
          <div>
            <dt className="font-semibold">Results</dt>
            <dd>{project.results}</dd>
          </div>
          <div>
            <dt className="font-semibold">Before / after images</dt>
            <dd className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-sm">
              [IMAGE PLACEHOLDER — add real before/after photographs with permission before publishing]
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={project.relatedServiceHref} className="text-primary-600 font-semibold hover:underline">
            Related service
          </Link>
          <Link href={project.relatedLocationHref} className="text-primary-600 font-semibold hover:underline">
            Related location
          </Link>
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="text-primary-600 font-semibold hover:underline">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
