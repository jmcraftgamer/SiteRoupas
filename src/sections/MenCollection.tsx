import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menProducts } from "../data/products";

export function MenCollection() {
  return (
    <section id="masculino" className="py-20 lg:py-28 bg-brand-bg overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Right content - first on mobile */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:order-1 lg:py-12 order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
                Masculino
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Moda
                <br />
                masculina
              </h2>
              <p className="mt-5 text-brand-gray leading-relaxed max-w-sm">
                Estilo e conforto para o dia a dia com peças que combinam com
                diferentes ocasiões.
              </p>
            </motion.div>

            {/* Two smaller images */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {menProducts.slice(1).map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-xs text-brand-gray truncate">
                    {product.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#novidades"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-black hover:text-brand-pink transition-colors group"
            >
              Explorar coleção
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          {/* Large image right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:order-2"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src={menProducts[0].image}
                alt={menProducts[0].name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
