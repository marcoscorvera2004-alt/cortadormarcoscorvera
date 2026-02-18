import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Boda en Finca La Concepción",
    text: "Marcos hizo de nuestro cóctel de boda una experiencia inolvidable. Cada invitado quedó impresionado con la presentación y la calidad del corte. Un servicio excepcional.",
    rating: 5,
  },
  {
    name: "Javier Rodríguez",
    role: "Evento corporativo",
    text: "Contratamos a Marcos para nuestro evento de empresa y el resultado fue espectacular. Profesionalidad, elegancia y un producto de primera. Repetiremos sin duda.",
    rating: 5,
  },
  {
    name: "Ana Martín",
    role: "Celebración privada",
    text: "La atención al detalle y el nivel de profesionalidad de Marcos son incomparables. Nuestros invitados no dejaban de elogiar tanto el jamón como la experiencia completa.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-accent font-semibold"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Clientes que han <span className="text-gradient">confiado</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              className="glass-card rounded-lg p-8 hover:border-accent/30 transition-all duration-700"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border/50 pt-5">
                <p className="font-serif text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;