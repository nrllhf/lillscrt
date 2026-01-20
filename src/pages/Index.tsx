import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import CountdownTimer from "@/components/CountdownTimer";
import { Heart, Sparkles, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-soft relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background decorations */}
      <Confetti />
      <FloatingBalloons />

      {/* Ambient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      {/* Main content */}
      <main className="relative z-20 px-4 py-12 md:py-20 w-full max-w-4xl mx-auto text-center">
        {/* Header badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 bg-card/60 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-sm font-light tracking-widest text-foreground/70 uppercase">
              Menghitung Hari
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gradient text-glow mb-4">
            Sebentar Lagi...
          </h1>
          <p className="font-display text-xl md:text-2xl text-secondary italic">
            hari yang istimewa akan tiba
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="my-12 md:my-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Date display */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-3 bg-card/40 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/10">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-display text-xl md:text-2xl text-foreground/90">
              09 Mei 2026
            </span>
          </div>
        </motion.div>

        {/* Decorative message */}
        <motion.div
          className="mt-12 md:mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <p className="text-foreground/80 font-light leading-relaxed">
              Setiap detik yang berlalu membawa kita semakin dekat 
              ke hari yang penuh cinta dan kebahagiaan. 
              Bersiaplah untuk momen yang tak terlupakan...
            </p>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-20" />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-20" />
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span className="font-light tracking-wide">Dibuat dengan</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
            <span className="font-light tracking-wide">untukmu</span>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;