import type React from "react"
import "./globals.css"
import { PT_Sans } from "next/font/google"
import type { Metadata } from "next"

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Damani Beckford - Product Designer",
  description: "Portfolio of Damani Beckford, Product Designer",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ptSans.className}>{children}</body>
    </html>
  )
}
