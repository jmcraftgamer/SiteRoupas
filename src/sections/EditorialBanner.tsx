import { motion } from "framer-motion";

export function EditorialBanner() {
  return (
    <section className="py-16 lg:py-28 bg-brand-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Coleção
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
            Novos looks
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100"
          >
            <img
              src="/assets/editorial/editorial-01.png"
              alt="Estilo Modas - Coleção editorial"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100"
          >
            <img
              src="/assets/editorial/editorial-02.png"
              alt="Estilo Modas - Composição editorial"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
