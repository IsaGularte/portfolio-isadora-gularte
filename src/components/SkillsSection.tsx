import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";

const skills = {
  frontend: {
    title: "Front-end",
    icon: Code2,
    color: "neon-cyan",
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Bootstrap", level: 88 },
      { name: "FlutterFlow", level: 80 },
      { name: "APIs REST", level: 92 },
    ],
  },
  backend: {
    title: "Back-end",
    icon: Database,
    color: "neon-magenta",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 85 },
      { name: "MySQL", level: 87 },
      { name: "Web Scraping", level: 92 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
  design: {
    title: "Design",
    icon: Palette,
    color: "neon-purple",
    items: [
      { name: "Figma", level: 90 },
      { name: "UX/UI", level: 88 },
      { name: "Prototipagem", level: 85 },
    ],
  },
};

const SkillsSection = () => {
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
          Arsenal Tecnológico
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-8 h-8 text-${category.color}`} />
                  <h3 className={`text-2xl font-bold font-syncopate text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-inter text-foreground/90">{skill.name}</span>
                        <span className={`text-xs font-bold text-${category.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${
                            category.color === "neon-cyan"
                              ? "from-neon-cyan to-neon-magenta"
                              : category.color === "neon-magenta"
                              ? "from-neon-magenta to-neon-purple"
                              : "from-neon-purple to-neon-cyan"
                          } rounded-full`}
                          style={{ boxShadow: `0 0 10px hsl(var(--${category.color}) / 0.6)` }}
                        />
                      </div>
                    </motion.div>
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
