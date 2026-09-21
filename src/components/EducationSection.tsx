import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: School,
    institution: "FACCAT",
    course: "Sistemas de Informação",
    period: "2026 - atual (2º semestre)",
    status: "Atual",
    description:
      "Cursando atualmente Sistemas de Informação na FACCAT.",
  },
  {
    icon: GraduationCap,
    institution: "CIMOL",
    course: "Técnico em Informática",
    period: "2023 - 2025",
    status: "Concluído",
    description:
      "Curso técnico em Informática, onde participei de diversos eventos, como HackaTime e FEBIC, e fiz parte da assessoria da FEINTEC, feira organizada pelo CIMOL.",
  },
  {
    icon: BookOpen,
    institution: "KNN Idiomas",
    course: "Inglês Básico",
    period: "2024 - 2025",
    status: "Concluído",
    description: "Formação em Inglês Básico pela KNN.",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center lg:py-4 mb-16 text-gradient-vibrant"
        >
          Escolaridade
        </motion.h2>

        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-glow p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.course}
                      {item.period && ` · ${item.period}`}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-[0.65rem] sm:text-xs bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-medium w-fit ${
                      item.status === "Atual" ? "" : "opacity-80"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
