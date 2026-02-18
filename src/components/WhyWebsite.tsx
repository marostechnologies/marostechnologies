import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Shield, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Puertas Abiertas",
    id: "ALWAYS_ON",
    description: "Tu negocio no descansa. Una web es tu mejor vendedor, disponible 24/7 para captar clientes mientras tú te enfocas en lo importante.",
  },
  {
    icon: Shield,
    title: "Confianza Real",
    id: "TRUST_FIRST",
    description: "Antes de comprar, el mundo te busca en Google. Si no estás o te ves antiguo, la venta se la lleva tu competencia hoy mismo.",
  },
  {
    icon: TrendingUp,
    title: "Escala Real",
    id: "GROWTH_HUB",
    description: "Deja de depender solo de referidos. Automatiza la llegada de nuevos prospectos y mide exactamente de dónde viene cada centavo.",
  },
  {
    icon: Zap,
    title: "Menos Carga",
    id: "OPS_EASE",
    description: "Responde dudas, agenda citas o vende productos sin mover un dedo. Tu web gestiona la complejidad operativa por ti.",
  },
];

const WhyWebsite = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-20 md:py-32 bg-white text-[#023468] overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase font-black text-[#023468]/40 mb-4 block">
              Tu siguiente nivel
            </span>
            <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              NO ES SOLO UNA WEB. <br />
              <span className="text-[#023468]/20 not-italic">ES TU CRECIMIENTO.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="max-w-xs text-[12px] md:text-lg text-[#023468]/60 font-light leading-relaxed border-l border-[#023468]/10 pl-6 md:pl-8"
          >
            Construimos activos digitales que separan a los líderes de los seguidores.
          </motion.p>
        </div>

        {/* CONTENEDOR GRID: 2 columnas en móvil, 4 en escritorio */}
        <div className="relative">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#023468]/10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                // Ajuste: Eliminado aspect-square en móvil, min-h para consistencia
                className="group p-5 md:p-10 border-r border-b border-[#023468]/10 bg-white relative overflow-hidden flex flex-col justify-between min-h-[280px] md:min-h-[400px]"
              >
                {/* ID Técnico */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="font-mono text-[7px] md:text-[10px] opacity-30 group-hover:text-[#023468] transition-colors">
                    {b.id} // 0{i + 1}
                  </span>
                  <b.icon className="w-4 h-4 md:w-8 md:h-8 text-[#023468] opacity-20 group-hover:opacity-100 transition-all duration-500" strokeWidth={1} />
                </div>

                <div className="relative z-10 mt-6 md:mt-0">
                  <h3 className="font-display font-bold text-xs md:text-2xl uppercase tracking-tighter text-[#023468] mb-2 md:mb-4 group-hover:translate-x-1 transition-transform">
                    {b.title}
                  </h3>
                  {/* Texto ajustado para no cortarse */}
                  <p className="text-[#023468]/60 text-[10px] md:text-sm leading-snug md:leading-relaxed font-light">
                    {b.description}
                  </p>
                </div>

                {/* Número de fondo (más pequeño en móvil para no estorbar) */}
                <span className="absolute -right-1 -bottom-2 text-5xl md:text-9xl font-black text-[#023468]/[0.03] italic pointer-events-none group-hover:text-[#023468]/[0.05] transition-colors uppercase">
                  0{i + 1}
                </span>

                {/* Borde animado inferior */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#023468] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-12 md:mt-24 flex justify-between items-center border-t border-[#023468]/5 pt-8"
        >
          <div className="text-[8px] md:text-[10px] tracking-[0.4em] font-black uppercase text-[#023468]/20 flex items-center gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Active Growth Strategy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWebsite;