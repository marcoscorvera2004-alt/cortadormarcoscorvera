import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "@/data/content";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "34676703034";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-accent hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Hola, me interesa el servicio: ${service.name}`);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Volver a servicios
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug">{service.name}</h1>
              <p className="text-accent font-semibold text-lg tracking-wide">{service.price}</p>
              <div className="gold-line-left" />
              <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
              <p className="text-muted-foreground/70 text-sm italic">{service.premiumNote}</p>

              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-4 rounded font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
                >
                  <MessageCircle size={18} />
                  Contactar por WhatsApp
                </a>
                <a
                  href={`mailto:mcorveramadrono@gmail.com?subject=${encodeURIComponent(`Consulta servicio: ${service.name}`)}`}
                  className="flex items-center justify-center gap-2 glass-card text-foreground px-5 py-4 rounded font-semibold text-sm hover:border-accent/30 transition-all duration-500"
                >
                  <Mail size={18} />
                  Contactar por email
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest py-4 rounded hover:bg-accent/90 transition-all duration-500"
                >
                  Solicitar servicio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Solicitar: ${service.name}`}
        prefilledMessage={`Hola, me interesa el servicio: ${service.name}`}
      />
    </>
  );
};

export default ServiceDetail;