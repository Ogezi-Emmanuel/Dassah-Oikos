"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const HousePage = () => {
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
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-burgundy">
              Inside the House
            </p>
            <h1 className="mb-6 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
              The House of Dassah
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-rosegold mx-auto mb-8"></div>
            <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-foreground/70">
              Explore the ethos, the experience, and the voices that define what Dassah Oíkos means to the women we dress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY WOMEN CHOOSE DASSAH OIKOS */}
      <section className="px-6 pb-24 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="editorial-card p-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/Custom Reception dress 1.jpg"
                alt="Dassah Oikos custom occasion dress"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.8, delay: 0.15 } } }}
            className="editorial-shell p-6 md:p-10"
          >
            <p className="font-sans text-xs uppercase tracking-[0.26em] text-burgundy">
              Why Women Choose Dassah Oikos
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Beauty that feels emotional, and quality that makes sense.
            </h2>
            <p className="mt-6 max-w-2xl font-sans leading-relaxed text-foreground/72">
              The right dress does more than look beautiful. It lets a woman move with confidence, trust her silhouette, and enjoy her moment without second-guessing anything.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "It is designed to highlight the body in a soft, elegant, and intentional way.",
                "It is made for the specific event, so the dress feels right for the room, the photographs, and the memory.",
                "It is crafted with structure and finish, so it does not only impress at first glance, it holds up beautifully through the day.",
              ].map((point, index) => (
                <div key={point} className="rounded-[1.4rem] border border-rosegold/15 bg-white/35 p-5">
                  <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">0{index + 1}</p>
                  <p className="mt-3 font-sans leading-relaxed text-foreground/72">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE DASSAH EXPERIENCE */}
      <section className="bg-card/25 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-4 text-center font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          >
            The Dassah Experience
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center font-sans text-lg text-foreground/65 md:mx-auto md:max-w-2xl"
          >
            Every commission follows three intentional steps designed to bring clarity, precision, and delight to your couture journey.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "The First Conversation",
                description: "A thoughtful start centered on your event, preferences, and ideal silhouette.",
              },
              {
                step: "02",
                title: "The Architecture",
                description: "Precision measurements, couture decisions, and structural refinement.",
              },
              {
                step: "03",
                title: "The Final Fitting",
                description: "Perfecting the finish, fit, and presence before delivery.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.8, delay: index * 0.2 } } }}
                className="editorial-card relative p-8 transition-all hover:border-rosegold/50 hover:shadow-xl hover:shadow-rosegold/10"
              >
                <div className="text-rosegold font-serif text-6xl font-bold mb-4 opacity-30">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/70 font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy mb-4">
              Client Stories
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              What Our Clients Say
            </h2>
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
                  &ldquo;{testimonial.text}&rdquo;
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <p className="mb-8 font-sans text-lg leading-relaxed text-foreground/72">
              Ready to write your own story with Dassah Oíkos?
            </p>
            <Link
              href="/#booking"
              className="inline-flex rounded-full border border-rosegold/35 bg-burgundy/92 px-10 py-5 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-white shadow-[0_16px_40px_rgba(97,39,44,0.22)] transition-all hover:scale-[1.02] hover:bg-burgundy"
            >
              Begin Your Commission
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HousePage;
