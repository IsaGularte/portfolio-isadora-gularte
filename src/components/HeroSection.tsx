import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-neon-cyan avatar-pulse">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Isadora Gularte" />
            <AvatarFallback className="bg-gradient-to-br from-neon-cyan to-neon-magenta text-4xl font-bold font-orbitron">
              IG
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron mb-4 text-gradient-neon"
        >
          Isadora Gularte
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-syncopate text-neon-cyan mb-6"
        >
          16 anos | Desenvolvedora Full Stack | Parobé, RS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl font-inter text-foreground/90 max-w-2xl mx-auto leading-relaxed"
        >
          Transformando linhas de código em experiências digitais elétricas.
          <br />
          <span className="text-neon-purple">Foco em UX, APIs e Automação.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
