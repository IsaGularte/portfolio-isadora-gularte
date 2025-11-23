import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mail } from "lucide-react";

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
          className="mb-10 inline-block relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple blur-xl opacity-50"></div>
          <Avatar className="w-44 h-44 md:w-56 md:h-56 relative border-4 border-transparent bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple p-1 avatar-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Isadora Gularte" className="w-full h-full object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 text-4xl font-bold text-foreground">
                IG
              </AvatarFallback>
            </div>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 text-gradient-vibrant"
        >
          Isadora Gularte
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground mb-6"
        >
          <span className="font-semibold text-neon-cyan">16 anos</span>
          <span className="text-border">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-neon-magenta" />
            <span>Parobé, RS</span>
          </div>
          <span className="text-border hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-neon-purple" />
            <a 
              href="mailto:isagularte09@gmail.com" 
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              isagularte09@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed"
        >
          Desenvolvedora Full Stack apaixonada por inovação.
          <br />
          <span className="text-neon-magenta font-medium">
            Transformo ideias em código com foco em UX, performance e automação.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
