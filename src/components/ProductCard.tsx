import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-brand-black text-white text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
            Novo
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/5 transition-colors duration-500" />
      </div>

      <div className="mt-4 px-1">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gray">
          {product.category}
        </p>
        <h3 className="mt-1 text-[15px] font-medium text-brand-black leading-snug">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-brand-black">
            {product.price}
          </p>
          <span className="flex items-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            Ver detalhes <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
