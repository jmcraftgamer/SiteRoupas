import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Menu, X } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { navLinks, store, contact } from "../data/store";

export function Header() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 20;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14 lg:h-16" : "h-18 lg:h-20"
            }`}
          >
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0">
              <img
                src={store.brand.logo}
                alt={store.name}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-7 lg:h-8" : "h-8 lg:h-10"
                } w-auto object-contain`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide text-brand-black/70 hover:text-brand-black transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-pink group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#contato"
                aria-label="Pesquisar"
                className="text-brand-black/60 hover:text-brand-black transition-colors"
              >
                <Search size={18} strokeWidth={1.5} />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-black/60 hover:text-brand-black transition-colors"
              >
                <InstagramIcon size={18} strokeWidth={1.5} />
              </a>
              <a
                href={contact.whatsapp || "#contato"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-brand-black/60 hover:text-brand-black transition-colors"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-brand-black"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="h-18 px-6 flex items-center justify-between">
              <img
                src={store.brand.logo}
                alt={store.name}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="text-brand-black"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center gap-8 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="text-2xl font-light tracking-wide text-brand-black hover:text-brand-pink transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-6">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-black/50 hover:text-brand-black transition-colors"
              >
                <InstagramIcon size={20} strokeWidth={1.5} />
              </a>
              <a
                href={contact.whatsapp || "#contato"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-brand-black/50 hover:text-brand-black transition-colors"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
