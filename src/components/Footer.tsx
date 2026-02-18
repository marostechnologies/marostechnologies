import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Instagram, Mail, Phone, Globe, Shield, FileText, Lock, X } from "lucide-react";

// Componente Interno para el Modal Legal
const LegalModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#023468] border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 animate-pulse" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] font-mono">{title}</h3>
            </div>
            <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
              <X size={20} className="text-white/50 hover:text-white" />
            </button>
          </div>
          <div className="p-8 overflow-y-auto font-mono text-xs md:text-sm leading-relaxed text-white/70 space-y-6 custom-scrollbar">
            {content}
          </div>
          <div className="p-4 bg-black/20 border-t border-white/5 text-[8px] font-mono text-center opacity-30 uppercase tracking-[0.5em]">
            Maros Technologies System Document // 2026
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Footer = () => {
  const [legalType, setLegalType] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* LOGO Y SLOGAN */}
          <div className="md:col-span-5 space-y-6">
            <img src="/logos/MAROS_LOGO_SINFONDO.PNG" alt="maros Logo" className="h-10 md:h-12 w-auto brightness-110" />
            <p className="text-white font-display text-xl md:text-3xl font-black italic uppercase tracking-tighter leading-none max-w-sm">
              CONVERTIMOS LA<br /><span className="text-white/20 not-italic">COMPLEJIDAD EN CONTROL.</span>
            </p>
            <div className="flex gap-3 pt-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/marostechnologies?igsh=bXljbTl0NTN5OWMx&utm_source=qr" },
                { Icon: Mail, href: "mailto:marostechnologies@gmail.com" },
                { Icon: Phone, href: "https://wa.me/525655582075" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 rounded-sm">
                  <social.Icon size={16} strokeWidth={1} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 mb-8 italic">Explorar</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs md:text-sm font-light text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-[1px] bg-white/0 group-hover:w-3 group-hover:bg-white transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO DE SISTEMA */}
          <div className="md:col-span-4">
            <div className="border border-white/10 p-6 bg-white/[0.01] rounded-sm relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-[#3b82f6]" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">ACTIVE</span>
                </div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              </div>
              <div className="space-y-4 font-mono text-[10px]">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-30">DESARROLLO</span>
                  <span className="text-white/80 italic font-black">100%_PROPIETARIO</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-30">LICENSE</span>
                  <span>ENTERPRISE_2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">© 2026 MAROS Technologies_</span>
            <div className="flex gap-8 items-center border-l border-white/10 pl-8 hidden md:flex">
              <button onClick={() => setLegalType('privacy')} className="group flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity">
                <Lock size={10} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-[8px] font-mono uppercase tracking-widest">Aviso_Privacidad</span>
              </button>
              <button onClick={() => setLegalType('terms')} className="group flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity">
                <FileText size={10} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-[8px] font-mono uppercase tracking-widest">Términos_Legales</span>
              </button>
            </div>
          </div>
          <button onClick={scrollToTop} className="group flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">
            System_Jump
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white transition-all duration-500 relative overflow-hidden">
               <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform z-10" />
               <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>

      {/* MODALES LEGALES */}
      <LegalModal 
        isOpen={legalType === 'privacy'} 
        onClose={() => setLegalType(null)} 
        title="Aviso de Privacidad // MAROS"
        content={
          <div className="space-y-4 text-white">
            <p className="text-blue-400 text-xs">// RESPONSABLE: MAROS TECHNOLOGIES (CDMX)</p>
            <p>Sus datos personales serán utilizados exclusivamente para la gestión de proyectos, comunicación de presupuestos y soporte técnico especializado.</p>
            <p>No compartimos información con terceros sin su consentimiento explícito. Usted puede ejercer sus derechos de acceso y rectificación en marostechnologies@gmail.com.</p>
          </div>
        }
      />
      <LegalModal 
        isOpen={legalType === 'terms'} 
        onClose={() => setLegalType(null)} 
        title="Términos y Condiciones // MAROS"
        content={
          <div className="space-y-4 text-white">
            <p className="text-blue-400 text-xs">// PROTOCOLO DE PROPIEDAD INTELECTUAL</p>
            <p>1. Maros Technologies entrega autonomía plena tras la liquidación del proyecto.</p>
            <p>2. No nos hacemos responsables por vulnerabilidades causadas por modificaciones de terceros ajenos a nuestro equipo central.</p>
            <p>3. Los accesos de infraestructura son propiedad exclusiva del cliente tras la entrega formal.</p>
          </div>
        }
      />
    </footer>
  );
};

export default Footer;