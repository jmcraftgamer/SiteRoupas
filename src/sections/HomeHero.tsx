import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { store } from "../data/store";

export function HomeHero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero/hero-principal.png"
          alt="Estilo Modas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-4"
          >
            Coleção {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-8xl font-serif font-medium text-white leading-[1.05] tracking-tight"
          >
            ESTILO
            <br />
            MODAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 text-lg lg:text-xl text-white/80 max-w-md"
          >
            {store.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#novidades"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-black text-sm font-medium hover:bg-brand-pink hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver coleção
              <ArrowRight size={15} strokeWidth={1.5} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Conhecer a loja
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
