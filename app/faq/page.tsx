"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const faqs = [
    {
      question: "How long does the bespoke process take?",
      answer: "The timeline varies depending on the complexity of the design, but typically ranges from 8-16 weeks. We recommend booking at least 3-6 months in advance for bridal pieces.",
    },
    {
      question: "What is the price range for your couture pieces?",
      answer: "Our bespoke pieces start at ₦250,000 and can go up depending on materials and complexity. During your consultation, we'll provide a detailed quote based on your vision.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide from our atelier in Lagos, Nigeria. International shipping costs and timelines will be discussed during your consultation.",
    },
    {
      question: "What happens during the consultation?",
      answer: "During your private consultation, we'll discuss your vision, preferences, budget, and timeline. We'll explore fabric options, take measurements, and begin sketching your design.",
    },
    {
      question: "How many fittings are included?",
      answer: "Typically 2-4 fittings are included, depending on the complexity of the garment. We want to ensure a perfect fit and will make any necessary adjustments.",
    },
    {
      question: "Can I bring my own fabric?",
      answer: "Absolutely! We're happy to work with fabric you provide, or we can source materials from our trusted suppliers worldwide.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require a 50% non-refundable deposit to begin work. Cancellations made after work has commenced may be subject to additional fees based on progress.",
    },
  ]

  return (
    <div className="min-h-screen pt-32">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg font-sans text-foreground/70">
              Everything you need to know about our bespoke couture process
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: index * 0.1 } } }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                    {faq.question}
                  </h3>
                  <div className="text-rosegold transition-transform">
                    {openItem === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="font-sans leading-relaxed text-foreground/70">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.5 } } }}
            className="mt-20 rounded-3xl border border-rosegold/20 bg-gradient-to-r from-burgundy/10 to-rosegold/20 p-12 text-center"
          >
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mb-8 font-sans text-foreground/70">
              We're here to help! Reach out to us for a private consultation.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=2348132098926"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 rounded-full border border-rosegold/30 transition-all hover:scale-105 font-sans"
            >
              Contact Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
