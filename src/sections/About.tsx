import { motion } from "framer-motion";
import { store } from "../data/store";

export function About() {
  return (
    <section id="sobre" className="py-28 lg:py-44 bg-brand-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 max-w-md mx-auto">
              <img
                src="/assets/hero/hero-principal.png"
                alt="Fachada da Estilo Modas"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-brand-pink/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
              Sobre nós
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1]">
              Mais do que
              <br />
              moda.
            </h2>
            <p className="mt-6 text-brand-gray leading-relaxed text-base lg:text-lg">
              {store.description}
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed">
              Conteúdo a adicionar — história da loja, valores e diferenciais.
            </p>

            <div className="mt-8 w-12 h-[2px] bg-brand-pink rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
