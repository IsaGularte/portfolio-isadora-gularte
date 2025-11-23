import { motion } from "framer-motion";
import { Calendar, Users, Award } from "lucide-react";

const events = [
  {
    title: "HackaTime",
    icon: Award,
    description: "Participação em hackathon de desenvolvimento",
  },
  {
    title: "FEBIC",
    icon: Calendar,
    description: "Feira Brasileira de Iniciação Científica",
  },
  {
    title: "Devs do Paranhana",
    icon: Users,
    description: "Comunidade de desenvolvedores da região",
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-16 text-foreground"
        >
          Eventos e Participações
        </motion.h2>

        <div className="space-y-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="glass-card p-6 flex items-start gap-4 hover:border-space-cyan/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-space-cyan/10 border border-space-cyan/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-space-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
