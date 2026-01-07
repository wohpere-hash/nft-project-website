import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lines Art by XrpFuNNyGuY | Hand-Drawn XRPL NFTs",
  description:
    "Hand-drawn NFTs created entirely with a mouse. Pure lines and patience. 1000+ pieces on the XRPL blockchain.",
  generator: "DavidEvolves",
  icons: {
    icon: [
      {
        url: "https://cdn.xrp.cafe/fcb961375e78-4a9a-8147-9cf298a40b88.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://cdn.xrp.cafe/fcb961375e78-4a9a-8147-9cf298a40b88.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://cdn.xrp.cafe/fcb961375e78-4a9a-8147-9cf298a40b88.webp",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
