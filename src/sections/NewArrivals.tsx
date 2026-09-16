import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="aspect-[3/4] rounded-2xl bg-neutral-100 border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center gap-3">
      <ImageIcon size={28} className="text-neutral-300" strokeWidth={1.2} />
      <span className="text-xs text-neutral-400 font-medium">{label}</span>
    </div>
  );
}

export function NewArrivals() {
  const placeholders = [
    "Novidade 01",
    "Novidade 02",
    "Novidade 03",
    "Novidade 04",
  ];

  return (
    <section id="novidades" className="py-28 lg:py-44 bg-brand-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Acabou de chegar
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
            Novidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {placeholders.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <PlaceholderImage label={label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
