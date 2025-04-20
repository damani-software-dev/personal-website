import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Header() {
  return (
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg font-bold">Damani Beckford</div>
          <nav className="flex space-x-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact us
            </Link>
          </nav>
        </div>
      </header>
  )
}