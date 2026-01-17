import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5551980337058",
    gradient: "from-neon-cyan to-neon-magenta",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/IsaGularte",
    gradient: "from-neon-cyan to-neon-purple",
  },
  {
    icon:Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isadora-gularte-a063b4258/",
    gradient: "from-neon-cyan to-neon-magenta",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:isagularte09@gmail.com",
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
          Entre em contato por meio das plataformas abaixo
        </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon

          return (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex w-full h-20
                  items-center justify-center gap-3
                  rounded-md px-8
                  border-2 border-neon-cyan/30
                  text-base font-semibold
                  hover:border-neon-cyan
                  hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]
                  transition-all duration-300
                "
              >
                <Icon
                  className="
                    w-6 h-6 shrink-0
                    opacity-0
                    group-hover:opacity-100
                    text-neon-cyan
                    group-hover:text-white
                    transition-all duration-300
                  "
                />
                <span
                  className={`
                    bg-gradient-to-r ${contact.gradient}
                    bg-clip-text text-transparent
                    group-hover:bg-none
                    group-hover:text-white
                    transition-all duration-300
                  `}
                >
                  {contact.label}
                </span>
              </a>
            </motion.div>
          )
        })}
      </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-sm text-muted-foreground space-y-2"
        >
          <p><span className="text-neon-cyan font-semibold">Isadora Gularte</span></p>
          <p className="text-xs">Portfólio 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;