import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { instagramPosts } from "../data/instagram";
import { store } from "../data/store";

export function InstagramSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg">
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
          <h2 className="text-3xl md:text-4xl font-serif font-medium max-w-lg mx-auto leading-tight">
            Estilo também se vive fora da loja.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-100"
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-400 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} className="text-white" />
                </span>
              </div>
            </motion.a>
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-brand-black/15 text-brand-black text-sm font-medium hover:border-brand-black/40 transition-all duration-300"
          >
            Ver no Instagram
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
