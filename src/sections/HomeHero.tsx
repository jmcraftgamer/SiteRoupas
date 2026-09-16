import { motion } from "framer-motion";
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

      {/* Content overlay - centered */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
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
          className="text-6xl md:text-7xl lg:text-[7rem] font-serif font-medium text-white leading-[1.05] tracking-tight"
        >
          ESTILO
          <br />
          MODAS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 text-lg lg:text-xl text-white/80 max-w-md"
        >
          {store.slogan}
        </motion.p>
      </div>
    </section>
  );
}
