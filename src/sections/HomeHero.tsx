import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { store } from "../data/store";

export function HomeHero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-brand-white pt-18 lg:pt-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-4"
            >
              Coleção {new Date().getFullYear()}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif font-medium leading-[1.05] tracking-tight"
            >
              ESTILO
              <br />
              MODAS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-lg lg:text-xl text-brand-gray leading-relaxed max-w-md"
            >
              {store.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#novidades"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-black text-white text-sm font-medium hover:bg-brand-pink hover:text-brand-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver coleção
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-brand-black/15 text-brand-black text-sm font-medium hover:border-brand-black/40 transition-all duration-300"
              >
                Conhecer a loja
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
              <img
                src="/assets/hero/hero-principal.png"
                alt="Estilo Modas - Moda feminina e masculina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/10 via-transparent to-transparent" />
            </div>
            {/* Decorative pink line */}
            <div className="absolute -bottom-3 left-8 right-8 h-[2px] bg-brand-pink/30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
