import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PharmaSearch",
    description: "Aplicativo/API para comparação de preços de medicamentos. Realiza Web scraping (São João e Panvel), possui API própria em Node.js + Express com retorno em JSON. Projeto inclui Plano de negócios (Lean Canvas).",
    tags: ["Node.js", "Express", "Selenium", "Web Scraping"],
  },
  {
    title: "MarketMind",
    description: "Simulador de Comportamento de Consumidores com IA. Simula aceitação de produtos no mercado com cenários (pessimista, provável, otimista). Realiza cálculos de receita, custos, margem e lucro, aplicando conceitos de marketing.",
    tags: ["IA", "Análise de Dados", "Lean Canvas"],
  },
  {
    title: "App Fitness",
    description: "Aplicativo com fluxo de telas completo, chat assistente e treinos personalizados. Possui integração com relógio inteligente e foco total na experiência do usuário (UX).",
    tags: ["Mobile", "UX", "Wearables"],
  },
  {
    title: "Jogo Batalha Naval",
    description: "Jogo desenvolvido em Java (Console). Modos Jogador vs Jogador e Jogador vs Computador. Possui alocação manual ou automática de navios e validação robusta de jogadas e mapas.",
    tags: ["Java", "Lógica", "Console"],
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-4 text-gradient-vibrant"
        >
          Projetos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 text-lg"
        >
          Portfólio Detalhado
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-glow p-6"
            >
              <h3 className="text-2xl font-bold text-gradient-vibrant mb-3 font-display">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan btn-glow-cyan font-medium"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Repositório
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 hover:border-neon-magenta btn-glow-magenta font-medium"
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
