"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface NFTModalProps {
  isOpen: boolean
  onClose: () => void
  nft: {
    id: string
    name: string
    image: string
    collection: string
    price: string
    edition: string
    externalUrl: string
  } | null
}

export function NFTModal({ isOpen, onClose, nft }: NFTModalProps) {
  const [copied, setCopied] = useState(false)

  if (!nft) return null

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href + `?nft=${nft.id}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl gap-0 p-0">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square bg-muted">
            <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-cover" />
          </div>

          {/* Details Section */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{nft.collection}</p>
                <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight">{nft.name}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Price</p>
                <p className="mt-1 font-mono text-xl font-bold text-primary">{nft.price}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Edition</p>
                <p className="mt-1 font-mono text-sm">{nft.edition}</p>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <Button className="w-full" onClick={() => window.open(nft.externalUrl, "_blank")}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View on XRPCafe
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={copyLink}>
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Link Copied!" : "Copy Link"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
