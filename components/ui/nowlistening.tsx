import Link from 'next/link'
import { motion } from 'framer-motion'
import { playlists } from '@/app/data'

export default function NowListening() {
  return (
    <div className="h-full w-full rounded-lg bg-transparent">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="mb-5 text-lg font-medium">Now Listening</h3>
        <EqualizerBars />
      </div>
      <div className="flex flex-col gap-3">
        {playlists.map((pl) => (
          <Link
            key={pl.name}
            href={pl.url}
            target="_blank"
            className="flex items-center gap-3 rounded-md border border-white/10 bg-transparent p-2 transition hover:border-white/20 hover:shadow-[0_0_10px_#ffffff22]"
          >
            <img
              src={pl.image}
              alt={pl.name}
              className="h-12 w-12 rounded-md object-cover"
            />
            <p className="text-zinc-500 dark:text-zinc-400">{pl.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function EqualizerBars() {
  return (
    <div className="flex h-7 items-end gap-[2px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-sm bg-green-500"
          animate={{ height: ['20%', '100%', '50%', '80%', '20%'] }}
          transition={{
            repeat: Infinity,
            duration: 1 + i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
