import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import BirthdayCard from "@/components/BirthdayCard";
import WishesSection from "@/components/WishesSection";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      {/* Background decorations */}
      <Confetti />
      <FloatingBalloons />

      {/* Main content */}
      <main className="relative z-20 px-4 py-12 md:py-20">
        {/* Header sparkles */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-border/30">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-foreground/70">Hari yang Spesial</span>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
        </motion.div>

        {/* Birthday Card */}
        <BirthdayCard />

        {/* Wishes Section */}
        <WishesSection />

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-muted-foreground text-sm">
            Dibuat dengan 💖 khusus untukmu
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
