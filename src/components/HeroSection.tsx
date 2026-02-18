import { motion } from "framer-motion";
import heroImg from "@/assets/hero-jamon.jpg";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Corte profesional de jamón ibérico en evento elegante"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-10"
        />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.4em] text-accent font-semibold mb-6"
        >
          Marcos Corvera
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
        >
          Servicio profesional de corte de jamón
          <br />
          <span className="text-gradient">para eventos exclusivos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Ofrezco un servicio profesional de corte de jamón orientado a eventos, celebraciones y clientes que buscan algo más que un producto: buscan una experiencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest px-10 py-4 rounded hover:bg-accent/90 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20"
          >
            Solicitar información
          </button>
          <a
            href="#servicios"
            className="border border-foreground/20 text-foreground uppercase text-sm font-semibold tracking-widest px-10 py-4 rounded hover:border-accent hover:text-accent transition-all duration-500"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 font-serif text-lg md:text-xl italic text-accent/80"
        >
          "No es solo jamón. Es una experiencia."
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-bounce" />
      </motion.div>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar información"
      />
    </section>
  );
};

export default HeroSection;