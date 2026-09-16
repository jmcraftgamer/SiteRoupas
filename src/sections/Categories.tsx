import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";

export function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Categorias
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            Explore seu estilo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-brand-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="text-white text-xl font-medium tracking-wide">
                  {cat.name}
                </h3>
                <span className="mt-3 flex items-center gap-1.5 text-white/80 text-xs font-medium uppercase tracking-[0.15em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  Ver mais <ArrowRight size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
