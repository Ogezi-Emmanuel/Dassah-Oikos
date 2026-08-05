"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
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
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react"
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

const slideshowImages = [
  { src: "/DO Bridal White wedding 1.jpg", label: "White Wedding", caption: "Timeless bridal elegance" },
  { src: "/DO bridal white wedding 2.jpg", label: "Bridal Couture", caption: "Sculpted for your moment" },
  { src: "/DO Bridal 2.jpg", label: "Reception Bridal", caption: "Celebration in luxury" },
  { src: "/DO Bridal.jpg", label: "Custom Bridal", caption: "Designed for your story" },
  { src: "/DO bridal 3.jpg", label: "Statement Bridal", caption: "Unforgettable silhouettes" },
  { src: "/DO Prom 1.jpg", label: "Prom Couture", caption: "Your night, your way" },
  { src: "/DO Prom 2.jpg", label: "Prom Statement", caption: "Red-carpet ready" },
  { src: "/DO Cultural Mali.jpg", label: "Cultural Couture", caption: "Heritage meets modern" },
  { src: "/DO Cultural Igbo 2.jpg", label: "Traditional Beauty", caption: "Rooted in culture" },
  { src: "/Custom Reception dress 1.jpg", label: "Reception Dress", caption: "Dance the night away" },
  { src: "/Do Custom birthday 2.jpg", label: "Birthday Couture", caption: "Celebrate in style" },
  { src: "/DO Asoebi 10.jpg", label: "Aso Ebi Excellence", caption: "Uniform, never ordinary" },
]

