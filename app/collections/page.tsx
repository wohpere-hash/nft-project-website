"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { NFTModal } from "@/components/nft-modal"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Mock NFT data
const mockNFTs = [
  {
    id: "1",
    name: "XRPFUNNYGUY LINES #2",
    image: "https://cdn.xrp.cafe/b61ef1514ab3-4b55-b7be-f988bcaa8ae9457389d1d681-49ae-80c2-17dac3d2ec93df35bea06d3d-4bfa-ab6c-69c200e37504.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827240B639A808E3B9742A25334E5CF68EEDEDE52F54EAD7C36FF057A6F5E",
  },
  {
    id: "2",
    name: "XRPFUNNYGUY LINES #5",
    image: "https://cdn.xrp.cafe/e51fdcdd6c1e-4ca3-aa7f-73bd7f6f62e68b4e69024cee-4c93-8685-8c3da9d3031b5e61f65d950f-499a-aa7d-6d1961c95824.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E51E4F2F3057A6F5A",
  },
  {
    id: "3",
    name: "XRPFUNNYGUY LINES #7",
    image: "https://cdn.xrp.cafe/c58b2ccab85d-4d3b-9d7c-37c83ae1cbe0c1d7d7699698-49a0-bf6f-9a97263ac89fd6fd07fbd56b-4e87-835a-431bc77f7c24.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E241950F5057A6F58",
  },
  {
    id: "4",
    name: "XRPFUNNYGUY LINES #8",
    image: "https://cdn.xrp.cafe/058a0b643acd-4170-9d45-ecf89139900ed6dd37739dfe-4ed9-9806-ef40fd4bb99f32a2926026c9-40bf-85fb-504e1808bd8e.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827060B639A808E3B9742A25334E5CF68EEDEDE52F54E0D337FF4057A6F57",
  },
  {
    id: "5",
    name: "XRPFUNNYGUY LINES - KING #7",
    image: "https://cdn.xrp.cafe/6823c9200674-45ad-9077-5197ec540570027036fafb2b-4646-82b8-43eb679d4658ef112b2c5eb9-4916-90fe-0b6828dd5613.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E6844E785057A75E8",
  },
  {
    id: "6",
    name: "XRPFUNNYGUY LINES - ARMY AURA #2",
    image: "https://cdn.xrp.cafe/c76bfbef75e9-4920-91a8-d5acb4742e8cdf7f29f1d299-462a-9140-883b4cf4a3f2eebd62088a4d-42d2-9cbc-e9f90c0fb063.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54EACF65A80057A75EB",
  },
  {
    id: "7",
    name: "XRPFUNNYGUY LINES - XCOCO",
    image: "https://cdn.xrp.cafe/59194f211edd-47d0-afb5-228d4c8fb95eed5242d971c6-4f52-8941-54aac6f4b0f2a040223b87d9-4f18-af02-ec823ed1960e.webp",
    collection: "Lines Art",
    price: "Make Offer",
    edition: "1/1",
    externalUrl: "https://xrp.cafe/nft/00083A980B639A808E3B9742A25334E5CF68EEDEDE52F54E23937486057A75E5",
  },
  {
    id: "8",
    name: "SNOW GLOBE CARD - KING OF CLUBS",
    image: "https://cdn.xrp.cafe/9a8bc2d593c3-491f-92fb-f9ca68dc0a999cd4fbd9f87f-4b7f-a961-35f6c05b18d7dfac8893c6f2-44ce-9799-27ec9c82f6a1.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E9D4D1DAE057A770D",
  },
  {
    id: "9",
    name: "XRPFUNNYGUY LINES - GOLDEN ARMY",
    image: "https://cdn.xrp.cafe/07e3ef941ce1-403c-a8c6-3fcb2c7f1322ccde76754717-48db-8051-15e64c04dc60226cf8f078fa-4a1a-9f06-757fc2d78a57.webp",
    collection: "Lines Art",
    price: "Make Offer",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E0CADA379057A75E4",
  },
  {
    id: "10",
    name: "XRPFUNNYGUY LINES - RIPTARD",
    image: "https://cdn.xrp.cafe/17471be68793-47f0-b893-239ede41010edaaf7d61bbf2-4eba-a852-147b9cef01b3e535293b311a-4b3d-804a-c2d531bb807b.webp",
    collection: "Lines Art",
    price: "589 XRP",
    edition: "1/1",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E088D9E8C057A75EF",
  },
  {
    id: "11",
    name: "XRPFUNNYGUY LINES - XRPCAFE",
    image: "https://cdn.xrp.cafe/3a3515e13b99-4438-9494-40298b3e39da24595e1521bd-469d-b06f-94538c0a475bb3c1d0b71ecd-43f0-b3e7-6029d4a9bf02.webp",
    collection: "Lines Art",
    price: "Make Offer",
    edition: "1/1",
    externalUrl: "https://xrp.cafe/nft/000827100B639A808E3B9742A25334E5CF68EEDEDE52F54E1BD9470F057A6F6E",
  },
]

export default function CollectionsPage() {
  const [selectedNFT, setSelectedNFT] = useState<(typeof mockNFTs)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Collection</h1>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Explore 1000+ hand-drawn pieces. Each artwork represents hours of patient mouse work.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)} className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="mb-8 rounded-sm border border-border/50 bg-card p-6">
            <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wider">Filter by Rarity</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="outline" size="sm">
                1/1 Legendary
              </Button>
              <Button variant="outline" size="sm">
                Series
              </Button>
              <Button variant="outline" size="sm">
                Standard
              </Button>
            </div>
          </div>
        )}

        {/* NFT Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockNFTs.map((nft) => (
            <div
              key={nft.id}
              onClick={() => setSelectedNFT(nft)}
              className="group cursor-pointer overflow-hidden rounded-sm border border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {nft.collection}
                </p>
                <h3 className="mb-2 text-balance font-bold">{nft.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-bold text-primary">{nft.price}</p>
                  <p className="font-mono text-xs text-muted-foreground">{nft.edition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNFT && <NFTModal isOpen={true} onClose={() => setSelectedNFT(null)} nft={selectedNFT as any} />}

    </div>
  )
}
