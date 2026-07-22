"use client"

import { motion } from "framer-motion"

const CollectionsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const collections = [
    {
      id: 1,
      name: "Look 01",
      description: "A study in sculpted femininity and polished couture finish.",
      video: "/DO 1.mp4",
    },
    {
      id: 2,
      name: "Look 02",
      description: "Designed to command the room with grace, structure, and ease.",
      video: "/DO 2.mp4",
    },
    {
      id: 3,
      name: "Look 03",
      description: "Where dramatic shape meets refined detailing.",
      video: "/DO 3.mp4",
    },
    {
      id: 4,
      name: "Look 04",
      description: "A bold silhouette built for milestone entrances.",
      video: "/DO 4.mp4",
    },
    {
      id: 5,
      name: "Look 05",
      description: "Soft movement, rich finish, and unmistakable presence.",
      video: "/DO 5.mp4",
    },
    {
      id: 6,
      name: "Look 06",
      description: "An elegant composition of proportion, polish, and luxury.",
      video: "/DO 6.mp4",
    },
    {
      id: 7,
      name: "Look 07",
      description: "Crafted to feel cinematic from the first glance.",
      video: "/DO 7.mp4",
    },
    {
      id: 8,
      name: "Look 08",
      description: "Statement dressing with couture restraint and precision.",
      video: "/DO 8.mp4",
    },
    {
      id: 9,
      name: "Look 09",
      description: "A luxurious silhouette shaped for confidence and memory.",
      video: "/DO 9.mp4",
    },
    {
      id: 10,
      name: "Look 10",
      description: "Refined glamour interpreted through movement and finish.",
      video: "/DO 10.mp4",
    },
    {
      id: 11,
      name: "Look 11",
      description: "An editorial closing note in the language of couture.",
      video: "/DO 11.mp4",
    },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              The Collections
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-sans text-foreground/70">
              A moving library of Dassah Oikos silhouettes, corsetry, and occasion dressing
              captured in motion.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.15 } } }}
            className="mb-16 rounded-3xl border border-rosegold/25 bg-card/70 p-8 text-center"
          >
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
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: index * 0.1 } } }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={collection.video} type="video/mp4" />
                  </video>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  {collection.name}
                </h3>
                <p className="mb-4 font-sans text-foreground/70">
                  {collection.description}
                </p>
                <p className="text-rosegold font-sans">Dassah Oikos in motion</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollectionsPage
