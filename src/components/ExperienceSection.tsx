import { motion } from "framer-motion";
import { Building2, Code2, Search, Headphones } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Desenvolvo sistemas internos utilizando Oracle APEX, aplicando PL/SQL para regras de negócio e consultas ao banco de dados, além de JavaScript, HTML e CSS para construir e customizar as telas e a experiência do usuário dentro da plataforma.",
    tools: ["Oracle APEX", "PL/SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Search,
    title: "QA",
    description:
      "Atuo também em Quality Assurance, analisando funcionalidades antes da entrega, realizando testes para identificar falhas e inconsistências, e garantindo que os sistemas atendam aos requisitos e à qualidade esperada antes de chegarem ao cliente.",
    tools: ["Notion"],
  },
  {
    icon: Headphones,
    title: "Suporte e Implantação",
    description:
      "Faço parte da equipe de implantação, viajando até empresas clientes para implantar o sistema e realizar treinamentos. Também participo de reuniões com novos clientes para alinhar fluxos e entender o cenário de cada um, aplicando comunicação, liderança e postura profissional.",
    tools: ["Planilhas", "Trabalho em equipe"],
  },
];

const ExperienceSection = () => {
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
          Experiência Profissional
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card-glow p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-foreground font-display">
                Grupo W2A Brasil
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Desenvolvimento · QA · Suporte e Implantação
              </p>
            </div>
            <span className="px-3 py-1 text-[0.65rem] sm:text-xs bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-medium w-fit">
              Atual
            </span>
          </div>

          <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed text-justify">
            Atualmente trabalho no Grupo W2A Brasil, onde atuo simultaneamente em três frentes:
            desenvolvimento de sistemas com Oracle APEX (PL/SQL, JavaScript, HTML e CSS), QA —
            aplicando análise e testes para garantir a qualidade das entregas — e suporte e
            implantação, área em que coloco em prática minha comunicação, liderança e postura
            profissional no dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-glow p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground font-display">
                    {skill.title}
                  </h4>
                </div>
                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-[0.65rem] sm:text-xs bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-medium"
                    >
                      {tool}
                    </span>
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

export default ExperienceSection;
