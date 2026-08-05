"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const TestimonialsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const testimonials = [
    {
      name: "Amara Okafor",
      text: "The most beautiful dress I've ever worn. The craftsmanship is impeccable and the attention to detail is extraordinary. Every bead, every seam, every curve was placed with intention. I felt like royalty on my wedding day.",
      location: "Lagos, Nigeria",
      garment: "Custom Bridal"
    },
    {
      name: "Zara Hassan",
      text: "From start to finish, the experience was magical. Damilola listened to every detail I shared and translated it into a dress that exceeded all my expectations. My wedding dress was everything I dreamed of and more.",
      location: "Abuja, Nigeria",
      garment: "Custom Bridal"
    },
    {
      name: "Sophie Williams",
      text: "Absolutely stunning work! The corsetry is a work of art. I felt like a queen in my custom gown. I live in London and was worried about the distance, but the entire process was seamless from consultation to delivery.",
      location: "London, UK",
      garment: "Luxury Corsetry"
    },
    {
      name: "Funke Adebayo",
      text: "I commissioned a prom dress and I must say, it was the talk of the entire night. The structure, the detailing, the fit — absolutely perfect. I have never received so many compliments in my life.",
      location: "Port Harcourt, Nigeria",
      garment: "Prom Dress"
    },
    {
      name: "Maya Johnson",
      text: "I flew in from Houston specifically to be measured at the atelier, and it was worth every mile. The private consultation with the creative director gave me so much confidence in the process. The final piece was beyond worth it.",
      location: "Houston, USA",
      garment: "Custom Bridal"
    },
    {
      name: "Adaeze Nwosu",
      text: "I did both my traditional marriage outfit and white wedding with Dassah Oikos. Two very different looks, both executed flawlessly. Damilola understands a woman's body and how to dress it with elegance and confidence.",
      location: "Enugu, Nigeria",
      garment: "Aso Ebi & Bridal"
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-burgundy">
              Client Stories
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-7xl">
              What Our Clients Say
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-foreground/70">
              Real stories from women who trusted Dassah Oikos with their most important moments.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-rosegold mx-auto mt-8"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.1 }
                  }
                }}
                className="editorial-card p-8 transition-all hover:border-rosegold/30 hover:shadow-xl"
              >
                <div className="text-rosegold mb-6 text-2xl">★★★★★</div>
                <p className="mb-8 font-sans italic leading-relaxed text-foreground/75">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-rosegold/15 pt-6">
                  <div className="font-serif text-xl font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-sm text-foreground/65 mt-1">
                    {testimonial.location}
                  </div>
                  <div className="mt-3 inline-flex rounded-full border border-rosegold/20 bg-rosegold/8 px-4 py-1.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-burgundy">
                    {testimonial.garment}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <p className="mb-8 font-sans text-lg leading-relaxed text-foreground/72">
              Ready to create your own story with Dassah Oikos?
            </p>
            <Link
              href="/#booking"
              className="inline-flex rounded-full border border-rosegold/35 bg-burgundy px-10 py-5 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-white shadow-[0_16px_40px_rgba(97,39,44,0.22)] transition-all hover:scale-[1.02] hover:bg-burgundy/90"
            >
              Begin Your Commission
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
