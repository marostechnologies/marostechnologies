import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Instagram, Phone, ArrowUpRight, Terminal, Globe } from "lucide-react";

const contactNodes = [
  {
    icon: Mail,
    label: "Email Protocol",
    value: "marostechnologies@gmail.com",
    href: "mailto:marostechnologies@gmail.com",
    id: "MAIL_01"
  },
  {
    icon: Instagram,
    label: "Social Core",
    value: "@marostechnologies",
    href: "https://www.instagram.com/marostechnology?igsh=bXljbTl0NTN5OWMx&utm_source=qr",
    id: "INST_02"
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "+52 56 5558 2075",
    href: "https://wa.me/525555582075",
    id: "COMM_03"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contacto" className="py-20 md:py-40 bg-[#023468] text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative">
        
        {/* CABECERA DE INGENIERÍA */}
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-white/30"></span>
              <span className="text-[10px] tracking-[0.6em] uppercase font-black text-white/40 italic">
                Connection established
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
              HABLEMOS DE <br />
              <span className="text-white/20 not-italic text-4xl md:text-7xl">TU IDEA.</span>
            </h2>
          </motion.div>
        </div>

        {/* NODOS DE CONTACTO: Grid 2 en móvil, 3 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/10">
          {contactNodes.map((node, i) => (
            <motion.a
              key={node.id}
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 md:p-16 border-r border-b border-white/10 hover:bg-white transition-all duration-500 flex flex-col justify-between aspect-square md:aspect-auto ${
                i === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[8px] md:text-[10px] text-white/30 group-hover:text-[#023468] transition-colors">
                  {node.id} // 2026
                </span>
                <ArrowUpRight size={18} className="text-white/20 group-hover:text-[#023468] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="mt-12 md:mt-24">
                <node.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#023468] mb-6 transition-colors" strokeWidth={1} />
                <span className="block text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/40 group-hover:text-[#023468]/40 mb-2 transition-colors">
                  {node.label}
                </span>
                <p className="text-xs md:text-xl font-mono tracking-tighter text-white group-hover:text-[#023468] break-all leading-tight transition-colors">
                  {node.value}
                </p>
              </div>

              {/* Efecto de línea de carga en hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#023468] w-0 group-hover:w-full transition-all duration-700" />
            </motion.a>
          ))}
        </div>

        {/* Elemento Decorativo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Globe size={600} strokeWidth={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Contact;