import { X, Send } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema } from "@/lib/form-validation";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
  title?: string;
  showPromo?: boolean;
}

const ContactFormModal = ({ isOpen, onClose, prefilledMessage = "", title = "Solicitar información", showPromo = false }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: prefilledMessage,
    promo: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync prefilled message when it changes (e.g. different service selected)
  const prevPrefilledRef = React.useRef(prefilledMessage);
  React.useEffect(() => {
    if (prefilledMessage !== prevPrefilledRef.current) {
      setForm(f => ({ ...f, message: prefilledMessage }));
      prevPrefilledRef.current = prefilledMessage;
    }
  }, [prefilledMessage]);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bot detected

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xbdaolvr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          phone: result.data.phone || undefined,
          email: result.data.email,
          message: result.data.message,
          promo_code: result.data.promo || undefined,
          form_type: title,
        }),
      });
      if (!res.ok) throw new Error("Error");
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", phone: "", email: "", message: "", promo: "" });
        onClose();
      }, 2000);
    } catch {
      alert("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative glass-card rounded-lg w-full max-w-md p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{title}</h3>
            <div className="gold-line-left mb-6" />

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot - hidden from real users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <input
                  type="text"
                  placeholder="Nombre y apellidos"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  required
                  maxLength={30}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Cuéntenos sobre su evento o consulta..."
                  rows={3}
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500 resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              {showPromo && (
                <input
                  type="text"
                  placeholder="Código promocional (opcional)"
                  value={form.promo}
                  onChange={(e) => setForm({ ...form, promo: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
                />
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest py-4 rounded hover:bg-accent/90 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                {sent ? "¡Enviado con éxito!" : sending ? "Enviando..." : "Enviar solicitud"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;