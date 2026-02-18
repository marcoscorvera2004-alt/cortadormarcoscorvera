import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm uppercase tracking-wider">Volver</span>
        </button>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Política de Cookies
        </h1>
        <div className="w-16 h-px bg-accent mb-10" />

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet o móvil) cuando los visita. Se utilizan para que el sitio web funcione correctamente y para recordar sus preferencias.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">¿Qué cookies utilizamos?</h2>
            <p className="mb-4">Este sitio web utiliza exclusivamente cookies técnicas esenciales necesarias para su correcto funcionamiento:</p>
            <div className="glass-card rounded-lg p-5 space-y-3">
              <div>
                <p className="text-foreground font-semibold text-xs uppercase tracking-wider">cookie-consent</p>
                <p className="text-xs mt-1">Almacena su decisión sobre la aceptación de cookies. Sin esta cookie, el banner de cookies aparecería en cada visita. <strong className="text-foreground">Duración:</strong> Persistente (localStorage). <strong className="text-foreground">Tipo:</strong> Técnica esencial.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Cookies de terceros</h2>
            <p>
              Este sitio web no utiliza cookies de terceros, cookies de rastreo, cookies publicitarias ni cookies analíticas. No se recopila información personal a través de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Base legal</h2>
            <p>
              El uso de cookies técnicas esenciales está amparado por el artículo 22.2 de la Ley 34/2002 (LSSI-CE) y el Reglamento General de Protección de Datos (RGPD). Al ser cookies estrictamente necesarias para el funcionamiento del sitio, su uso está legitimado sin necesidad de consentimiento previo, aunque le informamos y solicitamos su aceptación por transparencia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Gestión de cookies</h2>
            <p>
              Puede gestionar las cookies desde la configuración de su navegador. Tenga en cuenta que desactivar las cookies esenciales puede afectar al funcionamiento del sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Contacto</h2>
            <p>
              Si tiene alguna duda sobre nuestra política de cookies, puede contactarnos a través del formulario de contacto disponible en nuestra web.
            </p>
          </section>

          <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border/50">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
