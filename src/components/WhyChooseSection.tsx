import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Award, Gem, Users, Heart, Shield } from "lucide-react";

const features = [
  { icon: Award, title: "Servicio profesional especializado", description: "Años de experiencia en los eventos más exigentes del panorama nacional." },
  { icon: Scissors, title: "Corte artesanal a cuchillo", description: "Cada loncha cortada con precisión milimétrica, respetando la tradición centenaria." },
  { icon: Gem, title: "Presentación elegante y cuidada", description: "Una puesta en escena que eleva la experiencia gastronómica a otro nivel." },
  { icon: Users, title: "Experiencia en eventos privados", description: "Bodas, celebraciones corporativas y reuniones exclusivas de alto nivel." },
  { icon: Heart, title: "Atención personalizada", description: "Cada evento es único. Adaptamos el servicio a sus necesidades específicas." },
  { icon: Shield, title: "Máximo respeto por el producto", description: "Solo trabajamos con piezas de la más alta calidad, tratadas con excelencia." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-semibold"
          >
            Excelencia profesional
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Por qué elegir <span className="text-primary">Corvera</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group bg-background border border-border p-8 hover:border-primary/30 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                <feature.icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
