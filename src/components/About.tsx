import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ShieldCheck, Laptop, Zap, ArrowUpRight } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animaciones de Scroll Premium
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const logoX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yCajaGris = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yCajaAzul = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="nosotros"
      ref={containerRef}
      /* REDUCCIÓN DE ESPACIO: py-16 a py-8 y margen negativo para pegar a la sección anterior */
      className="relative py-8 md:py-16 bg-white text-[#023468] overflow-hidden scroll-mt-10 -mt-8 md:-mt-12"
    >
      {/* LOGO BACKGROUND */}
      <motion.div
        style={{ rotate: logoRotate, x: logoX }}
        className="absolute -right-20 -top-24 md:-right-24 md:top-0 pointer-events-none z-[40]"
      >
        <img
          src="/MarosIcon/MarosIconLeft.png"
          alt="Icono Maros"
          className="w-[75vw] md:w-[35vw] max-w-600px] object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-5 relative z-10">
        {/* GAP REDUCIDO: de gap-10 a gap-6 para juntar el header con las cajas */}
        <div className="flex flex-col gap-6 md:gap-10">
          {/* HEADER COMPACTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 relative z-[50]"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#023468]"></span>
              <span className="text-[10px] tracking-[0.5em] font-black uppercase opacity-40">
                Nosotros
              </span>
            </div>

            <h2 className="font-display font-black uppercase tracking-tighter leading-[0.75] flex flex-col items-start">
              <span className="text-[14vw] md:text-8xl">MAROS</span>
              <span className="bg-[#023468] text-white px-3 py-1 text-[5vw] md:text-2xl italic font-black mt-2 shadow-[5px_5px_0px_0px_rgba(2,52,104,0.1)] tracking-tight">
                TECHNOLOGIES
              </span>
            </h2>
          </motion.div>

          {/* GRID PRINCIPAL CON PARALLAX */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">
            {/* CAJA 1: INFORMACIÓN */}
            <motion.div
              style={{ y: yCajaGris }}
              className="md:col-span-7 bg-zinc-50/90 backdrop-blur-md p-8 md:p-12 border border-zinc-200 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-base md:text-xl font-black leading-[1.1] uppercase tracking-tight">
                  Fundada en 2025 en la Ciudad de México, nos distinguimos por
                  el desarrollo de soluciones digitales personalizadas.
                </p>
                <div className="space-y-4 opacity-70">
                  <p className="text-xs md:text-sm leading-relaxed font-medium">
                    Nuestro propósito es ofrecer herramientas tecnológicas que
                    faciliten la gestión integral de la información, otorgando
                    autonomía plena a las organizaciones.
                  </p>
                  <p className="text-xs md:text-sm italic border-l-2 border-[#023468] pl-5 py-1 font-bold">
                    Brindamos servicios de mantenimiento especializado o entrega
                    completa para gestión independiente.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-zinc-200">
                <div className="group cursor-default">
                  <h4 className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-2 transition-opacity group-hover:opacity-100">
                    Modelo
                  </h4>
                  <p className="text-xs font-black uppercase italic tracking-tighter">
                    Autonomía
                  </p>
                </div>
                <div className="group cursor-default">
                  <h4 className="text-[9px] font-black uppercase tracking-widest opacity-30 mb-2 transition-opacity group-hover:opacity-100">
                    Enfoque
                  </h4>
                  <p className="text-xs font-black uppercase italic tracking-tighter">
                    Especialización
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CAJA 2: CAPACIDADES */}
            <motion.div
              style={{ y: yCajaAzul }}
              className="md:col-span-5 bg-[#023468] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-[9px] tracking-[0.5em] font-black uppercase mb-10 opacity-40 italic">
                Áreas de Operación
              </h3>

              <div className="space-y-8">
                {[
                  { t: "Desarrollo", icon: Laptop },
                  { t: "Gestión Data", icon: Zap },
                  { t: "Soporte", icon: ShieldCheck },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-5 transition-transform duration-500 group-hover:translate-x-2">
                      <item.icon
                        size={18}
                        strokeWidth={1}
                        className="opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all"
                      />
                      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none">
                        {item.t}
                      </h4>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-white/50"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-mono tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                    Sistema de Control
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
