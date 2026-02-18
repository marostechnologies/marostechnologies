import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Escuchamos",
    id: "STEP_01",
    desc: "Platicamos sobre tu idea y tus metas para trazar el camino más inteligente.",
  },
  {
    icon: Lightbulb,
    title: "Planeamos",
    id: "STEP_02",
    desc: "Diseñamos la estructura y los borradores visuales para que veas cómo funcionará.",
  },
  {
    icon: Code2,
    title: "Construimos",
    id: "STEP_03",
    desc: "Programamos tu sitio con avances reales cada semana para que veas el progreso.",
  },
  {
    icon: Rocket,
    title: "Lanzamos",
    id: "STEP_04",
    desc: "Hacemos pruebas finales y ponemos tu proyecto en marcha ante el mundo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Cuidamos",
    id: "STEP_05",
    desc: "Te acompañamos después del estreno para que todo siga funcionando perfecto.",
  },
];

const Methodology = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      id="metodologia" 
      className="relative pt-12 pb-20 md:pb-32 bg-white text-[#023468] -mt-6 md:-mt-8" 
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        
        {/* ENCABEZADO */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-[#023468]"></span>
              <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-black opacity-40">
                Nuestra Forma de Trabajo
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              PASO A PASO, <br />
              <span className="text-[#023468]/20 not-italic">SIN COMPLICACIONES.</span>
            </h2>
          </motion.div>
        </div>

        {/* GRID: 2 columnas en móvil, 3 en desktop (3x2) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border-l border-t border-[#023468]/10 bg-white">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              /* Lógica de columnas:
                 - En móvil (default): Todos ocupan 1 columna, excepto el 5to (index 4) que ocupa 2 para cerrar el grid.
                 - En LG: Todos ocupan 1 columna.
              */
              className={`p-6 md:p-12 border-r border-b border-[#023468]/10 group hover:bg-[#023468]/[0.01] transition-colors relative min-h-[240px] md:min-h-[380px] flex flex-col justify-between ${
                i === 4 ? "col-span-2 lg:col-span-1" : "col-span-1" 
              }`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 md:mb-12">
                  <span className="font-mono text-[7px] md:text-[10px] tracking-tighter opacity-30">
                    {step.id} // MAROS
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#023468]/10 group-hover:bg-green-500 transition-colors duration-500" />
                </div>

                <div className="mb-6">
                  <step.icon className="w-5 h-5 md:w-8 md:h-8 text-[#023468] opacity-20 group-hover:opacity-100 transition-all duration-500" strokeWidth={1} />
                </div>

                <div className="mt-auto">
                  <h3 className="font-display text-sm md:text-2xl font-black uppercase italic tracking-tighter mb-2 md:mb-4 group-hover:translate-x-1 transition-transform">
                    {step.title}
                  </h3>
                  
                  <p className="text-[10px] md:text-sm font-light leading-snug md:leading-relaxed text-[#023468]/60">
                    {step.desc}
                  </p>
                </div>
              </div>

              <span className="absolute bottom-2 right-2 text-3xl md:text-7xl font-black text-[#023468]/[0.02] italic pointer-events-none uppercase">
                {i + 1}
              </span>
            </motion.div>
          ))}
          
          {/* CUADRO DE RELLENO: Solo visible en LG para completar el 3x2 (Fila 2, Columna 3) */}
          <div className="hidden lg:flex p-12 border-r border-b border-[#023468]/10 items-center justify-center bg-[#023468]/[0.01] relative overflow-hidden">
             <div className="text-center relative z-10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mx-auto mb-4" />
                <span className="text-[9px] font-black uppercase tracking-widest opacity-40 italic">
                  Systems Ready
                </span>
             </div>
             {/* Decoración sutil de fondo para el cuadro de relleno */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                <span className="text-9xl font-black italic">MX</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;