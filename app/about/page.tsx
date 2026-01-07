import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <Award className="h-3 w-3" />
            <span>Verified XRPL Artist</span>
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">About the Artist</h1>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="relative mb-6 aspect-square max-w-md overflow-hidden rounded-sm border border-border/50 bg-muted">
                <Image src="https://cdn.xrp.cafe/fcb961375e78-4a9a-8147-9cf298a40b88.webp" alt="XrpFuNNyGuY workspace" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-mono text-2xl font-bold">XrpFuNNyGuY</h2>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Counter-Strike player since 2000, now creating hand-drawn art entirely with a mouse. Lines Art is a
                  study of patience, repetition, and on-chain permanence.
                </p>
                <p>
                  What started as a personal challenge has evolved into a complete collection of over 1000 unique
                  pieces. Each line is deliberate, each curve intentional. No tablets, no shortcuts, just a mouse and
                  countless hours of dedication.
                </p>
                <p>
                  The XRPL blockchain provides the perfect home for these creations, ensuring they exist forever in
                  their original form, accessible to collectors and art enthusiasts around the world.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="https://xrpcafe.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on XRPCafe
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="border-t border-border/50 pt-20">
          <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight md:text-4xl">The Process</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-balance text-xl font-bold">Precision Drawing</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Every piece begins with a concept. Using only a computer mouse, lines are drawn with pixel-perfect
                precision, building complex patterns from simple strokes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-balance text-xl font-bold">Digital Craftsmanship</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Hours turn into days as each artwork takes shape. The limitations of mouse control create unique
                characteristics that define the Lines Art aesthetic.
              </p>
            </div>

            <div className="space-y-4">
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
              <h3 className="text-balance text-xl font-bold">On-Chain Forever</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Once complete, each piece is minted on the XRPL blockchain, ensuring permanent existence and true
                digital ownership for collectors.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 rounded-sm border border-border/50 bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="mb-2 font-mono text-4xl font-bold text-primary md:text-5xl">1000+</p>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Unique Pieces</p>
            </div>
            <div className="text-center">
              <p className="mb-2 font-mono text-4xl font-bold text-primary md:text-5xl">2000+</p>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Hours of Work</p>
            </div>
            <div className="text-center">
              <p className="mb-2 font-mono text-4xl font-bold text-primary md:text-5xl">100%</p>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">Mouse-Drawn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
