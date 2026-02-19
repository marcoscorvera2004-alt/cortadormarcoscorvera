import { useState } from "react";
import { X } from "lucide-react";

const DiscountBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky bottom-0 z-50 bg-foreground py-3 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-4 flex-wrap">
        <p className="text-sm md:text-base font-medium text-background tracking-wide">
          <span className="font-bold">15% de descuento exclusivo</span> para primeras solicitudes — Código:{" "}
          <span className="font-bold tracking-widest border border-background/30 px-2 py-0.5 text-background">
            JAMON15
          </span>
        </p>
        <a
          href="/productos"
          className="inline-block bg-background text-foreground text-xs font-bold uppercase tracking-wider px-5 py-1.5 hover:bg-background/90 transition-all duration-300"
        >
          Ver tienda
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-background/60 hover:text-background transition-colors"
        aria-label="Cerrar banner"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default DiscountBanner;
