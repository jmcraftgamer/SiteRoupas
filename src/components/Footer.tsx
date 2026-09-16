import { MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { store, contact, navLinks } from "../data/store";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 lg:py-20">
          {/* Brand */}
          <div>
            <img
              src={store.brand.logo}
              alt={store.name}
              className="h-8 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {store.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-brand-pink transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">
              Redes sociais
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-pink transition-colors group"
              >
                <InstagramIcon size={16} strokeWidth={1.5} />
                Instagram
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-pink transition-colors group"
              >
                <MapPin size={16} strokeWidth={1.5} />
                Google Maps
                <ArrowUpRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            {new Date().getFullYear()} {store.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
