import { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Globe, Settings, ShoppingCart, Zap, LayoutDashboard, Plug, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Sitios Web", id: "WEB_DEV", description: "Páginas rápidas y modernas que convierten visitantes." },
  { icon: Settings, title: "Sistemas", id: "SOFT_ARCH", description: "Herramientas a la medida de los retos de tu empresa." },
  { icon: ShoppingCart, title: "E-commerce", id: "SALES_ECO", description: "Tiendas robustas preparadas para vender más." },
  { icon: Zap, title: "Automatización", id: "AUTO_FLOW", description: "Eliminamos tareas repetitivas para tu equipo." },
  { icon: LayoutDashboard, title: "Paneles", id: "DATA_VIS", description: "Toda la información organizada en un solo lugar." },
  { icon: Plug, title: "Conexiones", id: "INTEGRA_X", description: "Unimos tus herramientas en total armonía." },
];

const PremiumInfiniteCarousel = () => {
  const allServices = [...services, ...services, ...services];
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  const startAnimation = async () => {
    await controls.start({
      x: "-33.333%",
      transition: { duration: 35, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (!isPaused) startAnimation();
    else controls.stop();
  }, [isPaused]);

  return (
    <section id="servicios" className="py-16 bg-[#f8f9fa] overflow-hidden border-t border-[#023468]/5">
      {/* HEADER: Ajustado para no cortarse nunca */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-col gap-1">
          <div className="w-8 h-[2px] bg-[#023468] mb-2" />
          <h2 className="font-display font-black uppercase tracking-tighter text-[#023468] leading-[0.8]">
            <span className="text-[clamp(32px,8vw,60px)] block">Servicios</span>
            <span className="text-[clamp(28px,7vw,50px)] italic font-light opacity-40">Premium</span>
          </h2>
        </div>
      </div>

      {/* CAROUSEL AREA */}
      <div className="relative">
        <motion.div
          className="flex gap-4 md:gap-6 px-4"
          style={{ x, width: "max-content" }}
          animate={controls}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          {allServices.map((s, i) => (
            <motion.div
              key={`${s.id}-${i}`}
              // CUADROS MÁS CHICOS: Ajuste preciso de ancho y alto
              className="w-[220px] md:w-[280px] group relative p-6 md:p-8 bg-white border border-[#023468]/10 rounded-sm flex flex-col justify-between min-h-[300px] md:min-h-[380px] transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative z-10">
                {/* ICONO COMPACTO */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 bg-[#023468] text-white flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-[#023468] group-hover:border group-hover:border-[#023468]/20">
                    <s.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[9px] font-bold opacity-20 tracking-tighter">
                    /0{(i % 6) + 1}
                  </span>
                </div>
                
                {/* TITULO ADAPTADO: Tamaño dinámico para evitar cortes */}
                <h3 className="font-display text-xl md:text-3xl font-black uppercase tracking-tighter text-[#023468] leading-[0.9] mb-4 break-words">
                  {s.title.split(' ')[0]} <br />
                  <span className="italic font-light opacity-60 group-hover:opacity-100 transition-opacity">
                    {s.title.split(' ')[1] || ""}
                  </span>
                </h3>
                
                {/* DESCRIPCIÓN: Ajuste de interlineado y tamaño */}
                <p className="text-[#023468]/80 text-[10px] md:text-xs leading-tight font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  {s.description}
                </p>
              </div>

              {/* FOOTER DEL CUADRO */}
              <div className="relative z-10 pt-6 flex items-center justify-between">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#023468]/40">Info</span>
                <ArrowUpRight size={14} className="text-[#023468] transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* LINEA DE ACENTO */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#023468] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* VIGNETTES SUTILES */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-20 pointer-events-none" />
      </div>

      {/* TRACKER MINIMALISTA */}
      <div className="container mx-auto px-6 mt-8">
        <div className="w-full h-[1px] bg-[#023468]/10 relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-20 bg-[#023468]/40"
          />
        </div>
      </div>
    </section>
  );
};

export default PremiumInfiniteCarousel;