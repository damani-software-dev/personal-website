import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

export default function Footer() {
    
  return (
    <section id="contact" className="mt-auto bg-[#f9fafb] py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold">Let's Create Your Story Next</h2>
      <p className="mb-8 text-gray-600">
        it's a story, a vibe, and a journey. Ready to make
        <br />
        yours unforgettable?
      </p>
      <p className="mb-6 text-gray-600">Need A Designer? Let's Talk!</p>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <a
          href="mailto:damanibeckford18@gmail.com"
          className="inline-block rounded bg-black px-4 py-2 text-md text-white"
        >
          damanibeckford18@gmail.com
        </a>
        <a href="tel:+18762944200" className="inline-block rounded border border-black px-4 py-2 text-md">
          +1 (876) 2944200
        </a>
      </div>
    </div>
  </section> 
  )
}