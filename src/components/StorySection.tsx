import storyImg from "@/assets/story-portrait.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="historia" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-semibold"
          >
            Sobre nosotros
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Nuestra Historia
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={storyImg}
                alt="Marcos Corvera, cortador profesional de jamón"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-primary/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-7"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              El corte de jamón es mucho más que una técnica. Es respeto, precisión y pasión por una tradición única.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Soy Marcos Corvera, cortador profesional de jamón, dedicado a ofrecer un servicio donde cada detalle importa.
            </p>
            <p className="text-muted-foreground leading-relaxed hidden md:block">
              Cada pieza se trabaja con el objetivo de ofrecer una experiencia a la altura de quienes valoran la excelencia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi compromiso es claro: respetar el producto, cuidar cada detalle y ofrecer siempre un servicio profesional premium.
            </p>
            <div className="pt-6">
              <div className="gold-line-left" />
              <p className="mt-5 font-serif text-xl text-foreground font-semibold uppercase tracking-wider">
                Marcos Corvera
              </p>
              <p className="font-serif text-sm text-primary italic mt-1">
                Un Corte Original
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
