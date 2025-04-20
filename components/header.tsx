import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

export default function Header() {
    
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  return (
      <header className=" border-b border-gray-200 shadow-md bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg font-bold">Damani Beckford</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium">
              Contact us
            </Link>
          </nav>

            {/* Mobile Menu Button */}
            <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <HugeiconsIcon icon={Cancel01Icon} /> : <HugeiconsIcon icon={Menu01Icon} size={30}/>}
            </button>
        </div>
        {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">
                <Link href="/" className="block text-sm font-medium">
                Home
                </Link>
                <Link href="/about" className="block text-sm font-medium">
                About Us
                </Link>
                <Link href="#contact" className="block text-sm font-medium">
                Contact us
                </Link>
            </div>
            )}

      </header>
  )
}