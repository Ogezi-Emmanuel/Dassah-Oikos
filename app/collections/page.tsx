import Image from "next/image"
import Link from "next/link"
import { getCollectionsCatalog } from "@/lib/media-library"

export default async function CollectionsPage() {
  const collections = await getCollectionsCatalog()

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="editorial-shell mb-12 px-6 py-12 text-center md:mb-16 md:px-12 md:py-14">
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-burgundy">
              Curated Media Library
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              The Collections
            </h1>
            <p className="mx-auto max-w-3xl text-lg font-sans leading-relaxed text-foreground/70">
              Discover each world through one signature image and one motion piece, then step into the full collection for the rest of the story.
            </p>
          </div>

          <div className="editorial-card mb-12 p-6 text-center md:mb-16 md:p-8">
            <p className="font-sans text-lg text-foreground/75">
              Looking for more references and behind-the-scenes inspiration?
            </p>
            <a
              href="https://www.instagram.com/d.a.s.s.a.h_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-rosegold/40 bg-burgundy px-6 py-3 font-sans text-white transition-all hover:scale-105 hover:bg-burgundy/90"
            >
              Explore More on Instagram
            </a>
          </div>

          <div className="space-y-8 md:space-y-12">
            {collections.map((collection) => (
              <article key={collection.slug} className="editorial-shell overflow-hidden p-5 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="space-y-5">
                    <p className="font-sans text-xs uppercase tracking-[0.26em] text-burgundy">
                      {collection.eyebrow}
                    </p>
                    <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                      {collection.title}
                    </h2>
                    <p className="max-w-2xl font-sans leading-relaxed text-foreground/72">
                      {collection.description}
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-rosegold/15 bg-white/35 p-5">
                        <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">Emotional Pull</p>
                        <p className="mt-3 font-sans leading-relaxed text-foreground/72">
                          {collection.emotionalReason}
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-rosegold/15 bg-white/35 p-5">
                        <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">Logical Appeal</p>
                        <p className="mt-3 font-sans leading-relaxed text-foreground/72">
                          {collection.logicalReason}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/collections/${collection.slug}`}
                      className="inline-flex w-full justify-center rounded-full border border-rosegold/30 bg-burgundy px-6 py-4 text-center font-sans text-[0.72rem] uppercase tracking-[0.22em] text-white transition-all hover:scale-105 hover:bg-burgundy/90 sm:w-auto sm:px-8"
                    >
                      See Collection
                    </Link>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="editorial-card p-3">
                      {collection.featuredImage ? (
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                          <Image
                            src={collection.featuredImage.src}
                            alt={collection.featuredImage.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 30vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,rgba(111,62,58,0.78),rgba(183,110,121,0.52),rgba(255,247,244,0.4))] p-6">
                          <div>
                            <p className="font-sans text-xs uppercase tracking-[0.24em] text-white/80">
                              Featured Still
                            </p>
                            <h3 className="mt-3 font-serif text-4xl font-bold leading-tight text-white">
                              {collection.title}
                            </h3>
                          </div>
                        </div>
                      )}
                      <p className="px-2 pb-2 pt-4 font-serif text-2xl font-bold text-foreground">
                        {collection.featuredImage ? collection.featuredImage.title : `${collection.title} Portrait`}
                      </p>
                      <p className="px-2 font-sans text-xs uppercase tracking-[0.2em] text-burgundy">
                        Featured Image
                      </p>
                    </div>

                    <div className="editorial-card p-3">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover"
                        >
                          <source src={collection.featuredVideo.src} type={collection.featuredVideo.mimeType} />
                        </video>
                      </div>
                      <p className="px-2 pb-2 pt-4 font-serif text-2xl font-bold text-foreground">
                        {collection.featuredVideo.title}
                      </p>
                      <p className="px-2 font-sans text-xs uppercase tracking-[0.2em] text-burgundy">
                        Featured Motion
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
