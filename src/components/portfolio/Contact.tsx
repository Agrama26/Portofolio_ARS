import { motion } from "motion/react";
import { PROFILE } from "@/lib/profile-data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-12"
        >
          {/* blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-coral/25 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-semibold text-coral">06</span>
                <span className="h-px w-12 bg-foreground/20" />
                <h2 className="font-display text-3xl font-bold sm:text-4xl">Kontak</h2>
              </div>
              <p className="mt-5 text-lg text-muted-foreground">
                Punya proyek, peluang magang, atau hanya ingin menyapa? Saya selalu terbuka untuk
                ngobrol.
              </p>

              <div className="mt-6 space-y-3">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  >
                    <span className="font-medium">{s.label}</span>
                    <span className="text-sm text-muted-foreground">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form (mailto) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Kontak dari ${data.get("name") || "Seseorang"}`);
                const body = encodeURIComponent(`${data.get("message") || ""}`);
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
              }}
              className="space-y-3"
            >
              <input
                name="name"
                required
                placeholder="Nama"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-coral"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-coral"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Pesan..."
                className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-coral"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-coral to-gold px-4 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center gap-2 text-center">
          <a href="#home" className="font-display text-lg font-bold">
            Agung<span className="text-coral">.</span>
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. Dibuat dengan React, Tailwind & Motion.
          </p>
        </footer>
      </div>
    </section>
  );
}
