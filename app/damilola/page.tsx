"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink } from "lucide-react"

const DamilolaPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="editorial-shell overflow-hidden p-4 order-2 md:order-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/Damilola.jpeg"
                  alt="Damilola Haddasah Obisesan, Founder and Creative Director"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.15 }
                }
              }}
              className="order-1 md:order-2"
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-burgundy">
                Founder &amp; Creative Director
              </p>
              <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
                Damilola Haddasah Obisesan
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-rosegold mb-8"></div>
              <p className="mb-8 font-sans text-xl leading-relaxed text-foreground/78">
                A fashion founder building two worlds — one rooted in couture craft, the other rooted in community.
              </p>

              {/* Socials */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/damilola_obis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-rosegold/25 bg-white/55 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-foreground/80 transition-all hover:bg-burgundy hover:text-white hover:border-burgundy"
                >
                  <Instagram size={16} />
                  @damilola_obis
                </a>
                <a
                  href="https://www.preneurin.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-rosegold/25 bg-white/55 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-foreground/80 transition-all hover:bg-burgundy hover:text-white hover:border-burgundy"
                >
                  <ExternalLink size={16} />
                  Preneurin.org
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Origin / Story Section */}
      <section className="bg-card/25 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-burgundy">
              Founder Origin · 2004
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Where the story began.
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="editorial-shell p-8 md:p-14"
          >
            <p className="mb-6 font-sans text-lg leading-relaxed text-foreground/75">
              Before fashion became her career, it was her survival. In 2004, during one of the hardest phases of her life, Damilola found comfort in an unexpected place: <span className="font-semibold text-foreground">sewing.</span>
            </p>
            <p className="mb-6 font-sans text-lg leading-relaxed text-foreground/75">
              She had no formal training and no real tools. Just thread, a needle, curiosity, and the stubborn desire to create something beautiful. She still remembers cutting her first dress from a fabric meant to be thrown away, stitching under a dim lantern so nobody would notice.
            </p>
            <p className="font-sans text-lg leading-relaxed text-foreground/75">
              That early "yes" became a compass into fashion. It is the same spirit that now guides both of her brands — a belief that something meaningful can always be stitched together, even when the odds feel stacked against you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Brands Section */}
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
              A Woman of Two Worlds
            </h2>
            <p className="mx-auto max-w-2xl font-sans leading-relaxed text-foreground/68">
              Damilola leads with equal parts artistry and strategy — building two brands that honor craft and lift people.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Dassah Oikos Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.1 }
                }
              }}
              className="editorial-card p-10 transition-all hover:border-rosegold/30 hover:shadow-xl"
            >
              <p className="mb-4 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-burgundy">
                Creative Director · Currently
              </p>
              <h3 className="mb-6 font-serif text-3xl font-bold text-foreground">
                DASSAH OÍKOS
              </h3>
              <p className="mb-6 font-sans leading-relaxed text-foreground/72">
                A premier Lagos-based Bespoke Couture Studio specializing in Luxury Corsetry, Custom Bridal, and Occasion Wear. Under Damilola's creative direction, the house has become synonymous with sculpted silhouettes, emotional elegance, and meticulous finishing.
              </p>
              <p className="mb-8 font-sans leading-relaxed text-foreground/72">
                Every commission reflects her belief that couture should move beyond beauty — it should give a woman confidence, presence, and a sense of coming home to herself.
              </p>
              <Link
                href="/about"
                className="inline-flex rounded-full border border-rosegold/30 bg-burgundy px-8 py-3 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy/90"
              >
                Explore the Brand
              </Link>
            </motion.div>

            {/* Preneurin Card - accurate from the website */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.25 }
                }
              }}
              className="editorial-card p-10 transition-all hover:border-rosegold/30 hover:shadow-xl"
            >
              <p className="mb-4 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-burgundy">
                Founder · Currently
              </p>
              <h3 className="mb-6 font-serif text-3xl font-bold text-foreground">
                PRENEURIN
              </h3>
              <p className="mb-5 font-sans leading-relaxed text-foreground/72">
                A community room where <span className="font-semibold text-foreground">fashion designers learn together, share real experiences, and grow with more clarity.</span> Built for fashion founders, by a fashion founder.
              </p>
              <p className="mb-5 font-sans leading-relaxed text-foreground/72">
                Preneurin started from a simple aim: to create a space where designers can connect with honesty and without pretence. The first live session in Lagos, April 2025, confirmed how badly that room was needed.
              </p>
              <p className="mb-5 font-sans leading-relaxed text-foreground/72">
                It is built to move designers emotionally and still make clear practical sense — six pillars shaping every session:
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-3 font-sans text-sm text-foreground/72">
                {[
                  "Knowledge Sharing",
                  "Business Guidance",
                  "Meaningful Connections",
                  "Entrepreneur Growth",
                  "Personal Development",
                  "Professional Excellence",
                ].map((pillar) => (
                  <li key={pillar} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-rosegold" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.preneurin.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rosegold/30 bg-burgundy px-8 py-3 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy/90"
              >
                Visit Preneurin.org
                <ExternalLink size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-card/25 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Her Philosophy
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="editorial-shell p-10 md:p-16"
          >
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground italic text-center">
              "Whatever your hands find to do — whether it is stitching a corset, leading a boardroom, or dreaming up the next chapter of your life — do it with intention. Do it with elegance. Do it like it was always yours to build."
            </blockquote>
            <div className="mt-10 text-center">
              <p className="font-serif text-xl font-bold text-foreground">— Damilola Haddasah Obisesan</p>
              <p className="mt-2 font-sans text-sm text-foreground/60">
                Creative Director, Dassah Oíkos · Founder, Preneurin
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DamilolaPage;
