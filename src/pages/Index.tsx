import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWebsite from "@/components/WhyWebsite";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Añadimos IDs a cada sección para que el Navbar pueda "anclarse" */}
      <section id="inicio">
        <Hero />
      </section>

      <section id="whywebsite">
        <WhyWebsite />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="servicios">
        <Services />
      </section>

      <section id="methodology">
        <Methodology />
      </section>

      <section id="technologies">
        <Technologies />
      </section>

      <section id="portafolio">
        <Portfolio />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="precios">
        <Pricing />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Index;