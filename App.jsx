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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="text-center font-mono text-[clamp(28px,5vw,48px)] leading-[1.3] text-neutral-200"
        >
          While some wait, we start.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <GhostButton onClick={() => setOpen('video')}>Watch me</GhostButton>
          <GhostButton onClick={() => setOpen('form')}>i dare to begin</GhostButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
        >
          <div className="font-mono text-xl">×</div>
        </motion.div>
      </main>

      <Modal open={open !== null} onClose={() => setOpen(null)}>
        <AnimatePresence mode="wait">
          {open === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="w-full max-w-3xl"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
                <video className="h-full w-full" src={VIDEO_SRC} controls playsInline />
              </div>
              <p className="mt-4 text-center text-sm text-neutral-400">
                A glimpse of the hosts—keep it short, sharp, and curious.
              </p>
            </motion.div>
          )}

          {open === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="w-full max-w-xl"
            >
              <InterestForm onDone={() => setOpen(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>

      <footer className="flex items-center justify-center pb-8 text-xs text-neutral-500">
        © {new Date().getFullYear()}—All rights reserved.
      </footer>
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

function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            className="relative z-10 w-full max-w-3xl rounded-3xl bg-neutral-950 p-5 shadow-2xl ring-1 ring-white/10"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
            >
              <X size={18} />
            </button>
            <div className="px-2 pb-1 pt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InterestForm({ onDone }) {
  const [state, setState] = useState({ name: "", email: "", role: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Interest:", state);
    setSubmitted(true);
    setTimeout(onDone, 900);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="font-mono text-lg text-neutral-100">got it.</h3>
        <p className="mt-2 text-sm text-neutral-400">We’ll reach out soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="mb-2 text-center font-mono text-lg text-neutral-100">Request an invite</h3>
      <div className="grid gap-3">
        <Field label="Name">
          <input
            required
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 focus:border-neutral-500"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            required
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 focus:border-neutral-500"
            placeholder="you@studio.com"
          />
        </Field>
        <Field label="What describes you? (student, founder, creator, etc.)">
          <input
            value={state.role}
            onChange={(e) => setState({ ...state, role: e.target.value })}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 focus:border-neutral-500"
            placeholder="student / founder / operator"
          />
        </Field>
        <Field label="Why are you interested?">
          <textarea
            rows={4}
            value={state.note}
            onChange={(e) => setState({ ...state, note: e.target.value })}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none ring-0 focus:border-neutral-500"
            placeholder="one or two lines is perfect"
          />
        </Field>
      </div>
      <div className="flex items-center justify-between pt-2">
        <label className="flex items-center gap-2 text-xs text-neutral-500">
          <input type="checkbox" required className="accent-white" />
          I agree to be contacted about this project.
        </label>
        <button
          type="submit"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99]"
        >
          Send
        </button>
      </div>
      <p className="text-center text-xs text-neutral-500">No spam. Ever.</p>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400">{label}</span>
      {children}
    </label>
  );
}
