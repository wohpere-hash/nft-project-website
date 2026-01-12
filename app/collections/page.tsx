"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const collections = [
  {
    id: "worthless",
    name: "WorthLess Art",
    description: "Pure nonsense. Zero meaning. Eternal on-chain.",
    image:
      "https://cdn.xrp.cafe/41f85d18e634-4d36-a614-002228c5ebeb7527a66d57d7-4edb-820a-95d2a3609ffa5e90bc15a4b5-4d1a-b24a-4cbd0180af7f.webp",
    link: "https://xrp.cafe",
  },
  {
    id: "lines",
    name: "Lines Art",
    description: "Hand-drawn lines. XRPL originals.",
    image:
      "https://cdn.xrp.cafe/fcb961375e78-4a9a-8147-9cf298a40b88.webp",
    link: "https://xrp.cafe/collection/linesartbyxrpfunnyguy",
  },
  {
    id: "gutter",
    name: "Gutter Gallery",
    description: "Bold, dreamy digital portrait with floral vibes.",
    image: "https://cdn.xrp.cafe/f503e6eca8f8-4080-970d-8896f3337605.webp",
    link: "https://www.xrp.cafe/collection/guttergallery",
  },
  {
    id: "xSupercar",
    name: "xSupercar",
    description: "Unique futuristic supercar NFTs.",
    image: "https://cdn.xrp.cafe/82d17eb64c78-42ce-854b-eb6406127cab.webp",
    link: "https://www.xrp.cafe/collection/xsupercar",
  },
  {
    id: "XRP Diva",
    name: "XRP Diva",
    description: "Bold, limited-edition NFT on the XRP Ledger.",
    image: "https://cdn.xrp.cafe/059a1997f07b-4414-89a5-5e1a39d2f3ab.webp",
    link: "https://www.xrp.cafe/collection/xrp-diva-protocol",
  },
  {
    id: "Whale king",
    name: "Whale king",
    description: "Whimscal, hand-drawn whale NFTs from pure imagination.",
    image: "https://cdn.xrp.cafe/f73438aca612-414b-9a1c-1f7d83f580ee.webp",
    link: "https://www.xrp.cafe/collection/whaleking",
  },
  {
    id: "MaD Mushroom$",
    name: "MaD Mushroom$",
    description: "x500 Mad Mushrooms, Hand-drawn llustrations are designed to captivate attention and make a lasting impact..",
    image: "https://cdn.xrp.cafe/98bca3d82688-462d-8554-18e874330779.webp",
    link: "https://www.xrp.cafe/collection/madmushrooms",
  },
  {
    id: "Job Little Artist",
    name: "Job Little Artist",
    description: "Pure magic of childhood creativity.",
    image: "https://cdn.xrp.cafe/262c2df054f1-4016-9804-bd7ebd50ff5b.webp",
    link: "https://www.xrp.cafe/collection/job-little-artist",
  },
]

export default function CollectionsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20 lg:px-8">
        <h1 className="mb-12 text-4xl font-bold">Collections</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative h-[85vh] overflow-hidden rounded-sm border border-border/50"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h2 className="mb-2 text-3xl font-bold text-white">
                  {collection.name}
                </h2>
                <p className="mb-6 max-w-md text-white/80">
                  {collection.description}
                </p>
                <Button asChild className="w-fit">
                  <a
                    href={collection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on XRP Cafe
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
