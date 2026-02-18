import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const solutions = [
  {
    name: "Landing Page",
    tag: "VENTAS",
    desc: "Una página de alto impacto diseñada para convertir visitas en clientes reales rápidamente.",
    setup: "$3,500 - $6,000",
    support: "$800 - $1,500 /mes",
    features: ["Diseño para vender", "Botones de contacto", "Lista para publicidad"],
  },
  {
    name: "Sitio Corporativo",
    tag: "PRESENCIA",
    desc: "La imagen profesional de tu empresa. Ideal para generar confianza y mostrar tus servicios.",
    setup: "$7,000 - $12,000",
    support: "$1,200 - $2,500 /mes",
    features: ["Múltiples secciones", "Blog o Noticias", "Correo corporativo"],
  },
  {
    name: "Web Backend",
    tag: "SISTEMA",
    desc: "Herramientas a la medida con bases de datos y funciones especiales para tu operación.",
    setup: "$15,000 - $35,000+",
    support: "$2,500 - $5,000 /mes",
    features: ["Paneles de control", "Perfiles de usuario", "Datos seguros"],
  },
  {
    name: "Catálogo Digital",
    tag: "VITRINA",
    desc: "Tu inventario disponible 24/7. Organiza tus productos y recibe pedidos por el medio de tu preferencia.",
    setup: "$8,000 - $15,000",
    support: "$1,500 - $3,000 /mes",
    features: ["Galería ilimitada", "Filtros de búsqueda", "Enlace a ventas"],
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      id="soluciones" 
      className="relative pt-12 pb-20 md:pb-32 bg-white text-[#023468] -mt-6 md:-mt-8" 
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#023468]"></span>
              <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-black opacity-40 italic">
                Inversión y Crecimiento
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              PLANES A <br />
              <span className="text-[#023468]/20 not-italic">TU MEDIDA.</span>
            </h2>
          </motion.div>
        </div>

        {/* GRID: 2x2 */}
        <div className="grid grid-cols-2 lg:grid-cols-2 border-l border-t border-[#023468]/10 bg-white overflow-hidden">
          {solutions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-5 md:p-14 border-r border-b border-[#023468]/10 group hover:bg-[#023468]/[0.02] transition-colors flex flex-col justify-between min-h-[300px] md:min-h-[450px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[7px] md:text-[9px] font-mono opacity-30 flex items-center gap-1">
                    <Terminal size={8} /> {item.tag}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
                </div>

                <h3 className="font-display text-sm md:text-4xl font-black uppercase italic tracking-tighter mb-4 group-hover:translate-x-1 transition-transform">
                  {item.name}
                </h3>

                <p className="text-[9px] md:text-base font-light leading-tight md:leading-relaxed text-[#023468]/60 mb-6 md:mb-8">
                  {item.desc}
                </p>

                {/* RANGOS DE INVERSIÓN */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <span className="text-[7px] md:text-[8px] uppercase tracking-widest opacity-40 block mb-1">Puesta en marcha</span>
                    <p className="text-sm md:text-2xl font-black tracking-tighter">{item.setup}</p>
                  </div>
                  <div>
                    <span className="text-[7px] md:text-[8px] uppercase tracking-widest opacity-40 block mb-1">Cuidado y Soporte</span>
                    <p className="text-[9px] md:text-sm font-light italic opacity-60 leading-none">{item.support}</p>
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className="flex items-center justify-between border border-[#023468]/20 p-3 md:p-6 text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] group-hover:bg-[#023468] group-hover:text-white transition-all duration-500"
              >
                Solicitar propuesta
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* NOTA ACLARATORIA */}
        <p className="mt-8 text-[7px] md:text-[10px] text-center uppercase tracking-widest opacity-30 italic">
          * Precios estimados sujetos a cambios según las necesidades específicas de tu proyecto.
        </p>

      </div>
    </section>
  );
};

export default Pricing;