import { motion } from "framer-motion";
import { ProductGrid } from "../components/ProductGrid";
import { featuredProducts } from "../data/products";

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
              Seleção
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">
              Em destaque
            </h2>
          </div>
          <a
            href="#novidades"
            className="text-sm text-brand-gray hover:text-brand-black transition-colors underline underline-offset-4 decoration-brand-gray/30 hover:decoration-brand-black/50"
          >
            Ver todas as peças
          </a>
        </motion.div>

        <ProductGrid products={featuredProducts} columns={4} />
      </div>
    </section>
  );
}
