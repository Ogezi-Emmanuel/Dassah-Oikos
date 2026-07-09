"use client"

import { motion } from "framer-motion"

const TermsOfServicePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: July 2026</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              By accessing our website, you agree to be bound by these Terms of Service and
              all applicable laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              2. Services
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              DASSAH OÍKOS provides bespoke couture services including custom bridal wear,
              evening gowns, and luxury corsetry. All services are subject to availability
              and our discretion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              3. Deposits & Payments
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed mb-4">
              A 50% non-refundable deposit is required to begin work on any custom piece.
              The remaining balance is due before the final fitting or delivery.
            </p>
            <ul className="list-disc list-inside text-gray-300 font-sans space-y-2 ml-4">
              <li>Deposits secure your spot in our production schedule</li>
              <li>All prices are in Nigerian Naira (₦)</li>
              <li>Prices subject to change without notice</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              4. Cancellation Policy
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              If you need to cancel your order, please contact us immediately. Deposits are
              non-refundable. Cancellations made after work has commenced may be subject
              to additional fees based on the progress of your order.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              5. Intellectual Property
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              All content on this website, including but not limited to text, graphics,
              images, videos, and software, is the property of DASSAH OÍKOS and is protected
              by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              6. Contact Us
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              For any questions about these Terms of Service, please contact us at:
              bookings@dassahoikos.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfServicePage
