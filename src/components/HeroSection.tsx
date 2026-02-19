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
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-px bg-primary/30 mx-auto mb-10"
        />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.5em] text-primary font-semibold mb-6"
        >
          Un Corte Original
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight uppercase"
        >
          Corvera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Servicio profesional de corte de jamón a cuchillo para eventos exclusivos, bodas y celebraciones de alto nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary text-primary-foreground uppercase text-xs font-bold tracking-[0.2em] px-10 py-4 hover:bg-primary/90 transition-all duration-500"
          >
            Solicitar información
          </button>
          <a
            href="#servicios"
            className="border border-foreground/20 text-foreground uppercase text-xs font-semibold tracking-[0.2em] px-10 py-4 hover:border-primary hover:text-primary transition-all duration-500"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 font-serif text-xl md:text-2xl italic text-foreground/60"
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
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-bounce" />
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
