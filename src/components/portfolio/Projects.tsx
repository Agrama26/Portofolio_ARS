import { motion } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-semibold text-coral">03</span>
          <span className="h-px w-12 bg-foreground/20" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Proyek</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROFILE.projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative block overflow-hidden rounded-3xl glass p-6"
            >
              {/* hover glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  p.accent === "coral" ? "bg-coral/30" : "bg-gold/30"
                } opacity-0`}
              />

              <div className="flex items-start justify-between gap-4">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl font-display text-lg font-bold text-ink ${
                    p.accent === "coral"
                      ? "bg-gradient-to-br from-coral to-gold"
                      : "bg-gradient-to-br from-gold to-coral"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:text-coral">
                  Lihat →
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
