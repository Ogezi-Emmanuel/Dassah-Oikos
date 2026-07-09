"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const CollectionsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const collections = [
    {
      id: 1,
      name: "Bridal Couture 2024",
      description: "Elegant and timeless wedding gowns",
      category: "bridal",
      video: "/DO 1.mp4",
    },
    {
      id: 2,
      name: "Evening Elegance",
      description: "Luxury evening wear for special occasions",
      category: "evening",
      video: "/DO 2.mp4",
    },
    {
      id: 3,
      name: "Corsetry Collection",
      description: "Masterpieces in structured corsetry",
      category: "corsetry",
      video: "/DO 3.mp4",
    },
    {
      id: 4,
      name: "Prom Dreams",
      description: "Show-stopping prom dresses",
      category: "prom",
      video: "/DO 4.mp4",
    },
  ]

  const filteredCollections = activeFilter === "all"
    ? collections
    : collections.filter(c => c.category === activeFilter)

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
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              Our Collections
            </h1>
            <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto">
              Explore our exclusive collections of bespoke couture, each piece crafted
              with passion and precision.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2 } } }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {["all", "bridal", "corsetry", "evening", "prom"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border transition-all font-sans capitalize ${
                  activeFilter === filter
                    ? "bg-burgundy border-burgundy text-white"
                    : "border-border text-gray-400 hover:border-rosegold/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {filteredCollections.map((collection, index) => (
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
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-400 font-sans mb-4">
                  {collection.description}
                </p>
                <button className="text-rosegold hover:text-white font-sans flex items-center gap-2 transition-colors">
                  View Collection →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollectionsPage
