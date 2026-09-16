import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function EditorialWoman() {
  return (
    <section className="py-16 lg:py-24 bg-brand-bg">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image - left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src="/assets/women/look-01.png"
                  alt="Moda feminina Estilo Modas"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand-pink/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text - right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
              Feminino
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
              Peças para cada
              <br />
              momento.
            </h2>
            <p className="mt-5 text-brand-gray leading-relaxed max-w-md">
              Moda feminina que acompanha diferentes estilos e personalidades.
              Do casual ao elegante, com preço acessível.
            </p>
            <a
              href="#feminino"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-pink transition-colors group"
            >
              Explorar coleção
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
