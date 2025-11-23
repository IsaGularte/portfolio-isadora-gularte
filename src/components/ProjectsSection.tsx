import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PharmaSearch",
    description: "App/API de comparação de preços de medicamentos com web scraping usando Selenium. Backend em Node.js/Express com processamento JSON. Inclui Plano de Negócios completo.",
    tags: ["Node.js", "Express", "Selenium", "Web Scraping"],
    gradient: "from-neon-cyan to-neon-magenta",
  },
  {
    title: "MarketMind",
    description: "Simulador de Comportamento de Consumidores com IA. Análise de cenários de mercado (pessimista/otimista) e análise financeira detalhada para tomada de decisões estratégicas.",
    tags: ["IA", "Análise Financeira", "Simulação"],
    gradient: "from-neon-magenta to-neon-purple",
  },
  {
    title: "App Fitness",
    description: "Fluxo de telas completo para aplicativo de fitness com chat assistente inteligente, integração com smartwatch e foco intenso em UX/UI para máxima usabilidade.",
    tags: ["UX/UI", "Figma", "FlutterFlow", "Mobile"],
    gradient: "from-neon-purple to-neon-cyan",
  },
  {
    title: "Batalha Naval",
    description: "Jogo clássico em Java (Console). Jogador vs PC com alocação automática de navios e validação completa de mapas. Sistema de turnos e inteligência artificial básica.",
    tags: ["Java", "Console", "Game Logic"],
    gradient: "from-neon-cyan to-neon-purple",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-center mb-16 text-gradient-neon"
        >
          Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-6`} />
              
              <h3 className="text-2xl md:text-3xl font-bold font-orbitron mb-4 text-neon-cyan">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted/30 border border-border/50 rounded-full text-neon-purple font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-inter"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 font-inter"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
