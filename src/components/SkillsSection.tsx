import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";

const skills = {
  frontend: {
    title: "Front-end",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "FlutterFlow", "APIs REST"],
  },
  backend: {
    title: "Back-end",
    icon: Database,
    items: ["Node.js", "Express", "Web Scraping", "Selenium", "Git/GitHub", "Python", "MySQL"],
  },
  design: {
    title: "Design",
    icon: Palette,
    items: ["Figma", "UX/UI", "Prototipagem"],
  },
};

const SkillsSection = () => {
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
          Tecnologias
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category], categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-space-cyan/10 border border-space-cyan/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-space-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm bg-muted/50 border border-border rounded-md text-foreground/80 hover:border-space-cyan/50 hover:text-space-cyan transition-all duration-300 cursor-default"
                    >
                      {skill}
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

export default SkillsSection;
