import { useState } from "react";
import { X } from "lucide-react";

const DiscountBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky bottom-0 z-50 bg-gradient-to-r from-background via-card to-background py-3 px-4 text-center border-t border-accent/20">
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap">
        <p className="text-sm md:text-base font-medium text-foreground tracking-wide">
          <span className="font-bold text-accent">15% de descuento exclusivo</span> para primeras solicitudes — Código:{" "}
          <span className="font-bold tracking-widest border border-accent/30 px-2 py-0.5 rounded text-accent">
            JAMON15
          </span>
        </p>
        <a
          href="/productos"
          className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded hover:bg-accent/90 transition-all duration-300"
        >
          Ver tienda
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Cerrar banner"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default DiscountBanner;