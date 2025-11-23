import { motion } from "framer-motion";
import { Calendar, Users, Award } from "lucide-react";

const events = [
  {
    title: "HackaTime",
    icon: Award,
    description: "Participação em hackathon de desenvolvimento",
    color: "neon-cyan",
  },
  {
    title: "FEBIC",
    icon: Calendar,
    description: "Feira Brasileira de Iniciação Científica",
    color: "neon-magenta",
  },
  {
    title: "Devs do Paranhana",
    icon: Users,
    description: "Comunidade de desenvolvedores da região",
    color: "neon-purple",
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-center mb-16 text-gradient-neon"
        >
          Minha Jornada
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple opacity-50" />

          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="glass-card-glow p-6 text-center h-full hover:shadow-2xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-${event.color}/20 border-${event.color}`}>
                    <Icon className={`w-8 h-8 text-${event.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold font-syncopate mb-3 text-${event.color}`}>
                    {event.title}
                  </h3>
                  <p className="text-foreground/80 font-inter">{event.description}</p>
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
