import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Product } from "../data/products";

export function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/40 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="md:w-1/2 bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gray">
                {product.category}
              </p>
              <h3 className="mt-2 text-xl font-medium">{product.name}</h3>
              <p className="mt-4 text-lg font-semibold">{product.price}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-black text-white text-sm font-medium hover:bg-brand-pink hover:text-brand-black transition-all duration-250">
                Consultar disponibilidade
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={onClose}
                className="text-sm text-brand-gray hover:text-brand-black transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
