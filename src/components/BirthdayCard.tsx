import { motion } from "framer-motion";
import { Cake, Heart, Sparkles, Star } from "lucide-react";

const BirthdayCard = () => {
  return (
    <motion.div
      className="relative bg-card rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto border border-border/50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 text-secondary">
        <Sparkles className="w-6 h-6 animate-sparkle" />
      </div>
      <div className="absolute top-4 right-4 text-primary">
        <Star className="w-6 h-6 animate-sparkle" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="absolute bottom-4 left-4 text-coral">
        <Heart className="w-6 h-6 animate-sparkle" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="absolute bottom-4 right-4 text-secondary">
        <Sparkles className="w-6 h-6 animate-sparkle" style={{ animationDelay: "0.9s" }} />
      </div>

      {/* Cake icon */}
      <motion.div
        className="flex justify-center mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-celebration p-4 rounded-full">
          <Cake className="w-12 h-12 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Main greeting */}
      <motion.h1
        className="font-script text-5xl md:text-7xl text-center text-gradient mb-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Selamat Ulang Tahun!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-display text-2xl md:text-3xl text-center text-foreground/80 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        untuk orang yang istimewa
      </motion.p>

      {/* Message */}
      <motion.div
        className="bg-blush/30 rounded-2xl p-6 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-center text-foreground/90 leading-relaxed text-lg">
          Semoga di hari yang spesial ini, kamu diberkahi dengan kebahagiaan yang melimpah, 
          kesehatan yang prima, dan semua impianmu terwujud. Terima kasih telah menjadi 
          bagian indah dalam hidup ini. 🎂✨
        </p>
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20" />
        <Heart className="w-5 h-5 text-primary fill-primary" />
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20" />
      </motion.div>

      {/* Closing */}
      <motion.p
        className="font-script text-3xl text-center text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Dengan penuh cinta 💝
      </motion.p>
    </motion.div>
  );
};

export default BirthdayCard;
