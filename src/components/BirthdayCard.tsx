import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const BirthdayCard = () => {
  return (
    <motion.div
      className="relative bg-card/80 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border border-primary/20 glow-effect"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, type: "spring" }}
    >
      {/* Decorative corners with candle-like glow */}
      <motion.div 
        className="absolute top-6 left-6 text-rose-gold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div 
        className="absolute top-6 right-6 text-primary"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div 
        className="absolute bottom-6 left-6 text-primary"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-6 right-6 text-rose-gold"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>

      {/* Heart icon with glow */}
      <motion.div
        className="flex justify-center mb-8"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="bg-celebration p-5 rounded-full animate-pulse-glow">
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Main greeting */}
      <motion.h1
        className="font-script text-5xl md:text-7xl text-center text-gradient mb-4 text-glow"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Selamat Ulang Tahun
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-display text-2xl md:text-3xl text-center text-secondary mb-8 italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        untuk seseorang yang sangat berarti
      </motion.p>

      {/* Message */}
      <motion.div
        className="bg-blush/40 rounded-2xl p-6 mb-8 border border-primary/10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          Di hari yang istimewa ini, ku persembahkan seluruh doa dan harapan terbaik untukmu. 
          Semoga setiap langkahmu dipenuhi cinta, setiap hari dipenuhi kebahagiaan, 
          dan setiap mimpi menjadi kenyataan. Kau adalah cahaya yang menerangi hidupku.
        </p>
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </motion.div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24" />
      </motion.div>

      {/* Closing */}
      <motion.p
        className="font-script text-3xl md:text-4xl text-center text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Dengan segenap cinta
      </motion.p>
      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Heart className="w-6 h-6 text-primary fill-primary" />
      </motion.div>
    </motion.div>
  );
};

export default BirthdayCard;