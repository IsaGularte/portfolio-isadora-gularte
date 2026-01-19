import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import pharmasearchVideo from "@/../public/videos/pharmasearch-preview.mp4";

const projects = [
  {
    title: "PharmaSearch",
    description: "Trabalho de Conclusão de Curso: Aplicativo para comparação e geolocalização de preços de medicamentos na cidade de Taquara e Parobé. Realiza Web scraping (São João, Maxxi e Panvel), possui API própria em Python e banco de dados Mongo Atlas. No desenvolvimento do projeto adquiri experiência com ferramentas e tecnologias, além de valores como: trabalho em equipe, comunicação e gestão de tempo.",
    tags: ["Python", "Flesk", "Selenium", "Web Scraping"],
    repo: "https://github.com/Bruno-fridrich/PharmaSearch.git",
    video: "/videos/pharmasearch-preview.mp4",
  },
  {
    title: "FitAI Pro",
    description: "Aplicativo com fluxo de telas completo, chat IA assistente e treinos personalizados detalhados de acordo com o objetivo do usuário, como também cronômetro e registro de treino. É possível documentar os alimentos consumidos durante o dia, definir metas, como o consumo de proteínas, e monitorar a evolução do usuário. A ideia surgiu quando percebi a dor de pessoas que não tem suporte para auxiliar na sua saúde física.",
    tags: ["IA", "UX", "Wearables"],
    repo: "https://github.com/IsaGularte/fitai-pro-elevate.git",
    video: "/videos/Fit-AI-preview.mp4",
  },
  {
    title: "Jogo Batalha Naval",
    description: "Jogo desenvolvido em Java (Console) com interface intuitiva. Modos Jogador vs Jogador e Jogador vs Computador. Possui alocação manual ou automática de navios e validação robusta de jogadas e mapas. Trabalho avaliativo da disciplina de Programação Orientada a Objetos (POO) no curso técnico em Informática. O projeto reforçou significativamente meus conhecimentos em lógica de programação e trabalho em equipe.",
    tags: ["Java", "Lógica", "Console"],
    repo: "https://github.com/IsaGularte/batalhaNaval.git",
    video: "/videos/batalha-naval-preview.mp4",
  },
];

const ProjectsSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center lg:py-4 mb-16 text-gradient-vibrant"
        >
          Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-glow p-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-vibrant mb-3 font-display">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed text-xs sm:text-sm text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[0.65rem] sm:text-xs bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="sm:flex-1 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan btn-glow-cyan font-medium"
                  asChild
                >
                  <a href={project.repo ?? "#"} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Repositório
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                    className={`sm:flex-1 border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 hover:border-neon-magenta btn-glow-magenta font-medium ${!pharmasearchVideo ? "opacity-60 cursor-not-allowed" : ""}`}
                  onClick={() => project.video && setOpenVideo(project.video)}
                  disabled={!project.video}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {openVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpenVideo(null)} />
            <div className="relative bg-background rounded-lg overflow-hidden max-w-3xl w-full">
              <button
                aria-label="Fechar pré-visualização"
                className="absolute top-4 right-4 z-10 p-2 rounded-md bg-black/50 hover:bg-black/80 text-white transition-colors"
                onClick={() => setOpenVideo(null)}
              >
                <X size={24} />
              </button>
              <video src={openVideo ?? undefined} controls autoPlay className="w-full h-auto max-h-[80vh] bg-black" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
