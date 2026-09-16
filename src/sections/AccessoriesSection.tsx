import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function AccessoriesSection() {
  return (
    <section id="acessorios" className="py-20 lg:py-28 bg-brand-bg">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Acessórios
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
            Complete seu look
          </h2>
          <p className="mt-5 text-brand-gray leading-relaxed max-w-md mx-auto">
            Bolsas, relógios, bijuterias e muito mais para combinar com o seu estilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="group p-8 rounded-2xl border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300 text-center"
          >
            <h3 className="text-lg font-medium mb-2">Bolsas</h3>
            <p className="text-sm text-brand-gray mb-4">
              Totes, crossbodies e modelagens para todas as ocasiões.
            </p>
            <span className="flex items-center justify-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">
              Em breve <ArrowUpRight size={11} />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-8 rounded-2xl border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300 text-center"
          >
            <h3 className="text-lg font-medium mb-2">Relógios & Bijuterias</h3>
            <p className="text-sm text-brand-gray mb-4">
              Peças que adicionam personalidade ao seu visual.
            </p>
            <span className="flex items-center justify-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">
              Em breve <ArrowUpRight size={11} />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
