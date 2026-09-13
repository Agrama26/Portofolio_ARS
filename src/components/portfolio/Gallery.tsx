import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { PROFILE } from "@/lib/profile-data";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const IMAGES = [g1, g2, g3, g4];
const STACK_TILTS = [-6, 4, -2, 7];

export default function Gallery() {
  const items = PROFILE.gallery;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section id="gallery" className="relative scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-coral uppercase">
            05 — Galeri
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Arsip <span className="text-gradient-warm">Foto</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Dokumentasi kegiatan semasa kuliah & komunitas. Klik tumpukan foto
            untuk melihat lebih luas.
          </p>
        </motion.div>

        {/* Stack of photos */}
        <motion.button
          type="button"
          onClick={() => openAt(0)}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover="hover"
          className="group relative mx-auto block h-72 w-72 cursor-pointer sm:h-96 sm:w-96"
          aria-label="Buka galeri foto"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={{
                hover: {
                  rotate: (STACK_TILTS[i] ?? 0) * 2,
                  x: (i - (items.length - 1) / 2) * 40,
                  y: -8,
                },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white/90 shadow-2xl"
              style={{
                rotate: STACK_TILTS[i] ?? 0,
                zIndex: items.length - i,
              }}
            >
              <img
                src={IMAGES[i] ?? ""}
                alt={item.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
          <span className="glass absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full px-5 py-2 font-display text-xs font-semibold whitespace-nowrap text-foreground">
            {items.length} Foto — Klik untuk membuka
          </span>
        </motion.button>
      </div>

      {/* Lightbox carousel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
              aria-label="Tutup galeri"
            >
              ×
            </button>

            <div
              className="relative flex w-full max-w-4xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prev}
                className="absolute left-1 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 sm:-left-14"
                aria-label="Foto sebelumnya"
              >
                ‹
              </button>

              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) next();
                    else if (info.offset.x > 80) prev();
                  }}
                  className="w-full"
                >
                  <img
                    src={IMAGES[index] ?? ""}
                    alt={items[index]?.title ?? ""}
                    width={1024}
                    height={1024}
                    className="mx-auto max-h-[70vh] w-auto max-w-full rounded-2xl border-4 border-white/90 object-contain shadow-2xl"
                  />
                  <figcaption className="mt-4 text-center">
                    <p className="font-display text-lg font-semibold text-white">
                      {items[index]?.title}
                    </p>
                    <p className="text-sm text-white/70">
                      {items[index]?.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={next}
                className="absolute right-1 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 sm:-right-14"
                aria-label="Foto berikutnya"
              >
                ›
              </button>
            </div>

            <div className="mt-6 flex gap-2" onClick={(e) => e.stopPropagation()}>
              {items.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Lihat foto ${item.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
