import { motion } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function Organizations() {
  return (
    <section id="organizations" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-semibold text-coral">04</span>
          <span className="h-px w-12 bg-foreground/20" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Riwayat Organisasi</h2>
        </div>

        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Pengalaman organisasi & komunitas semasa kuliah — tempat saya mengasah
          kepemimpinan, komunikasi, dan kolaborasi.
        </p>

        <div className="mt-12 space-y-8">
          {PROFILE.organizations.map((o, i) => (
            <motion.div
              key={o.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-[2rem] glass p-6 sm:p-8"
            >
              {/* hover glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${
                  o.accent === "coral" ? "bg-coral/25" : "bg-gold/25"
                }`}
              />

              <div className="relative grid gap-6 md:grid-cols-12">
                {/* Left — period & badge */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl font-display text-lg font-bold text-ink ${
                        o.accent === "coral"
                          ? "bg-gradient-to-br from-coral to-gold"
                          : "bg-gradient-to-br from-gold to-coral"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-coral">
                      {o.type}
                    </span>
                  </div>

                  <p className="mt-5 font-display text-lg font-semibold text-foreground">
                    {o.org}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{o.period}</p>

                  {/* Timeline dot connector */}
                  <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-coral/40 to-transparent md:block" />
                </div>

                {/* Right — role, desc, achievements */}
                <div className="md:col-span-8">
                  <h3 className="font-display text-xl font-bold text-gradient-warm">
                    {o.role}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {o.desc}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {o.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-foreground/90"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-coral to-gold" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
