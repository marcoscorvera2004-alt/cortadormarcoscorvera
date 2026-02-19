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
    if (honeypot) return;

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
    <footer id="contacto" className="section-padding bg-foreground text-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-background/60 font-semibold"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-background mt-4"
          >
            Hablemos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-px mx-auto mt-8 bg-background/20"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-background/60 max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Solicite información sin compromiso y descubra cómo convertir su evento en una experiencia única.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-background/60 leading-relaxed">
              ¿Tiene un evento especial? ¿Busca un servicio de corte de jamón profesional y exclusivo? Contacte con nosotros y le atenderemos de forma personalizada.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-500 group"
              >
                <div className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-500">
                  <Mail size={18} className="text-background" />
                </div>
                <span className="text-sm">{EMAIL}</span>
              </a>

              <a
                href="tel:+34676703034"
                className="flex items-center gap-4 text-background/60 hover:text-background transition-colors duration-500 group"
              >
                <div className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-500">
                  <Phone size={18} className="text-background" />
                </div>
                <span className="text-sm">676 703 034</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 bg-background/10 text-background border border-background/20 px-6 py-3 font-semibold text-sm hover:bg-background/20 transition-all duration-500"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
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
                className="w-full bg-background/5 border border-background/20 px-5 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors duration-500"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Teléfono"
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background/5 border border-background/20 px-5 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors duration-500"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/5 border border-background/20 px-5 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors duration-500"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Cuéntenos sobre su evento..."
                rows={4}
                required
                maxLength={5000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/5 border border-background/20 px-5 py-4 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors duration-500 resize-none"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-background text-foreground uppercase text-sm font-bold tracking-widest py-4 hover:bg-background/90 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={16} />
              {sent ? "¡Enviado con éxito!" : sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </motion.form>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 text-center space-y-2">
          <p className="text-xs text-background/40 tracking-wide uppercase">
            © {new Date().getFullYear()} Corvera — Un Corte Original. Todos los derechos reservados.
          </p>
          <a
            href="/politica-cookies"
            className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300 underline underline-offset-2"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
