import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5551980337058",
    color: "neon-cyan",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:isagularte09@gmail.com",
    color: "neon-magenta",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/isa_gularte27",
    color: "neon-purple",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/IsaGularte",
    color: "neon-cyan",
  },
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative z-10 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-center mb-8 text-gradient-neon"
        >
          Conexão
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg font-inter text-foreground/80 mb-12"
        >
          Vamos criar algo incrível juntos?
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`w-full h-20 text-lg font-syncopate border-2 border-${contact.color} text-${contact.color} hover:bg-${contact.color}/10 transition-all duration-300`}
                  asChild
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <Icon className="w-6 h-6" />
                    {contact.label}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-inter text-sm text-muted-foreground"
        >
          <p>Desenvolvido com 💜 por Isadora Gularte</p>
          <p className="mt-2 text-xs">Portfólio 2025 | Synthwave Edition</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
