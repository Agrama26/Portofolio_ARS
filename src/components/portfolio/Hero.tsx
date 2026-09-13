import { motion, type Variants } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-grid">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-coral/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-gold/25 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-ink-2/60 blur-3xl animate-blob [animation-delay:8s]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Left — text (asymmetric, spans 7) */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="md:col-span-7"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-coral" />
              Open for opportunities
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Halo, saya{" "}
              <span className="text-gradient-warm">Agung</span>
              <br />
              Web Developer.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              {PROFILE.tagline}. Saya membangun antarmuka web yang{" "}
              <span className="text-foreground">responsif</span>,{" "}
              <span className="text-foreground">interaktif</span>, dan{" "}
              <span className="text-foreground">rapi</span>.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-coral to-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 glow-coral"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                Hubungi Saya
              </a>
            </motion.div>
          </motion.div>

          {/* Right — floating card (spans 5) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-5"
          >
            <div className="relative animate-float">
              <div className="glass rounded-3xl p-6 glow-gold">
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-coral to-gold font-display text-2xl font-bold text-ink">
                    AR
                  </div>
                  <div>
                    <p className="font-display font-semibold">{PROFILE.name}</p>
                    <p className="text-xs text-muted-foreground">{PROFILE.location}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {PROFILE.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white/5 p-3 text-center">
                      <p className="font-display text-2xl font-bold text-gradient-warm">{s.value}</p>
                      <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Laravel", "Tailwind"].map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative dot grid */}
              <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-coral/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-coral"
          />
        </div>
      </motion.div>
    </section>
  );
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
