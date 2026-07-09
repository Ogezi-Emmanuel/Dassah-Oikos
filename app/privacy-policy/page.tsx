"use client"

import { motion } from "framer-motion"

const PrivacyPolicyPage = () => {
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
            Privacy Policy
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
              1. Introduction
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              Welcome to DASSAH OÍKOS. We respect your privacy and are committed to protecting
              your personal data. This privacy policy will inform you about how we look after
              your personal data when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              2. Information We Collect
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data
              about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-sans space-y-2 ml-4">
              <li>Identity Data: first name, last name, username or similar identifier</li>
              <li>Contact Data: email address and telephone numbers</li>
              <li>Technical Data: internet protocol (IP) address, browser type and version</li>
              <li>Usage Data: information about how you use our website</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly,
              we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-sans space-y-2 ml-4 mt-4">
              <li>To manage our relationship with you</li>
              <li>To improve our website, products/services, marketing or customer experience</li>
              <li>To make suggestions and recommendations to you about goods or services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              4. Data Security
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              We have put in place appropriate security measures to prevent your personal
              data from being accidentally lost, used or accessed in an unauthorized way,
              altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              5. Contact Us
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices,
              please contact us at: bookings@dassahoikos.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
