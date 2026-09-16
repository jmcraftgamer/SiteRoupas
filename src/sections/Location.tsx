import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { store } from "../data/store";

export function Location() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Localização
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            Venha nos visitar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden bg-neutral-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.0!3d-23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiUyA0NsKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Estilo Modas"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                <MapPin size={18} className="text-brand-pink" />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Endereço</h4>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {store.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                <Clock size={18} className="text-brand-pink" />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">
                  Horário de funcionamento
                </h4>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {store.hours}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={store.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-black text-white text-sm font-medium hover:bg-brand-pink hover:text-brand-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver no Google Maps
                <ArrowUpRight size={14} />
              </a>
              {store.phone && (
                <a
                  href={`tel:${store.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-black/15 text-brand-black text-sm font-medium hover:border-brand-black/40 transition-all duration-300"
                >
                  Ligar
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
