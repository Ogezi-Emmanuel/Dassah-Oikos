"use client"

const SiteBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16] motion-reduce:hidden"
      >
        <source src="/DO Bridal white wedding 2.mp4" type="video/mp4" />
      </video>

      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />
      <div className="background-orb background-orb-three" />
      <div className="background-sweep background-sweep-one" />
      <div className="background-sweep background-sweep-two" />
      <div className="background-veil" />
      <div className="background-lattice" />
      <div className="background-contours" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,247,244,0.72),rgba(243,223,215,0.88)_40%,rgba(230,205,196,0.9))]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(transparent_0%,rgba(111,62,58,0.35)_100%)]" />
    </div>
  )
}

export default SiteBackground
