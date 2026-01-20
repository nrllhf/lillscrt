import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      {/* Background decorations */}
      <Confetti />
      <FloatingBalloons />

      {/* Ambient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      {/* Main content */}
      <main className="relative z-20 px-4 py-12 md:py-20">
        {/* Header */}
        <motion.div
          className="flex justify-center mb-10"
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
              Hari Istimewa
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Birthday Card */}
        <BirthdayCard />

        {/* Wishes Section */}
        <WishesSection />

        {/* Footer */}
        <motion.footer
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
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