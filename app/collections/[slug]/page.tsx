import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCollectionBySlug, getCollectionsCatalog } from "@/lib/media-library"

export async function generateStaticParams() {
  const collections = await getCollectionsCatalog()
  return collections.map((collection) => ({ slug: collection.slug }))
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = await getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="editorial-shell mb-10 px-6 py-10 md:mb-12 md:px-12 md:py-12">
            <Link
              href="/collections"
              className="font-sans text-xs uppercase tracking-[0.24em] text-burgundy transition-colors hover:text-foreground"
            >
              Back to Collections
            </Link>
            <p className="mt-6 font-sans text-xs uppercase tracking-[0.26em] text-burgundy">
              {collection.eyebrow}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-7xl">
              {collection.title}
            </h1>
            <p className="mt-6 max-w-3xl font-sans leading-relaxed text-foreground/72 md:text-lg">
              {collection.description}
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="editorial-card p-6">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-burgundy">Why It Feels Right</p>
              <p className="mt-4 font-sans leading-relaxed text-foreground/72">
                {collection.emotionalReason}
              </p>
            </div>
            <div className="editorial-card p-6">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-burgundy">Why It Works</p>
              <p className="mt-4 font-sans leading-relaxed text-foreground/72">
                {collection.logicalReason}
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {collection.items.map((item) => (
              <article key={`${collection.slug}-${item.fileName}`} className="editorial-card overflow-hidden p-3">
                {item.kind === "image" ? (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <source src={item.src} type={item.mimeType} />
                    </video>
                  </div>
                )}

                <div className="px-3 pb-4 pt-5">
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-burgundy">
                    {item.kind === "image" ? "Still Frame" : "Motion Piece"}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-foreground">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