export default function Home() {
  const bookingRef = useRef<HTMLDivElement>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
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

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleScrollToBooking = () => {
    setIsBookingOpen(true)
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)

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
      {/* HERO SECTION - Simplified to just CTAs */}
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
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,8,8,0.35),rgba(14,8,8,0.28),rgba(14,8,8,0.68))]" />

        <div className="relative z-10 flex min-h-screen items-end justify-center px-5 pb-24 sm:px-6 sm:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto max-w-3xl translate-y-6 sm:translate-y-10"
          >
            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:w-full md:flex-row md:gap-5"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            >
              <Button
                onClick={handleScrollToBooking}
                className="h-auto w-full rounded-full border border-rosegold/35 bg-burgundy/92 px-8 py-5 text-center font-sans text-[0.78rem] uppercase tracking-[0.24em] leading-tight text-white shadow-[0_16px_40px_rgba(97,39,44,0.3)] transition-all hover:scale-[1.03] hover:bg-burgundy sm:w-auto sm:min-w-[18rem] sm:px-12 sm:py-5 sm:text-[0.82rem]"
              >
                Book a Consultation
              </Button>
              <a
                href="/collections"
                className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-5 text-center font-sans text-[0.78rem] uppercase tracking-[0.24em] leading-tight text-white backdrop-blur-[8px] transition-all hover:bg-white/20 hover:scale-[1.03] sm:w-auto sm:min-w-[16rem] sm:px-12 sm:text-[0.82rem]"
              >
                View Collections
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Crossover Section - replaces the two moved sections with a teaser to /the-house */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="editorial-shell overflow-hidden"
          >
            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] order-2 md:order-1">
                <Image
                  src="/DO Bridal White wedding 1.jpg"
                  alt="Dassah Oikos couture house"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14 order-1 md:order-2">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy mb-4">
                  The House
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Inside the ethos, the experience, and the voices of the women we dress.
                </h2>
                <p className="mb-8 font-sans leading-relaxed text-foreground/70">
                  We've gathered everything you need to know about why women choose Dassah Oíkos, the three-step couture experience, and what our clients are saying — all in one considered place.
                </p>
                <a
                  href="/the-house"
                  className="self-start inline-flex rounded-full border border-rosegold/30 bg-burgundy px-9 py-4 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy/90"
                >
                  Explore The House
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIP Commission Section - COLLAPSIBLE */}
      <section id="booking" ref={bookingRef} className="bg-card/40 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request a Consultation
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-center font-sans text-lg text-foreground/70">
              Click below to begin your couture journey with Dassah Oikos.
            </p>

            {/* Collapsible Toggle Button */}
            <Button
              onClick={() => setIsBookingOpen(!isBookingOpen)}
              variant="outline"
              className="group inline-flex items-center gap-3 rounded-full border border-rosegold/30 bg-burgundy/92 px-10 py-5 text-center font-sans text-[0.78rem] uppercase tracking-[0.24em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy"
            >
              {isBookingOpen ? "Close Consultation Form" : "Open Consultation Form"}
              {isBookingOpen ? (
                <ChevronUp size={20} className="transition-transform" />
              ) : (
                <ChevronDown size={20} className="transition-transform" />
              )}
            </Button>
          </motion.div>

          {/* Collapsible Content */}
          <AnimatePresence initial={false}>
            {isBookingOpen && (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden mt-12"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mx-auto mb-12 max-w-xl text-center font-sans text-lg text-foreground/70"
                >
                  Choose the consultation path that fits your stage. Pricing appears inside this section based on the service and category you select.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Atelier Gallery Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-burgundy mb-4">
              The Atelier
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Signature Pieces
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 grid-rows-[auto_auto_auto]">
            {/* Masonry Layout using public videos for visual interest */}
            {[
              { video: "/DO Aso Ebi 1.mp4", span: "md:row-span-2 md:col-span-1 aspect-[3/4]", label: "Aso Ebi Couture" },
              { video: "/DO Bridal dress.mp4", span: "md:col-span-2 aspect-[16/10]", label: "Bridal Collection" },
              { video: "/DO Custom birthday.mp4", span: "md:col-span-1 aspect-square", label: "Birthday Couture" },
              { video: "/DO White Wedding.mp4", span: "md:col-span-1 aspect-square", label: "White Wedding" },
              { video: "/DO Cultural Igbo.mp4", span: "md:col-span-1 aspect-square", label: "Traditional Beauty" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: index * 0.1 } } }}
                className={`editorial-card overflow-hidden group relative ${item.span}`}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">{item.label}</h3>
                  <a
                    href="https://api.whatsapp.com/send?phone=2348132098926"
                    target="_blank"
                    rel="noreferrer"
                    className="self-start inline-flex rounded-full border border-rosegold/30 bg-burgundy/92 px-6 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-white transition-all hover:bg-burgundy"
                  >
                    Commission This Look
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDESHOW SECTION - Bespoke Wears for Any Occasion */}
      <section className="bg-card/35 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy mb-4">
              The Occasion Edit
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Bespoke Wears for Any Occasion
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            {/* Slides Container */}
            <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-3xl editorial-card p-3">
              <div className="relative w-full h-full overflow-hidden rounded-[1.4rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slideshowImages[currentSlide].src}
                      alt={slideshowImages[currentSlide].label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                      <p className="mb-2 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-rosegold md:text-xs">
                        {slideshowImages[currentSlide].label}
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-white md:text-4xl">
                        {slideshowImages[currentSlide].caption}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next Controls */}
              <button
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-110 md:h-14 md:w-14"
              >
                <ArrowLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-black/50 hover:scale-110 md:h-14 md:w-14"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-6 md:grid-cols-12 gap-2">
              {slideshowImages.map((img, index) => (
                <button
                  key={img.src}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${img.label}`}
                  className={`relative aspect-square overflow-hidden rounded-xl transition-all ${
                    currentSlide === index
                      ? "ring-2 ring-rosegold scale-105 shadow-lg shadow-rosegold/30"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="(max-width: 1024px) 16vw, 8vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a
                href="/collections"
                className="inline-flex rounded-full border border-rosegold/35 bg-burgundy/92 px-10 py-5 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy"
              >
                Explore Full Collections
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
