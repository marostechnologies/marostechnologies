import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techSpecs = [
  {
    label: "Experiencia",
    id: "USER_EXP",
    features: ["Diseño Moderno", "Navegación Fluida", "Adaptable a Móviles", "Carga Instantánea", "Fácil de Usar"],
  },
  {
    label: "Seguridad",
    id: "DATA_CORE",
    features: ["Protección de Datos", "Conexiones Seguras", "Cifrado Blindado", "Bases de Datos Robustas", "Cero Errores"],
  },
  {
    label: "Respaldo",
    id: "CLOUD_STAY",
    features: ["Tecnología en la Nube", "Siempre en Línea", "Crecimiento Sin Límites", "Vigilancia 24/7", "Copias de Seguridad"],
  },
];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      className="relative pt-12 pb-16 md:pb-32 bg-white text-[#023468] -mt-6 md:-mt-8" 
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#023468]"></span>
              <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-black opacity-40 italic">
                Estándares 2026
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              CALIDAD <br />
              <span className="text-[#023468]/20 not-italic">SIN COMPROMISOS.</span>
            </h2>
          </motion.div>
        </div>

        {/* GRID: 2 columnas en móvil, 3 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#023468]/10 border border-[#023468]/10 overflow-hidden">
          {techSpecs.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              /* i === 2 es el tercer elemento. En móvil ocupa 2 columnas, en LG ocupa 1 */
              className={`bg-white p-5 md:p-12 hover:bg-[#023468]/[0.02] transition-colors group relative ${
                i === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6 md:mb-10">
                  <span className="text-[7px] md:text-[10px] font-mono text-[#023468]/40 tracking-tighter">
                    {cat.id} // 0{i + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#023468]/20 group-hover:bg-[#023468] transition-colors duration-500" />
                </div>
                
                <h3 className="font-display text-lg md:text-2xl font-bold uppercase italic tracking-tighter mb-6 md:mb-10 group-hover:translate-x-1 transition-transform">
                  {cat.label}
                </h3>
                
                <ul className="space-y-3 md:space-y-4">
                  {cat.features.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 md:gap-3 text-[10px] md:text-sm text-[#023468]/60 font-light group/item cursor-default"
                    >
                      <div className="w-1 md:w-1.5 h-[1px] bg-[#023468]/30 group-hover/item:w-3 transition-all" />
                      <span className="group-hover/item:text-[#023468] transition-colors">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* CUADROS DE RELLENO PARA DESKTOP (Solo se ven en LG para completar el 3x2) */}
          <div className="hidden lg:flex flex-col justify-center p-12 bg-[#023468]/[0.01] border-r border-[#023468]/10 opacity-30">
            <span className="text-[8px] font-black uppercase tracking-widest mb-2 italic">Optimized</span>
            <div className="h-[1px] w-full bg-[#023468]/20" />
          </div>
          <div className="hidden lg:flex flex-col justify-center p-12 bg-[#023468]/[0.01] border-r border-[#023468]/10 opacity-30">
            <span className="text-[8px] font-black uppercase tracking-widest mb-2 italic">Secure</span>
            <div className="h-[1px] w-full bg-[#023468]/20" />
          </div>
          <div className="hidden lg:flex flex-col justify-center p-12 bg-[#023468]/[0.01] opacity-30">
            <span className="text-[8px] font-black uppercase tracking-widest mb-2 italic">Scalable</span>
            <div className="h-[1px] w-full bg-[#023468]/20" />
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#023468]/5 pt-8">
          <div className="flex gap-4 md:gap-10 opacity-30 text-[#023468]">
            {["Seguridad", "Escalabilidad", "Rendimiento"].map((text) => (
              <span key={text} className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] font-black italic">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;