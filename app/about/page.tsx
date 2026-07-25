"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="min-h-screen pt-32">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-burgundy">
              Founder Story
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              The Creative Director
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-foreground/70">
              The woman behind Dassah Oikos shapes each commission with instinct, structure, and a deeply feminine understanding of what a remarkable dress should do.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-rosegold mx-auto"></div>
          </motion.div>

          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="editorial-shell overflow-hidden p-4"
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/Damilola.jpeg"
                  alt="Damilola, founder and creative force behind Dassah Oikos"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 }
                }
              }}
              className="editorial-shell p-8 md:p-10"
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.28em] text-burgundy">
                Creative Vision
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
                The Dream of Dassah Oikos
              </h2>
              <p className="mb-6 text-lg font-sans leading-relaxed text-foreground/75">
                Dassah Oikos was built from a sincere love for craftsmanship, beauty, and the quiet transformation that happens when a woman wears something made with intention. What began as fascination became discipline, and that discipline matured into a couture language rooted in refinement, femininity, and care.
              </p>
              <p className="mb-6 text-lg font-sans leading-relaxed text-foreground/75">
                Over time, that passion was strengthened through training, repetition, and an uncompromising respect for finish. Every piece is approached with the belief that couture should feel considered, flattering, and emotionally right for the woman wearing it.
              </p>
              <p className="mb-8 text-lg font-sans leading-relaxed text-foreground/75">
                Today, the brand stands for thoughtful structure, expressive elegance, and wholehearted creation. The goal is never only to make a dress look beautiful, but to make the woman inside it feel clear, confident, and unforgettable.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Approach", value: "Intentional" },
                  { label: "Silhouette", value: "Refined" },
                  { label: "Finish", value: "Couture" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-rosegold/15 bg-white/35 p-4">
                    <p className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-burgundy">{item.label}</p>
                    <p className="mt-3 font-serif text-2xl font-bold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card/25 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Principles Behind The Brand
            </h2>
            <p className="mx-auto max-w-2xl font-sans leading-relaxed text-foreground/68">
              Every commission is guided by a clear creative standard: beauty, precision, and a final result that feels emotionally true to the moment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Beauty with Backbone",
                description: "Every silhouette is shaped to feel elegant, assured, and strong without losing softness."
              },
              {
                title: "Craft Above Convention",
                description: "From structure to finishing, each garment is treated with patience, detail, and disciplined execution."
              },
              {
                title: "Memory in Every Look",
                description: "Dassah Oikos creates pieces designed to live beyond the event and remain meaningful in memory."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.2 }
                  }
                }}
                className="editorial-card p-10 transition-all hover:border-rosegold/30 hover:shadow-xl"
              >
                <div className="text-5xl text-rosegold mb-6 font-serif">
                  0{index + 1}
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="font-sans text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              The World of Dassah Oikos
            </h2>
            <p className="mx-auto max-w-2xl font-sans leading-relaxed text-foreground/68">
              A house where structure, movement, and emotion come together to create dresses worthy of important rooms and important memories.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                video: "/DO 2.mp4",
                title: "Sculpted for Presence",
                description: "Every piece begins with structure, movement, and the confidence a woman should feel before she says a word.",
              },
              {
                video: "/DO 3.mp4",
                title: "Made for Milestone Moments",
                description: "From bridal statements to red-carpet elegance, Dassah Oikos creates garments worthy of memory, cameras, and legacy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.2 },
                  },
                }}
                className="editorial-card overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="font-sans leading-relaxed text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
