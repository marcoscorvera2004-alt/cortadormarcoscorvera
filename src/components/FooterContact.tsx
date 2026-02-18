import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactSchema } from "@/lib/form-validation";

const WHATSAPP_NUMBER = "34676703034";
const EMAIL = "mcorveramadrono@gmail.com";

const FooterContact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          form_type: "contact",
        }),
      });
      if (!res.ok) throw new Error("Error");
      setSent(true);
      setForm({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch {
      alert("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <footer id="contacto" className="section-padding bg-background border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-[200px]" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-accent font-semibold"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4"
          >
            Hablemos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-line mt-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Solicite información sin compromiso y descubra cómo convertir su evento en una experiencia única.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              ¿Tiene un evento especial? ¿Busca un servicio de corte de jamón profesional y exclusivo? Contacte con nosotros y le atenderemos de forma personalizada.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-500 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-sm">{EMAIL}</span>
              </a>

              <a
                href="tel:+34676703034"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-500 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-sm">676 703 034</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 bg-accent/10 text-accent border border-accent/30 px-6 py-3 rounded font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Honeypot */}
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
                placeholder="Nombre"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card/50 border border-border rounded px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Teléfono"
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-card/50 border border-border rounded px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
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
                className="w-full bg-card/50 border border-border rounded px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Cuéntenos sobre su evento..."
                rows={4}
                required
                maxLength={5000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card/50 border border-border rounded px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-500 resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground uppercase text-sm font-bold tracking-widest py-4 rounded hover:bg-accent/90 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={16} />
              {sent ? "¡Enviado con éxito!" : sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </motion.form>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center space-y-2">
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            © {new Date().getFullYear()} Marcos Corvera — Cortador Profesional de Jamón. Todos los derechos reservados.
          </p>
          <a
            href="/politica-cookies"
            className="text-xs text-muted-foreground/50 hover:text-accent transition-colors duration-300 underline underline-offset-2"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;