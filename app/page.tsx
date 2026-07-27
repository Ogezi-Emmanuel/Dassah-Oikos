"use client"

import Image from "next/image"
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
    description: "A discovery conversation for clients who want to understand the right couture direction before committing.",
  },
  {
    value: "creative-director",
    label: "Request Private Consultation with the Creative Director",
    fee: "Paid Add-On | Aso Ebi ₦108,000 | Wedding ₦150,000",
    description: "A premium route for Aso Ebi and Wedding clients who want direct creative direction, strategy, and styling clarity.",
  },
  {
    value: "personalized-sketch",
    label: "Request Personalized Sketch",
    fee: "Paid Concept | ₦100,000",
    description: "A paid concept sketch service that is waived when the client proceeds with outfit creation through the brand.",
  },
] as const

const categoryOptions = [
  "Introduction",
  "Aso Ebi",
  "Wedding",
  "Prom",
  "Custom Dresses",
] as const

const privateConsultationEligibleOptions = [
  "Aso Ebi",
  "Wedding",
] as const

const pricingByCategory: Record<(typeof categoryOptions)[number], string[]> = {
  Introduction: [
    "₦400,000 - ₦500,000 (Without beadings)",
    "₦600,000 - ₦900,000",
  ],
  "Aso Ebi": [
    "₦350,000 - ₦900,000",
    "₦900,000 - ₦1,500,000",
  ],
  Wedding: [
    "₦2,000,000 - ₦4,000,000",
  ],
  Prom: [
    "$1,500 - $5,000",
  ],
  "Custom Dresses": [
    "₦2,000,000 - ₦3,000,000",
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

  const availableCategoryOptions =
    formData.serviceType === "creative-director"
      ? privateConsultationEligibleOptions
      : categoryOptions

  const getServiceFee = (
    serviceType: (typeof serviceOptions)[number]["value"],
    category: string,
  ) => {
    if (serviceType === "consultation") {
      return "Complimentary"
    }

    if (serviceType === "creative-director") {
      if (category === "Aso Ebi") return "₦108,000"
      if (category === "Wedding") return "₦150,000"

      return "Select Aso Ebi or Wedding to view the consultation fee"
    }

    return "₦100,000"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedService = serviceOptions.find((service) => service.value === formData.serviceType) ?? serviceOptions[0]
    const selectedServiceFee = getServiceFee(formData.serviceType, formData.garmentType)

    const messageSections = [
      "*NEW DASSAH OIKOS REQUEST*",
      "",
      `Service Requested: ${selectedService.label}`,
      `Service Fee: ${selectedServiceFee}`,
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phoneNumber}`,
      `Location: ${formData.location}`,
      `Collection Category: ${formData.garmentType}`,
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
    ? pricingByCategory[formData.garmentType as (typeof categoryOptions)[number]]
    : []

  const handleCategoryChange = (value: string) => {
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
      garmentType: "",
      budget: "",
    }))
  }

  const selectedService = serviceOptions.find((service) => service.value === formData.serviceType) ?? serviceOptions[0]
  const selectedServiceFee = getServiceFee(formData.serviceType, formData.garmentType)
  const maleDressMessage = encodeURIComponent(
    [
      "Hello Dassah Oikos,",
      "",
      "I would like to make an enquiry about a custom male dress/outfit.",
      "",
      "My name:",
      "My location:",
      "Occasion/event:",
      "Preferred style or inspiration:",
      "Timeline:",
      "Budget range:",
    ].join("\n"),
  )
  const maleDressWhatsAppUrl = `https://api.whatsapp.com/send?phone=2348086268136&text=${maleDressMessage}`

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollHandler />
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/DO Hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,8,8,0.24),rgba(14,8,8,0.18),rgba(14,8,8,0.52))]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20 pt-32 text-center sm:px-6 sm:pb-24 sm:pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto max-w-3xl translate-y-6 sm:translate-y-10"
          >
            <motion.h1
              className="mb-5 font-serif text-[2.6rem] font-bold leading-[0.95] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.35)] sm:text-5xl md:text-7xl lg:text-8xl"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15 } } }}
            >
              Couture for unforgettable entrances.
            </motion.h1>
            <motion.p
              className="mx-auto mb-9 max-w-fit rounded-full border border-white/18 bg-black/16 px-5 py-3 font-sans text-[0.9rem] leading-relaxed text-white shadow-[0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur-[6px] md:text-base"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } }}
            >
              Bespoke dresses shaped with elegance, structure, and presence.
            </motion.p>
            <motion.div
              className="flex flex-col items-center justify-center gap-3 sm:w-full md:flex-row"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.45 } } }}
            >
              <Button
                onClick={handleScrollToBooking}
                className="h-auto w-full rounded-full border border-rosegold/35 bg-burgundy/92 px-6 py-4 text-center font-sans text-[0.72rem] uppercase tracking-[0.18em] leading-tight text-white shadow-[0_16px_40px_rgba(97,39,44,0.22)] transition-all hover:scale-[1.02] hover:bg-burgundy sm:w-auto sm:min-w-[15rem] sm:px-9 sm:py-5 sm:text-[0.78rem] sm:tracking-[0.22em]"
              >
                Book a Consultation
              </Button>
              <a
                href="/collections"
                className="w-full rounded-full border border-white/26 bg-white/8 px-6 py-4 text-center font-sans text-[0.72rem] uppercase tracking-[0.18em] leading-tight text-white backdrop-blur-[4px] transition-all hover:bg-white/14 sm:w-auto sm:min-w-[13rem] sm:px-8 sm:text-[0.78rem] sm:tracking-[0.2em]"
              >
                View Collections
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
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

      {/* VIP Commission Section */}
      <section id="booking" ref={bookingRef} className="bg-card/40 py-24 px-6">
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
            Choose the consultation path that fits your stage. Pricing appears inside this section based on the service and category you select.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="editorial-shell mb-10 grid gap-4 p-5 md:grid-cols-3 md:p-6"
          >
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">Consultation</p>
              <p className="mt-3 font-sans leading-relaxed text-foreground/72">
                Your first consultation is complimentary and helps us understand the right direction for your dress.
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">Private Direction</p>
              <p className="mt-3 font-sans leading-relaxed text-foreground/72">
                Private consultation is available for Aso Ebi and Wedding clients, with the fee shown after you choose the category.
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-burgundy">Sketch Service</p>
              <p className="mt-3 font-sans leading-relaxed text-foreground/72">
                Personalized sketch requests are ₦100,000 and the fee is waived when you proceed with the outfit through the brand.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="editorial-shell space-y-6 p-5 md:p-8"
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
                      className={`w-full rounded-2xl border p-4 text-left transition-all sm:p-5 ${
                        isActive
                          ? "border-rosegold bg-rosegold/10 shadow-lg shadow-rosegold/10"
                          : "border-border bg-background/70 hover:border-rosegold/40"
                      }`}
                    >
                      <div className="mb-2 font-serif text-base leading-tight text-foreground sm:text-lg">{service.label}</div>
                      <p className="mb-3 text-sm font-sans leading-relaxed text-foreground/70">
                        {service.description}
                      </p>
                      <p className="text-[0.68rem] font-sans uppercase tracking-[0.16em] text-burgundy sm:text-xs sm:tracking-[0.2em]">{service.fee}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-rosegold/25 bg-background/80 p-5">
              <p className="font-serif text-xl text-foreground">{selectedService.label}</p>
              <p className="mt-2 font-sans text-sm uppercase tracking-[0.2em] text-burgundy">
                {selectedServiceFee}
              </p>
              <p className="mt-3 font-sans text-sm text-foreground/70">
                {selectedService.value === "consultation"
                  ? "This first conversation is complimentary and helps us understand your category, timeline, and commission fit."
                  : selectedService.value === "creative-director"
                    ? "Private consultations are priced for Aso Ebi and Wedding clients only, based on the selected category."
                    : "Sketch requests are charged at ₦100,000 and the fee is waived if you proceed with outfit creation through the brand."}
              </p>
              {budgetOptions.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => (
                    <span
                      key={budget}
                      className="rounded-full border border-rosegold/20 bg-rosegold/10 px-3 py-2 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-burgundy"
                    >
                      {budget}
                    </span>
                  ))}
                </div>
              )}
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
                {formData.serviceType === "personalized-sketch" ? "What should we sketch?" : "Collection Category"}
              </Label>
              <Select
                value={formData.garmentType}
                onValueChange={handleCategoryChange}
                required
              >
                <SelectTrigger id="garmentType" className="h-12 border-border bg-background text-foreground">
                  <SelectValue placeholder="Select collection category" />
                </SelectTrigger>
                <SelectContent className="border-border bg-card text-foreground">
                  {availableCategoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
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
                  <SelectValue placeholder={formData.garmentType ? "Select investment range" : "Select category first"} />
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
                Pricing is tied to the selected category and refined further by finishing, embellishment, and structure.
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

            <div className="rounded-2xl border border-rosegold/20 bg-white/45 px-4 py-4 text-center sm:px-5">
              <p className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-burgundy">
                Alternative Enquiry
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/72">
                For custom male dresses,{" "}
                <a
                  href={maleDressWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-burgundy underline decoration-rosegold/60 underline-offset-4 transition hover:text-burgundy/80"
                >
                  chat on WhatsApp
                </a>
                .
              </p>
            </div>

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
      <section className="bg-card/40 py-24 px-6">
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

          <div className="grid gap-8 md:grid-cols-3">
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
                className="editorial-card p-8 transition-all hover:border-rosegold/30"
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
