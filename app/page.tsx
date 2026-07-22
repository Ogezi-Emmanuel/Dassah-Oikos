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
import ScrollHandler from "@/components/ScrollHandler"

const serviceOptions = [
  {
    value: "consultation",
    label: "Request a Consultation",
    fee: "Complimentary",
    description: "A complimentary first step to discuss your garment, event, and timeline.",
  },
  {
    value: "creative-director",
    label: "Request Private Consultation with the Creative Director",
    fee: "Paid Session | ₦150,000",
    description: "A paid strategy session focused on creative direction, styling depth, and couture planning.",
  },
  {
    value: "personalized-sketch",
    label: "Request Personalized Sketch",
    fee: "Paid Concept | ₦250,000",
    description: "A paid sketch request for clients who want a custom visual concept before commissioning.",
  },
] as const

const garmentOptions = [
  "Luxury Corsetry",
  "Custom Bridal",
  "Prom Dress",
  "Occasion Wear",
] as const

const garmentPricing: Record<(typeof garmentOptions)[number], string[]> = {
  "Luxury Corsetry": [
    "₦1,200,000 - ₦1,800,000",
    "₦1,800,000 - ₦2,500,000",
    "₦2,500,000+",
  ],
  "Custom Bridal": [
    "₦2,500,000 - ₦4,000,000",
    "₦4,000,000 - ₦6,500,000",
    "₦6,500,000+",
  ],
  "Prom Dress": [
    "₦950,000 - ₦1,500,000",
    "₦1,500,000 - ₦2,200,000",
    "₦2,200,000+",
  ],
  "Occasion Wear": [
    "₦1,000,000 - ₦1,600,000",
    "₦1,600,000 - ₦2,400,000",
    "₦2,400,000+",
  ],
}

const consultationModes = [
  "Virtual Consultation",
  "Private In-Studio Consultation",
  "Phone Strategy Session",
] as const

const sketchFormats = [
  "Single Signature Look",
  "Detailed Couture Concept",
  "Event Capsule Direction",
] as const

