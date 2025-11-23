import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 inline-block"
        >
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border border-space-cyan/30 avatar-glow">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Isadora Gularte" />
            <AvatarFallback className="bg-gradient-to-br from-space-cyan/20 to-space-purple/20 text-4xl font-semibold text-foreground">
              IG
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground tracking-tight"
        >
          Isadora Gularte
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-8"
        >
          16 anos <span className="text-space-cyan">|</span> Desenvolvedora Full Stack <span className="text-space-cyan">|</span> Parobé, RS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Explorando o universo da tecnologia.
          <br />
          <span className="text-space-purple font-medium">Foco em desenvolvimento web, mobile e automação.</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
