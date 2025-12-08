import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card p-8 md:p-12 max-w-lg mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-transparent bg-gradient-to-r from-neon-cyan to-neon-purple p-1 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Isadora Gularte" 
                className="w-full h-full object-cover" 
              />
              <AvatarFallback className="bg-card text-2xl font-bold text-foreground">
                IG
              </AvatarFallback>
            </div>
          </Avatar>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground"
        >
          Isadora Gularte
        </motion.h1>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2 text-muted-foreground text-sm md:text-base"
        >
          <p><span className="text-neon-cyan font-medium">16 anos</span></p>
          <p>Rua João Knack, 567, Guarani, Parobé</p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-foreground/90 text-sm md:text-base leading-relaxed"
        >
          Desenvolvedora Full Stack. Foco em Front-end, Back-end e Design.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
