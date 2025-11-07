import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const VIDEO_SRC = "https://cdn.coverr.co/videos/coverr-crowd-of-people-walking-6261/1080p.mp4";

export default function Landing() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="flex items-center justify-center py-8 select-none">
        <div className="tracking-[0.35em] text-sm opacity-70">iStart</div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-6 pt-16 pb-28 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-mono text-[clamp(28px,5vw,48px)] leading-[1.3] text-neutral-200"
        >
          While some wait, we start.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <GhostButton onClick={() => setOpen("video")}>Watch me</GhostButton>
          <GhostButton onClick={() => setOpen("form")}>i dare to begin</GhostButton>
        </motion.div>
      </main>
    </div>
  );
}

function GhostButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-neutral-700 px-5 py-3 font-mono text-sm tracking-wide text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900/40 active:scale-[0.99]"
    >
      {children}
    </button>
  );
}
