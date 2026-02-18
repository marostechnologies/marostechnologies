import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Users, HeadphonesIcon, Expand, ArrowRight } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Tranquilidad", desc: "Sistemas protegidos y seguros para que duermas tranquilo." },
  { icon: Users, title: "Libertad Total", desc: "El código es tuyo. Sin letras chiquitas ni ataduras." },
  { icon: HeadphonesIcon, title: "Siempre Cerca", desc: "Estamos a un mensaje de distancia para apoyarte en todo." },
  { icon: Expand, title: "Sin Límites", desc: "Tu sistema crece al mismo ritmo que crezca tu negocio." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      className="relative pt-12 pb-16 md:pb-32 bg-white text-[#023468] overflow-hidden -mt-6 md:-mt-8" 
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#023468]/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* ENCABEZADO CERCANO */}
        <div className="max-w-4xl mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#023468]"></span>
              <span className="text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black opacity-40 italic">¿Por qué MAROS?</span>
            </div>
            <h2 className="font-display text-3xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              HACEMOS QUE <br />
              <span className="text-[#023468]/20 not-italic">SUCEDA.</span>
            </h2>
          </motion.div>
        </div>

        {/* GRID: 4 cuadros (2x2 en desktop, 2 columnas en móvil) */}
        <div className="grid grid-cols-2 lg:grid-cols-2 border-l border-t border-[#023468]/10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 md:p-14 border-r border-b border-[#023468]/10 group hover:bg-[#023468]/[0.02] transition-colors relative overflow-hidden"
            >
              <span className="absolute -bottom-2 -right-1 text-5xl md:text-8xl font-black text-[#023468]/[0.03] italic group-hover:text-[#023468]/[0.05] transition-colors pointer-events-none">
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-8 border border-[#023468]/10 flex items-center justify-center group-hover:bg-[#023468] group-hover:text-white transition-all duration-500">
                  <r.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm md:text-2xl font-bold uppercase italic tracking-tighter mb-2 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500">
                  {r.title}
                </h3>
                <p className="text-[10px] md:text-base font-light leading-relaxed text-[#023468]/60 max-w-xs">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BANNER COMPACTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-24 relative group"
        >
          <div className="bg-[#023468] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
            
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 md:mb-6">
                ¿TIENES UNA <br /> GRAN IDEA?
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto font-light text-xs md:text-lg px-4">
                La hacemos realidad con tecnología propia, diseñada para darte el control total de tu negocio.
              </p>
              
              <a
                href="#contacto"
                className="group inline-flex items-center gap-4 md:gap-6 bg-white text-[#023468] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] px-6 py-4 md:px-10 md:py-5 hover:bg-[#3b82f6] hover:text-white transition-all duration-500 shadow-xl shadow-black/20"
              >
                Hablemos de tu proyecto
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;