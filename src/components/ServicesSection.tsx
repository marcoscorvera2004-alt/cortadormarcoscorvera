import { services } from "@/data/content";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Info, X, Send } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  const handleRequestService = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-accent font-semibold"
          >
            Servicios exclusivos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Servicios Profesionales
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="group glass-card rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-700"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 leading-snug">
                  {service.name}
                </h3>
                <p className="text-accent font-semibold mt-3 text-sm tracking-wide">{service.price}</p>
                
                <button
                  onClick={() => setInfoOpen(service.id)}
                  className="mt-5 w-full flex items-center justify-center gap-2 border border-border text-muted-foreground uppercase text-xs font-bold tracking-widest py-3 rounded hover:border-accent/50 hover:text-accent transition-all duration-500"
                >
                  <Info size={14} />
                  Más información
                </button>
                <button
                  onClick={() => handleRequestService(service.name)}
                  className="mt-3 w-full bg-accent/10 text-accent uppercase text-xs font-bold tracking-widest py-3 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-500"
                >
                  Solicitar servicio
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {infoOpen && (() => {
          const service = services.find(s => s.id === infoOpen);
          if (!service) return null;
          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/85 backdrop-blur-md"
                onClick={() => setInfoOpen(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative glass-card rounded-lg w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setInfoOpen(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-accent font-semibold text-sm tracking-wide mb-4">{service.price}</p>
                <div className="gold-line-left mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">{service.fullDescription}</p>
                <p className="text-muted-foreground/70 text-sm italic mb-6">{service.premiumNote}</p>
                <button
                  onClick={() => {
                    setInfoOpen(null);
                    handleRequestService(service.name);
                  }}
                  className="w-full bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest py-4 rounded hover:bg-accent/90 transition-all duration-500 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Solicitar servicio
                </button>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Solicitar: ${selectedService}`}
        prefilledMessage={`Hola, me interesa el servicio: ${selectedService}`}
        showPromo
      />
    </section>
  );
};

export default ServicesSection;
