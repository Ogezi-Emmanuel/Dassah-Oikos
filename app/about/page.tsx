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
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              The Designer
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-rosegold mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="aspect-square rounded-3xl overflow-hidden"
            >
              <Image
                src="/Damilola.jpeg"
                alt="Damilola, founder and creative force behind Dassah Oikos"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
                priority
              />
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
            >
              <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
                The Dream of Dassah Oikos
              </h2>
              <p className="mb-6 text-lg font-sans leading-relaxed text-foreground/75">
                Dassah Oikos is rooted in a genuine love for craftsmanship, beauty, and the power
                of clothing to transform how a woman feels. What began as an early fascination with
                sewing grew into a disciplined creative journey shaped by curiosity, resilience, and
                a wholehearted devotion to making something meaningful by hand.
              </p>
              <p className="mb-6 text-lg font-sans leading-relaxed text-foreground/75">
                Over time, that passion was refined through training, practice, and an uncompromising
                commitment to excellence. Every stage of the brand&apos;s evolution has been guided by
                the same belief: that couture should be thoughtful, intentional, and deeply personal
                in the way it honors the wearer.
              </p>
              <p className="mb-8 text-lg font-sans leading-relaxed text-foreground/75">
                Today, Dassah Oikos stands for heartfelt creation, refined structure, and timeless
                elegance. Each commission is approached with passion and wholeheartedness, resulting
                in pieces that feel elevated, feminine, and worthy of the moments they are made for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card/40 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              What We Stand For
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Beauty with Backbone",
                description: "Every silhouette is designed to make presence feel intentional, powerful, and unforgettable."
              },
              {
                title: "Craft Above Convention",
                description: "From corsetry structure to finishing details, each commission is handmade with patience and precision."
              },
              {
                title: "Legacy in Every Look",
                description: "Dassah Oikos creates pieces that outlive the moment and become part of a woman's personal history."
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
                className="bg-card border border-border rounded-2xl p-10 hover:border-rosegold/30 transition-all hover:shadow-xl"
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
                className="overflow-hidden rounded-2xl border border-border bg-card/40"
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
