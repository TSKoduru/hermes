'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      {/* Left: Name + subtitle + resume */}
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Teja Koduru
        </Link>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Aerospace Engineering | Computer Engineering | Math
        </TextEffect>

        {/* Resume Link */}
        <a
          href="/TKoduru_Resume.pdf"
          download
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          Download Resume →
        </a>
      </div>

      {/* Right: Profile Image */}
      <div className="ml-4 hidden sm:block">
        <Image
          src="/pfp.png"
          alt="Teja Koduru"
          width={64}
          height={64}
          className="rounded-full object-cover ring-1 shadow-md ring-zinc-200 dark:ring-zinc-700"
        />
      </div>
    </header>
  )
}
