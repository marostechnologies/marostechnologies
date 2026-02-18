import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#methodology" },
  { label: "Calidad", href: "#technologies" },
  { label: "Proyectos", href: "#portafolio" },
  { label: "¿Por qué Maros?", href: "#whychooseus" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto transition-all duration-700 ease-in-out mt-6 mx-6",
          isScrolled 
            ? "w-[98%] max-w-[1100px] rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" 
            : "w-full max-w-[1400px] bg-transparent px-2 py-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a 
            href="#inicio" 
            onClick={(e) => handleScroll(e, "#inicio")} 
            className="flex items-center pl-4 shrink-0"
          >
            <motion.img 
              src="/logos/MAROS_LOGO_SINFONDO.PNG" 
              alt="maros Logo" 
              animate={{ 
                height: isScrolled ? 24 : 32,
                filter: isScrolled ? "brightness(1.1)" : "brightness(1) contrast(1.1)" 
              }}
              className="w-auto object-contain transition-all duration-500"
            />
          </a>

          {/* DESKTOP MENU - Texto más pequeño para acomodar todas las secciones */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "px-3 py-2 text-[9px] tracking-[0.2em] uppercase font-bold transition-all duration-500 whitespace-nowrap",
                  isScrolled 
                    ? "text-white/50 hover:text-white" 
                    : "text-[#023468] hover:opacity-60"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className={cn(
              "lg:hidden pr-4 transition-colors duration-500",
              isScrolled ? "text-white" : "text-[#023468]"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-black flex flex-col justify-center items-center pointer-events-auto p-8"
          >
            {/* Cerrar móvil */}
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-start gap-6 w-full max-w-sm">
              <span className="text-[10px] tracking-[0.5em] text-white/20 uppercase mb-4">Menú de Navegación</span>
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-3xl font-black italic tracking-tighter text-white/40 hover:text-white transition-all uppercase"
                >
                  <span className="text-sm font-mono mr-4 opacity-20">0{i + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;