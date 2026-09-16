import { motion } from "framer-motion";
import { MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../components/InstagramIcon";
import { contact } from "../data/store";

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-brand-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-pink mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            Quer falar com a gente?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <motion.a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
              <InstagramIcon size={20} className="text-brand-pink" />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold">Instagram</h4>
              <p className="text-xs text-brand-gray mt-1">@loja_estilo__</p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">
              Seguir <ArrowUpRight size={11} />
            </span>
          </motion.a>

          <motion.a
            href={contact.whatsapp || "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
              <MessageCircle size={20} className="text-brand-pink" />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold">WhatsApp</h4>
              <p className="text-xs text-brand-gray mt-1">Enviar mensagem</p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">
              Conversar <ArrowUpRight size={11} />
            </span>
          </motion.a>

          <motion.a
            href={contact.maps}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
              <MapPin size={20} className="text-brand-pink" />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-semibold">Como chegar</h4>
              <p className="text-xs text-brand-gray mt-1">Google Maps</p>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">
              Ver rota <ArrowUpRight size={11} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
