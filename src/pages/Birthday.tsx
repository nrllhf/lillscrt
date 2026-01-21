import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import MusicPlayer from "@/components/MusicPlayer";
import { Heart } from "lucide-react";

const Birthday = () => {
  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      <Confetti />
      <FloatingBalloons />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      <main className="relative z-20 px-4 py-12 md:py-20">
        <BirthdayCard />
        <WishesSection />

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

      <MusicPlayer />
    </div>
  );
};

export default Birthday;