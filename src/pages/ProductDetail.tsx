import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "@/data/content";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [modalOpen, setModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Producto no encontrado</h1>
          <Link to="/" className="text-accent hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Volver a tienda
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-lg overflow-hidden bg-card"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
              <p className="text-accent font-semibold text-2xl tracking-wide">{product.price}</p>
              <div className="gold-line-left" />
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest py-5 rounded hover:bg-accent/90 transition-all duration-500 flex items-center justify-center gap-3 mt-8"
              >
                <ShoppingBag size={20} />
                Solicitar producto
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar producto"
        prefilledMessage={`Hola, me interesa este producto: ${product.name}`}
      />
    </>
  );
};

export default ProductDetail;