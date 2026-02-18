import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "JPCars",
    category: "Plataforma Automotriz",
    solution: "Inventario inteligente en tiempo real para conectar a compradores con su auto ideal.",
    logo: "/logos/JPCars_logo.png",
    video: "/videos/jpcars.mp4",
    customScale: "scale-[0.8]",
    link: "https://jpcars.mx"
  },
  {
    title: "Univ. Justo Sierra",
    category: "Sistema Educativo",
    solution: "Ecosistema digital de anuarios escolares que centraliza la administración y mejora la experiencia de miles de alumnos.",
    logo: "/logos/js_logo.jpg",
    video: "/videos/justosierra.mp4",
    customScale: "scale-[0.6]",
    link: null
  },
  {
    title: "MAROS Technologies",
    category: "Arquitectura Digital",
    solution: "Nuestra propia infraestructura diseñada para ofrecer máxima velocidad y autonomía total.",
    logo: "/logos/MAROS_LOGO_SINFONDO.PNG",
    video: "/videos/marostechnologies.mp4",
    customScale: "scale-[0.7]",
    link: null 
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Se eliminó el useEffect que manejaba el auto-play (setInterval)

  return (
    <section id="portafolio" className="relative pt-8 pb-16 md:pb-24 bg-white text-[#023468] -mt-6 md:-mt-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* CABECERA */}
        <div className="mb-6 md:mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-[#023468]"></span>
            <span className="text-[8px] md:text-[9px] tracking-[0.4em] uppercase font-black opacity-40">Proyectos</span>
          </div>
          <h2 className="font-display text-2xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
            CASOS <span className="text-[#023468]/20 not-italic">DE ÉXITO.</span>
          </h2>
        </div>

        {/* CARRUSEL */}
        <div className="relative border-t border-[#023468]/10 pt-6 md:pt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center"
            >
              {/* Lado Izquierdo: Cuadro de Video con Logo Abajo Izquierda */}
              <div className="relative h-[250px] md:h-[400px] bg-black overflow-hidden shadow-2xl rounded-sm">
                
                {/* Video Layer */}
                <AnimatePresence mode="wait">
                  <motion.video
                    key={`video-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={projects[index].video} type="video/mp4" />
                  </motion.video>
                </AnimatePresence>

                {/* Overlay oscuro inferior para resaltar el logo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-0" />

                {/* LOGO: Posicionado abajo a la izquierda y más chico */}
                <div className="absolute bottom-4 left-6 z-10 flex items-end">
                  <motion.img 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    src={projects[index].logo} 
                    alt={projects[index].title} 
                    className={`w-auto h-8 md:h-12 object-contain drop-shadow-lg ${projects[index].customScale}`}
                  />
                </div>
                
                {projects[index].link && (
                  <a 
                    href={projects[index].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-[#023468] transition-all z-20"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Lado Derecho: Info */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 mb-3 border-l-2 border-[#023468] pl-3">
                  {projects[index].category}
                </span>
                <h3 className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  {projects[index].title}
                </h3>
                <p className="text-base md:text-xl font-light leading-snug text-[#023468]/80 max-w-md mb-8">
                  {projects[index].solution}
                </p>

                {/* Controles */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={prevStep} 
                      className="p-4 border border-[#023468]/10 hover:bg-[#023468] hover:text-white transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextStep} 
                      className="p-4 border border-[#023468]/10 hover:bg-[#023468] hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="flex gap-1 ml-4">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-[2px] transition-all duration-500 ${i === index ? "w-10 bg-[#023468]" : "w-4 bg-[#023468]/10 hover:bg-[#023468]/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;