import { Link } from "react-router-dom";
import { products } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const AllProducts = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#tienda" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm mb-8">
              <ArrowLeft size={16} />
              Volver a inicio
            </Link>
          </motion.div>

          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">
              Catálogo completo
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4">
              Nuestros Productos
            </h1>
            <div className="gold-line mt-8" />
          </div>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Selección de productos elaborados mediante corte artesanal a cuchillo, respetando la tradición y garantizando la máxima calidad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
              >
                <Link
                  to={`/producto/${product.id}`}
                  className="group glass-card rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-700 block hover:-translate-y-2"
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
                    <p className="text-muted-foreground text-xs mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
                    <span className="inline-block mt-3 text-xs uppercase tracking-widest text-accent/70 font-semibold group-hover:tracking-[0.4em] group-hover:text-accent transition-all duration-500">
                      Ver producto →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProducts;