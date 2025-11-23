import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Instagram, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "Chamar no Whats",
    href: "https://wa.me/5551980337058",
    gradient: "from-neon-cyan to-neon-magenta",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:isagularte09@gmail.com",
    gradient: "from-neon-magenta to-neon-purple",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/isa_gularte27",
    gradient: "from-neon-purple to-neon-cyan",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/IsaGularte",
    gradient: "from-neon-cyan to-neon-purple",
  },
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative z-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-8 text-gradient-vibrant"
        >
          Vamos Conectar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-base text-muted-foreground mb-12"
        >
          Entre em contato para colaborações e projetos
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`w-full h-20 text-base font-semibold border-2 bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300`}
                  asChild
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Icon className={`w-6 h-6 bg-gradient-to-r ${contact.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                    <span className={`bg-gradient-to-r ${contact.gradient} bg-clip-text`}>
                      {contact.label}
                    </span>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-sm text-muted-foreground space-y-2"
        >
          <p>Desenvolvido por <span className="text-neon-cyan font-semibold">Isadora Gularte</span></p>
          <p className="text-xs">Portfólio 2025</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
