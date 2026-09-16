import { motion } from "framer-motion";
import { ProductGrid } from "../components/ProductGrid";
import { newArrivals } from "../data/products";

export function NewArrivals() {
  return (
    <section id="novidades" className="py-20 lg:py-28 bg-brand-white">
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
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            Novidades
          </h2>
        </motion.div>

        <ProductGrid products={newArrivals} columns={4} />
      </div>
    </section>
  );
}
