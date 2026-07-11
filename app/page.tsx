"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
  const bookingRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    garmentType: "",
    eventDate: "",
    budget: "",
    designBrief: "",
  })

  const handleScrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `
*NEW VIP COUTURE COMMISSION*

Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Location: ${formData.location}
Garment Type: ${formData.garmentType}
Event Date: ${formData.eventDate}
Budget: ${formData.budget}

Design Brief:
${formData.designBrief}
    `.trim()
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=2348132098926&text=${encodedMessage}`, "_blank")
  }



  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="min-h-screen bg-onyx">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/DO Hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-onyx" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            >
              Masterpieces in Corsetry &amp; Couture.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-10 font-sans"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
            >
              Bespoke Bridal, Prom, and Occasion Wear. Crafted in Lagos, Shipped Worldwide.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}
            >
              <Button
                onClick={handleScrollToBooking}
                className="bg-burgundy hover:bg-burgundy/90 text-white text-lg px-10 py-6 h-auto rounded-full border border-rosegold/30 shadow-lg shadow-burgundy/20 transition-all hover:scale-105"
              >
                Commission a Masterpiece
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Couture Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-center"
          >
            The Dassah Experience
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "The Private Consultation",
                description: "Discussing vision, budget, and fabrics."
              },
              {
                step: "02",
                title: "The Architecture",
                description: "Precision measurements and corsetry structuring."
              },
              {
                step: "03",
                title: "The Final Fitting",
                description: "Perfecting the silhouette before global delivery."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.8, delay: index * 0.2 } } }}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-rosegold/50 transition-all hover:shadow-xl hover:shadow-rosegold/10"
              >
                <div className="text-rosegold font-serif text-6xl font-bold mb-4 opacity-30">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Commission Section */}
      <section id="booking" ref={bookingRef} className="py-24 px-6 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Request Your Private Consultation
          </motion.h2>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white font-sans">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="bg-onyx border-border text-white placeholder:text-muted-foreground h-12"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-white font-sans">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
                className="bg-onyx border-border text-white placeholder:text-muted-foreground h-12"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white font-sans">Location (City/Country)</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="bg-onyx border-border text-white placeholder:text-muted-foreground h-12"
                placeholder="Lagos, Nigeria"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="garmentType" className="text-white font-sans">Garment Type</Label>
              <Select
                value={formData.garmentType}
                onValueChange={(value) => setFormData({ ...formData, garmentType: value })}
                required
              >
                <SelectTrigger id="garmentType" className="bg-onyx border-border text-white h-12">
                  <SelectValue placeholder="Select garment type" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border text-white">
                  <SelectItem value="Luxury Corsetry">Luxury Corsetry</SelectItem>
                  <SelectItem value="Custom Bridal">Custom Bridal</SelectItem>
                  <SelectItem value="Prom Dress">Prom Dress</SelectItem>
                  <SelectItem value="Occasion Wear">Occasion Wear</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-white font-sans">Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required
                className="bg-onyx border-border text-white h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white font-sans">Estimated Budget</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
                required
              >
                <SelectTrigger id="budget" className="bg-onyx border-border text-white h-12">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border text-white">
                  <SelectItem value="₦250,000 - ₦500,000">₦250,000 - ₦500,000</SelectItem>
                  <SelectItem value="₦500,000 - ₦1,000,000">₦500,000 - ₦1,000,000</SelectItem>
                  <SelectItem value="₦1,000,000+">₦1,000,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="designBrief" className="text-white font-sans">Design Brief/Inspiration</Label>
              <Textarea
                id="designBrief"
                value={formData.designBrief}
                onChange={(e) => setFormData({ ...formData, designBrief: e.target.value })}
                required
                className="bg-onyx border-border text-white placeholder:text-muted-foreground min-h-[150px]"
                placeholder="Tell us about your vision, inspiration, and any specific details you'd like to include..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-burgundy hover:bg-burgundy/90 text-white text-lg py-7 h-auto rounded-full border border-rosegold/30 shadow-lg shadow-burgundy/20 transition-all hover:scale-[1.02]"
            >
              Submit to Head Designer
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-center"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amara Okafor",
                text: "The most beautiful dress I've ever worn. The craftsmanship is impeccable and the attention to detail is extraordinary.",
                location: "Lagos, Nigeria",
              },
              {
                name: "Zara Hassan",
                text: "From start to finish, the experience was magical. My wedding dress was everything I dreamed of and more.",
                location: "Abuja, Nigeria",
              },
              {
                name: "Sophie Williams",
                text: "Absolutely stunning work! The corsetry is a work of art. I felt like a queen in my custom gown.",
                location: "London, UK",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: index * 0.1 } } }}
                className="bg-onyx/50 border border-border rounded-2xl p-8 hover:border-rosegold/30 transition-all"
              >
                <div className="text-rosegold mb-4 text-2xl">★★★★★</div>
                <p className="text-gray-300 font-sans mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-serif text-white font-bold">{testimonial.name}</div>
                <div className="text-gray-400 font-sans text-sm">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              DASSAH OÍKOS | Bespoke Couture Studio
            </h3>
            <p className="text-muted-foreground text-lg mb-2">
              Lagos 🇳🇬 | Worldwide Orders 🌍
            </p>
            <p className="text-muted-foreground mb-2">
              <a href="mailto:bookings@dassahoikos.com" className="text-rosegold hover:text-white transition-colors">
                Email: bookings@dassahoikos.com
              </a>
            </p>
            <p className="text-muted-foreground mb-8">
              WhatsApp: +234 813 209 8926
            </p>
            <p className="text-muted-foreground text-sm">
              Engineered for Digital Sovereignty
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
