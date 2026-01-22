import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import MusicPlayer from "@/components/MusicPlayer";
import { Heart, ArrowRight } from "lucide-react";

const Birthday = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      <Confetti />
      <FloatingBalloons />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      <main className="relative z-20 px-4 py-12 md:py-20">
        <BirthdayCard />
        <WishesSection />

        {/* Continue Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            onClick={() => navigate("/letter")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/20 hover:bg-primary/30 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-foreground font-light tracking-wide">
              Read My Letter
            </span>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

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