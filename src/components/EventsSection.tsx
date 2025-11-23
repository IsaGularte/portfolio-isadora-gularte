import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const events = [
  {
    title: "HackaTime",
    description: "Participação em hackathon de desenvolvimento",
  },
  {
    title: "FEBIC",
    description: "Feira Brasileira de Iniciação Científica",
  },
  {
    title: "Devs do Paranhana",
    description: "Comunidade de desenvolvedores da região",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-16 text-gradient-vibrant"
        >
          Eventos e Participações
        </motion.h2>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="glass-card-glow p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
