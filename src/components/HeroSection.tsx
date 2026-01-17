import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/img/perfil.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card-glow p-6 md:p-12 lg:p-16 max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto border-2 sm:border-2 md:border-4 lg:border-4 border-transparent bg-gradient-to-r from-neon-cyan to-neon-purple p-0.5 sm:p-1 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <AvatarImage 
                src={profileImg} 
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 text-foreground"
        >
          Isadora Gularte
        </motion.h1>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-1 text-muted-foreground text-xs sm:text-sm md:text-base"
        >
          <p><span className="text-neon-cyan font-medium">17 anos</span></p>
          <p>Parobé - RS</p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 sm:mt-6 text-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed"
        >
          Desenvolvedora Full Stack. Foco em Back-end, Front-end e Design.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
