"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <Sparkles className="h-3 w-3" />
            <span>Verified XRPL Artist</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
            Lines Art by
            <br />
            <span className="text-primary">XrpFuNNyGuY</span>
          </h1>

          <p className="mb-4 text-balance text-xl text-muted-foreground md:text-2xl">
            Hand-drawn NFTs. Pure lines and patience. On-chain forever.
          </p>

          <p className="mb-12 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Over 1000+ unique pieces created entirely with a mouse. Each stroke tells a story of precision, dedication,
            and digital craftsmanship. Legendary 1/1s and complete series, all living permanently on the XRPL
            blockchain.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="min-w-[200px]">
              <a
  href="https://xrp.cafe/collection/linesartbyxrpfunnyguy"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground transition hover:opacity-90"
>
  View Full Collection on XRP Cafe
</a>

            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[200px] bg-transparent">
              <Link href="/collections">View Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Floor Price" value="1,250 XRP" />
          <StatCard label="Total Items" value="1,024" />
          <StatCard label="Total Volume" value="42,500 XRP" />
          <StatCard label="Holders" value="387" />
        </div>
      </section>

      {/* Feature Section */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <span className="font-mono text-xl font-bold text-primary">1/1</span>
                </div>
                <h3 className="text-balance text-xl font-bold">Unique Pieces</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Every artwork is a one-of-a-kind creation, crafted pixel by pixel with deliberate intention.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-primary"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <h3 className="text-balance text-xl font-bold">XRPL Native</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Built on the XRP Ledger for fast, low-cost transactions and true digital ownership.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-primary"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6V12L16 14" />
                  </svg>
                </div>
                <h3 className="text-balance text-xl font-bold">Pure Patience</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Hand-drawn with a mouse over countless hours, each line represents dedication to the craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
