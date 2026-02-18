import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-20%", "5%"]);

  const ScrollingText = ({ children, style, className }: any) => (
    <motion.div 
      style={style} 
      className={`whitespace-nowrap flex items-center gap-12 md:gap-20 w-full ${className}`}
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-12 md:gap-20">
          {children}
        </div>
      ))}
    </motion.div>
  );

  return (
    <section 
      // AGREGAMOS EL ID AQUÍ PARA EL NAVBAR
      id="inicio"
      ref={containerRef}
      // scroll-mt-20 evita que el Navbar tape el inicio de la sección
      className="relative h-screen min-h-[600px] w-full bg-[#f8f9fa] text-[#023468] overflow-hidden flex items-center justify-center scroll-mt-20"
    >
      {/* CAPA DE FONDO ARTÍSTICO */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between py-2 md:py-8 opacity-[0.07] pointer-events-none select-none">
        <ScrollingText style={{ x: xLeft }} className="font-display text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8]">
          <span>E-commerce</span>
          <span>Scalable</span>
          <span>SaaS</span>
        </ScrollingText>

        <ScrollingText style={{ x: xRight }} className="font-display text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter italic leading-[0.8]">
          <span>High Performance</span>
        </ScrollingText>

        <ScrollingText style={{ x: xLeft }} className="font-display text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8]">
          <span>User Experience</span>
          <span>Apps</span>
        </ScrollingText>

        <ScrollingText style={{ x: xRight }} className="font-display text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter italic leading-[0.8]">
          <span>Digital Empire</span>
        </ScrollingText>

        <ScrollingText style={{ x: xLeft }} className="font-display text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8]">
          <span>Next-Gen Tech</span>
        </ScrollingText>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 w-full px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85] font-black tracking-[-0.04em] uppercase text-[#023468]">
              TU AMBICIÓN <br />
              <span className="italic font-light text-[#023468]/90">TRADUCIDA A </span> 
              <span className="relative">
                CÓDIGO.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-[2px] md:h-[4px] bg-[#023468] hidden md:block"
                />
              </span>
            </h1>

            <p className="mt-8 md:mt-10 max-w-[280px] sm:max-w-md md:max-w-xl mx-auto text-sm md:text-lg font-medium leading-relaxed opacity-80 text-[#023468]">
              Creamos ecosistemas digitales de alto rendimiento que convierten ideas complejas en interfaces rentables.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#023468] to-transparent opacity-40"
        />
      </div>
    </section>
  );
};

export default Hero;