export default function Home() {
  const bookingRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    serviceType: serviceOptions[0].value as (typeof serviceOptions)[number]["value"],
    fullName: "",
    phoneNumber: "",
    location: "",
    garmentType: "",
    eventDate: "",
    budget: "",
    designBrief: "",
    consultationMode: "",
    consultationFocus: "",
    sketchFormat: "",
    inspirationLink: "",
  })

  const handleScrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedService = serviceOptions.find((service) => service.value === formData.serviceType) ?? serviceOptions[0]

    const messageSections = [
      "*NEW DASSAH OIKOS REQUEST*",
      "",
      `Service Requested: ${selectedService.label}`,
      `Service Fee: ${selectedService.fee}`,
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phoneNumber}`,
      `Location: ${formData.location}`,
      `Garment Type: ${formData.garmentType}`,
      `Target Date: ${formData.eventDate}`,
      `Investment Range: ${formData.budget}`,
      "",
    ]

    if (formData.serviceType === "consultation") {
      messageSections.push("Consultation Brief:")
      messageSections.push(formData.designBrief)
    }

    if (formData.serviceType === "creative-director") {
      messageSections.push(`Preferred Format: ${formData.consultationMode}`)
      messageSections.push("")
      messageSections.push("Creative Direction Request:")
      messageSections.push(formData.consultationFocus)
    }

    if (formData.serviceType === "personalized-sketch") {
      messageSections.push(`Sketch Format: ${formData.sketchFormat}`)
      messageSections.push(`Inspiration Link: ${formData.inspirationLink || "Not provided"}`)
      messageSections.push("")
      messageSections.push("Sketch Direction:")
      messageSections.push(formData.designBrief)
    }

    const message = messageSections.join("\n").trim()
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://api.whatsapp.com/send?phone=2348132098926&text=${encodedMessage}`, "_blank")
  }

  const budgetOptions = formData.garmentType
    ? garmentPricing[formData.garmentType as (typeof garmentOptions)[number]]
    : []

  const handleGarmentChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      garmentType: value,
      budget: "",
    }))
  }

  const handleServiceChange = (value: (typeof serviceOptions)[number]["value"]) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
      consultationMode: "",
      consultationFocus: "",
      sketchFormat: "",
      inspirationLink: "",
      designBrief: "",
    }))
  }

  const selectedService = serviceOptions.find((service) => service.value === formData.serviceType) ?? serviceOptions[0]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollHandler />
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#2f1614]/35 via-[#6d4c48]/20 to-background/90" />
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
            className="mb-16 text-center font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          >
            The Dassah Experience
          </motion.h2>

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
                className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-rosegold/50 hover:shadow-xl hover:shadow-rosegold/10"
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

      {/* VIP Commission Section */}
      <section id="booking" ref={bookingRef} className="py-24 px-6 bg-card/70">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-center"
          >
            Request a Consultation
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto mb-12 max-w-xl text-center font-sans text-lg text-foreground/70"
          >
            Choose the service that matches your stage. Complimentary discovery calls and paid premium requests each have their own tailored process.
          </motion.p>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Label className="text-foreground font-sans">Choose Your Experience</Label>
              <div className="grid gap-4 md:grid-cols-3">
                {serviceOptions.map((service) => {
                  const isActive = formData.serviceType === service.value

                  return (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() => handleServiceChange(service.value)}
                      className={`rounded-2xl border p-5 text-left transition-all ${
                        isActive
                          ? "border-rosegold bg-rosegold/10 shadow-lg shadow-rosegold/10"
                          : "border-border bg-background/70 hover:border-rosegold/40"
                      }`}
                    >
                      <div className="mb-2 font-serif text-lg text-foreground">{service.label}</div>
                      <p className="mb-3 text-sm font-sans leading-relaxed text-foreground/70">
                        {service.description}
                      </p>
                      <p className="text-xs font-sans uppercase tracking-[0.2em] text-burgundy">{service.fee}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-rosegold/25 bg-background/80 p-5">
              <p className="font-serif text-xl text-foreground">{selectedService.label}</p>
              <p className="mt-2 font-sans text-sm uppercase tracking-[0.2em] text-burgundy">
                {selectedService.fee}
              </p>
              <p className="mt-3 font-sans text-sm text-foreground/70">
                {selectedService.value === "consultation"
                  ? "This first conversation is complimentary and helps us understand your couture needs."
                  : "This is a paid premium request. Once you submit, payment guidance will be shared through WhatsApp before the service is confirmed."}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-sans">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="h-12 border-border bg-background text-foreground placeholder:text-foreground/45"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-foreground font-sans">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
                className="h-12 border-border bg-background text-foreground placeholder:text-foreground/45"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-foreground font-sans">Location (City/Country)</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className="h-12 border-border bg-background text-foreground placeholder:text-foreground/45"
                placeholder="Lagos, Nigeria"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="garmentType" className="text-foreground font-sans">
                {formData.serviceType === "personalized-sketch" ? "What should we sketch?" : "Garment Type"}
              </Label>
              <Select
                value={formData.garmentType}
                onValueChange={handleGarmentChange}
                required
              >
                <SelectTrigger id="garmentType" className="h-12 border-border bg-background text-foreground">
                  <SelectValue placeholder="Select garment type" />
                </SelectTrigger>
                <SelectContent className="border-border bg-card text-foreground">
                  {garmentOptions.map((garment) => (
                    <SelectItem key={garment} value={garment}>
                      {garment}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-foreground font-sans">
                {formData.serviceType === "creative-director" ? "When do you need direction by?" : "Event Date"}
              </Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required
                className="h-12 border-border bg-background text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-foreground font-sans">
                {formData.serviceType === "creative-director" ? "Desired Investment Tier" : "Estimated Investment"}
              </Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
                disabled={!formData.garmentType}
                required
              >
                <SelectTrigger id="budget" className="h-12 border-border bg-background text-foreground">
                  <SelectValue placeholder={formData.garmentType ? "Select investment range" : "Select garment type first"} />
                </SelectTrigger>
                <SelectContent className="border-border bg-card text-foreground">
                  {budgetOptions.map((budget) => (
                    <SelectItem key={budget} value={budget}>
                      {budget}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm font-sans text-foreground/65">
                Pricing is tailored to the garment selected and the level of detailing required.
              </p>
            </div>

            {formData.serviceType === "consultation" && (
              <div className="space-y-2">
                <Label htmlFor="designBrief" className="text-foreground font-sans">What would you like us to know?</Label>
                <Textarea
                  id="designBrief"
                  value={formData.designBrief}
                  onChange={(e) => setFormData({ ...formData, designBrief: e.target.value })}
                  required
                  className="min-h-[150px] border-border bg-background text-foreground placeholder:text-foreground/45"
                  placeholder="Share your event, preferred silhouette, mood, fit expectations, and any details that matter to you."
                />
              </div>
            )}

            {formData.serviceType === "creative-director" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="consultationMode" className="text-foreground font-sans">Preferred Consultation Format</Label>
                  <Select
                    value={formData.consultationMode}
                    onValueChange={(value) => setFormData({ ...formData, consultationMode: value })}
                    required
                  >
                    <SelectTrigger id="consultationMode" className="h-12 border-border bg-background text-foreground">
                      <SelectValue placeholder="Choose a format" />
                    </SelectTrigger>
                    <SelectContent className="border-border bg-card text-foreground">
                      {consultationModes.map((mode) => (
                        <SelectItem key={mode} value={mode}>
                          {mode}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consultationFocus" className="text-foreground font-sans">What do you want the creative director to guide you on?</Label>
                  <Textarea
                    id="consultationFocus"
                    value={formData.consultationFocus}
                    onChange={(e) => setFormData({ ...formData, consultationFocus: e.target.value })}
                    required
                    className="min-h-[150px] border-border bg-background text-foreground placeholder:text-foreground/45"
                    placeholder="Tell us whether you need direction on silhouette, styling, fabric mood, couture finishing, event image, or overall concept."
                  />
                </div>
              </>
            )}

            {formData.serviceType === "personalized-sketch" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="sketchFormat" className="text-foreground font-sans">Sketch Package</Label>
                  <Select
                    value={formData.sketchFormat}
                    onValueChange={(value) => setFormData({ ...formData, sketchFormat: value })}
                    required
                  >
                    <SelectTrigger id="sketchFormat" className="h-12 border-border bg-background text-foreground">
                      <SelectValue placeholder="Choose a sketch format" />
                    </SelectTrigger>
                    <SelectContent className="border-border bg-card text-foreground">
                      {sketchFormats.map((format) => (
                        <SelectItem key={format} value={format}>
                          {format}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inspirationLink" className="text-foreground font-sans">Reference Link (Optional)</Label>
                  <Input
                    id="inspirationLink"
                    value={formData.inspirationLink}
                    onChange={(e) => setFormData({ ...formData, inspirationLink: e.target.value })}
                    className="h-12 border-border bg-background text-foreground placeholder:text-foreground/45"
                    placeholder="Paste a Pinterest, Instagram, or mood-board link"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designBrief" className="text-foreground font-sans">Describe the sketch you want</Label>
                  <Textarea
                    id="designBrief"
                    value={formData.designBrief}
                    onChange={(e) => setFormData({ ...formData, designBrief: e.target.value })}
                    required
                    className="min-h-[150px] border-border bg-background text-foreground placeholder:text-foreground/45"
                    placeholder="Describe the silhouette, embellishment mood, neckline, color direction, and how you want the look to feel."
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              className="w-full bg-burgundy hover:bg-burgundy/90 text-white text-lg py-7 h-auto rounded-full border border-rosegold/30 shadow-lg shadow-burgundy/20 transition-all hover:scale-[1.02]"
            >
              {formData.serviceType === "consultation"
                ? "Send Complimentary Consultation Request"
                : formData.serviceType === "creative-director"
                  ? "Request Private Consultation & Payment Details"
                  : "Request Personalized Sketch & Payment Details"}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-card/60">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16 text-center"
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
                className="rounded-2xl border border-border bg-background/80 p-8 transition-all hover:border-rosegold/30"
              >
                <div className="text-rosegold mb-4 text-2xl">★★★★★</div>
                <p className="mb-6 font-sans italic leading-relaxed text-foreground/75">
                  "{testimonial.text}"
                </p>
                <div className="font-serif font-bold text-foreground">{testimonial.name}</div>
                <div className="font-sans text-sm text-foreground/65">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}
