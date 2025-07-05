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
          Aerospace | Computer Engineering | Math
        </TextEffect>

        {/* Resume Link */}
        
        <a
        href="/TKoduru_Resume.pdf"
        download
        className="mt-2 inline-block transition hover:text-zinc-900 dark:hover:text-white"
      >
        <TextEffect
          as="span"
          preset="fade"
          per="char"
          className="text-sm text-zinc-700 dark:text-zinc-400"
          delay={0.75}
        >
          Download Resume →
        </TextEffect>
      </a>

      </div>

      {/* Right: Profile Image */}
      <div className="ml-4 hidden sm:block">
        <Image
          src="/pfp.jpg"
          alt="Teja Koduru"
          width={64}
          height={64}
          className="rounded-full object-cover shadow-md ring-1 ring-zinc-200 dark:ring-zinc-700"
        />
      </div>
    </header>
  )
}
