"use client"

import { useEffect } from "react"

const ScrollHandler = () => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return null
}

export default ScrollHandler
