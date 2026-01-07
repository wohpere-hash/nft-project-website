"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    let animationFrameId: number
    let time = 0

    const lines: Array<{
      x1: number
      y1: number
      x2: number
      y2: number
      speed: number
      angle: number
    }> = []

    // Create lines
    for (let i = 0; i < 15; i++) {
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        angle: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(18, 18, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.005

      lines.forEach((line) => {
        line.angle += line.speed * 0.01
        line.x1 = canvas.width / 2 + Math.cos(line.angle) * 300
        line.y1 = canvas.height / 2 + Math.sin(line.angle) * 300
        line.x2 = canvas.width / 2 + Math.cos(line.angle + Math.PI) * 300
        line.y2 = canvas.height / 2 + Math.sin(line.angle + Math.PI) * 300

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + Math.sin(time + line.angle) * 0.05})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-30" />
}
