import { Link } from "react-router-dom";
import { products } from "@/data/content";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ShopSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="tienda" className="section-padding bg-secondary">
      <div className="container mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-accent font-semibold"
          >
            Tienda online
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Nuestros Productos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
        </div>

        {/* Premium intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Selección de productos elaborados mediante corte artesanal a cuchillo, respetando la tradición y garantizando la máxima calidad.
        </motion.p>

        {/* Carousel controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 flex"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300 flex"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Products carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/producto/${product.id}`}
                className="group flex-shrink-0 w-72 glass-card rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-700 snap-start hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-500 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-accent font-semibold mt-2 text-sm tracking-wide">{product.price}</p>
                  <span className="inline-block mt-4 text-xs uppercase tracking-widest text-accent/70 font-semibold group-hover:tracking-[0.4em] group-hover:text-accent transition-all duration-500">
                    Ver producto →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Ver más */}
          <div className="flex justify-center mt-10">
            <Link
              to="/productos"
              className="border border-foreground/20 text-foreground uppercase text-xs font-semibold tracking-widest px-8 py-3 rounded hover:border-accent hover:text-accent transition-all duration-500"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;