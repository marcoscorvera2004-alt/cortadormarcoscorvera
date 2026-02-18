import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [rejected, setRejected] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "rejected") {
      setRejected(true);
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    setRejected(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
    setRejected(true);
  };

  // Blocked screen when cookies are rejected
  if (rejected) {
    return (
      <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-6">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Acceso restringido
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Has rechazado el uso de cookies. Para acceder a este sitio web es necesario aceptar nuestra política de cookies, ya que utilizamos cookies esenciales para el funcionamiento del sitio.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Puedes consultar nuestra{" "}
            <Link to="/politica-cookies" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
              Política de Cookies
            </Link>{" "}
            para más información.
          </p>
          <button
            onClick={accept}
            className="px-8 py-3 text-sm bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/80 transition-colors"
          >
            Aceptar cookies y continuar
          </button>
        </div>
      </div>
    );
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-card border-t border-border shadow-2xl">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 max-w-5xl px-6 py-8 md:py-10 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Política de Cookies
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Utilizamos cookies propias esenciales para el correcto funcionamiento de este sitio web. Estas cookies son necesarias para la navegación y no recopilan información personal. Consulta nuestra{" "}
            <Link to="/politica-cookies" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
              Política de Cookies
            </Link>{" "}
            para más información.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-6 py-3 text-sm border border-border rounded text-muted-foreground hover:text-foreground transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-6 py-3 text-sm bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/80 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
