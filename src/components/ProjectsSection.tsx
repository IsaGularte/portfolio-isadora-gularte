import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PharmaSearch",
    description: "App/API de comparação de preços de medicamentos com web scraping usando Selenium. Backend em Node.js/Express com processamento JSON. Inclui Plano de Negócios completo.",
    tags: ["Node.js", "Express", "Selenium", "Web Scraping"],
  },
  {
    title: "MarketMind",
    description: "Simulador de Comportamento de Consumidores com IA. Análise de cenários de mercado (pessimista/otimista) e análise financeira detalhada para tomada de decisões estratégicas.",
    tags: ["IA", "Análise Financeira", "Simulação"],
  },
  {
    title: "App Fitness",
    description: "Fluxo de telas completo para aplicativo de fitness com chat assistente inteligente, integração com smartwatch e foco intenso em UX/UI para máxima usabilidade.",
    tags: ["UX/UI", "Figma", "FlutterFlow", "Mobile"],
  },
  {
    title: "Batalha Naval",
    description: "Jogo clássico em Java (Console). Jogador vs PC com alocação automática de navios e validação completa de mapas. Sistema de turnos e inteligência artificial básica.",
    tags: ["Java", "Console", "Game Logic"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-16 text-foreground"
        >
          Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:border-space-cyan/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-muted/50 border border-border rounded-full text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-space-cyan/50 text-space-cyan hover:bg-space-cyan/10 hover:border-space-cyan"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-space-purple/50 text-space-purple hover:bg-space-purple/10 hover:border-space-purple"
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
