import { motion } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle index="01" title="Tentang Saya" />

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          {/* Left — bio, stats, focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">{PROFILE.about}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Saat ini saya menyelesaikan pendidikan{" "}
              <span className="text-foreground">D4 Teknik Informatika</span> di{" "}
              <span className="text-foreground">Politeknik Negeri Lhokseumawe</span>, dan terbuka
              untuk proyek, magang, maupun kolaborasi.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-5 py-3">
                  <p className="font-display text-2xl font-bold text-gradient-warm">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Focus list (moved from the right card) */}
            <div className="glass mt-6 rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-coral">Fokus</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Frontend interaktif & responsif",
                  "Backend & REST API (Laravel / Node)",
                  "Desain UI yang rapi & konsisten",
                  "Performa & aksesibilitas web",
                ].map((t, i) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral to-gold text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — formal photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="relative mx-auto max-w-xs animate-float">
              {/* Decorative glow behind frame */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-coral/40 to-gold/30 blur-2xl" />

              <div className="glass overflow-hidden rounded-[2rem] p-2 glow-gold">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-ink-2 to-ink-3">
                  {PROFILE.photo ? (
                    <img
                      src={PROFILE.photo}
                      alt={`Foto formal ${PROFILE.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                      <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-coral to-gold font-display text-4xl font-bold text-ink">
                        AR
                      </span>
                      <p className="px-6 text-xs text-muted-foreground">
                        Foto formal Anda akan tampil di sini
                      </p>
                    </div>
                  )}
                </div>

                {/* Name plate */}
                <div className="flex items-center justify-between px-3 py-3">
                  <div>
                    <p className="font-display text-sm font-semibold">{PROFILE.name}</p>
                    <p className="text-xs text-muted-foreground">{PROFILE.role}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-coral">
                    Formal
                  </span>
                </div>
              </div>

              {/* Decorative dot */}
              <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-coral/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <span className="font-display text-sm font-semibold text-coral">{index}</span>
      <span className="h-px w-12 bg-foreground/20" />
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
