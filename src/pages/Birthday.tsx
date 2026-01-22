import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";

const Birthday = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      <Confetti />
      <FloatingBalloons />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 group inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
        <span className="text-foreground/80 text-sm font-light">Back</span>
      </motion.button>

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
    </div>
  );
};

export default Birthday;