"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Sparkles, Bug, Zap, Biohazard } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      {/* Stats Section (Moved to Top) */}
      <section className="container mx-auto px-4 pt-32 pb-12 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Floor Price" value="1,250 XRP" />
          <StatCard label="Total Items" value="1,024" />
          <StatCard label="Total Volume" value="42,500 XRP" />
          <StatCard label="Holders" value="387" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <Sparkles className="h-3 w-3" />
            <span>Verified XRPL Artist</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
            WorthLessART
            <br />
            <span className="text-primary">Xrp-L</span>
          </h1>

          <p className="mb-4 text-balance text-xl text-muted-foreground md:text-2xl">
            Pointless art. Real lines. On-chain forever. XRPL.
          </p>

          <p className="mb-12 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Worthless by design. Immortalized permanently on the XRPL. Living forever
            on the blockchain with no meaning attached.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="min-w-[200px]">
              <a
                href="https://xrp.cafe/collection/worthless-art-xrp-l"
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

      {/* Feature Section */}
      <section className="border-t border-border/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-3">

              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-balance text-xl font-bold">Glitchy Faces</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Doodle faces with 90s vibes, capturing every XRP holder emotion.
                  No roadmap, no utility, just glitches and irony.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-balance text-xl font-bold">Pointless Drops</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  XRPL's premier pointless art drop. 90s glitches, holder feels,
                  zero promises.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                  <Biohazard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-balance text-xl font-bold">Blockchain Infection</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  Worthless Art has officially infected the blockchain.
                  Buy it quick before it stays worthless forever.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
