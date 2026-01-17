import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";

const techStack = {
  frontend: {
    title: "Front-end",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "FlutterFlow"],
  },
  backend: {
    title: "Back-end",
    icon: Database,
    items: ["Node.js", "Express", "Web Scraping", "Selenium", "Java", "JSON", "Git/GitHub", "Gitflow", "Python", "MySQL", "APIs REST"],
  },
  design: {
    title: "Design",
    icon: Palette,
    items: ["Prototipação", "Figma", "UX/UI"],
  },
};

const TechStackSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-4 text-gradient-vibrant"
        >
          Tecnologias e Ferramentas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 text-sm sm:text-lg"
        >
          Tech Stack
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([key, category], categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-glow p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-xs sm:text-sm bg-muted/50 border border-border rounded-lg text-foreground/90 hover:border-neon-cyan/50 hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
