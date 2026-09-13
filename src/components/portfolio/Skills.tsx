import { motion } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      {/* Marquee strip */}
      <div className="relative mb-20 overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-8">
          {[...PROFILE.skills, ...PROFILE.skills].map((s, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-lg font-semibold text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-semibold text-coral">02</span>
          <span className="h-px w-12 bg-foreground/20" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Keahlian</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PROFILE.skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass rounded-2xl p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-coral to-gold"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
