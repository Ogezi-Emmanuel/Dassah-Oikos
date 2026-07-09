"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

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
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
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
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/DO 1.mp4" type="video/mp4" />
              </video>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
                Crafting Dreams into Masterpieces
              </h2>
              <p className="text-gray-300 text-lg mb-6 font-sans leading-relaxed">
                Welcome to DASSAH OÍKOS, where luxury meets artistry in the heart of Lagos.
              </p>
              <p className="text-gray-300 text-lg mb-6 font-sans leading-relaxed">
                Founded with a passion for exquisite craftsmanship and timeless elegance.
              </p>
              <p className="text-gray-300 text-lg mb-8 font-sans leading-relaxed">
                From intimate consultations to final fittings, we guide you through every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Our Philosophy
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Uncompromising Quality",
                description: "We source only the finest materials and fabrics from around the world."
              },
              {
                title: "Artisanal Craftsmanship",
                description: "Every piece is handcrafted with meticulous attention to detail."
              },
              {
                title: "Timeless Elegance",
                description: "Designs that transcend trends and stand the test of time."
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
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-sans">{item.description}</p>
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              The Atelier
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/DO 2.mp4" type="video/mp4" />
              </video>
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
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/DO 3.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
