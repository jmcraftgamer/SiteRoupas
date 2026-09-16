import { motion } from "framer-motion";
import { Image as ImageIcon, ArrowUpRight } from "lucide-react";
import { store } from "../data/store";

function PlaceholderPost({ label }: { label: string }) {
  return (
    <div className="aspect-square rounded-xl bg-neutral-100 border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center gap-2">
      <ImageIcon size={22} className="text-neutral-300" strokeWidth={1.2} />
      <span className="text-[10px] text-neutral-400 font-medium">{label}</span>
    </div>
  );
}

export function InstagramSection() {
  const placeholders = [
    "Post 01",
    "Post 02",
    "Post 03",
    "Post 04",
    "Post 05",
    "Post 06",
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-bg">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            @loja_estilo__
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium max-w-lg mx-auto leading-tight">
            Estilo também se vive fora da loja.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholders.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <PlaceholderPost label={label} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={store.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-black text-white text-sm font-medium hover:bg-brand-pink hover:text-brand-black transition-all duration-300"
          >
            Ver no Instagram
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
