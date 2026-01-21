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
        className="bg-blush/40 rounded-2xl p-8 mb-8 border border-primary/10 space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light italic">
          You have always loved in quiet ways,<br />
          and I've learned that the softest love is often the deepest.
        </p>
        
        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          With you, there is a warmth that never seeks attention —<br />
          only understanding, patience, and sincerity.<br />
          You never raise your voice, never make love feel heavy.<br />
          Instead, you choose gentleness and calm,<br />
          a kindness that feels rare and deeply genuine.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          With me, you allow yourself to be soft and caring,<br />
          to love in a way that feels safe, honest, and real.
        </p>

        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
          <Heart className="w-3 h-3 text-primary/60 fill-primary/60" />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
        </div>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          Today, I want you to know how deeply you are appreciated —<br />
          not for what you do, but for who you are.<br />
          Your gentle heart, your quiet strength,<br />
          and the way you love so naturally<br />
          mean more to me than words could ever fully express.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          No matter what life brings your way,<br />
          please know this: <span className="text-primary font-medium">I am here.</span><br />
          I will always stand beside you —<br />
          through every step, every challenge, every change,<br />
          in strength and in silence,<br />
          <span className="italic">always.</span>
        </p>

        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
          <Sparkles className="w-3 h-3 text-rose-gold/60" />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
        </div>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          As you step into a new year of your life,<br />
          I pray that the world treats you with the same gentleness you give to others.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          May success follow you in all that you pursue,<br />
          and may your efforts be met with ease, clarity,<br />
          and growth that feels true to who you are.<br />
          May every path you walk feel guided and smooth.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          May blessings and sustenance flow into your life continuously —<br />
          not only in abundance, but in peace and contentment.<br />
          May you always be surrounded by kind-hearted people,<br />
          those who see your goodness, protect your softness,<br />
          and choose sincerity every day.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          I pray for your health today and for all the years ahead —<br />
          for strength when days feel heavy,<br />
          for rest when your heart needs quiet,<br />
          and for happiness that gently settles into your life<br />
          and stays with you through every season.
        </p>

        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
          <Heart className="w-3 h-3 text-primary/60 fill-primary/60" />
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-16" />
        </div>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          In this prayer, I also hold my gratitude.<br />
          I am thankful for the moment our paths crossed,<br />
          for the way your presence makes my days feel lighter,<br />
          my heart calmer, and my life softer in ways I never expected.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light italic">
          Knowing you has been a quiet kind of joy —<br />
          one that lifts the weight of my days<br />
          and reminds me that love can be gentle,<br />
          steady, and deeply reassuring.
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          Above all, I pray that you always feel loved —<br />
          in moments of happiness, in moments of uncertainty,<br />
          and even in silence.<br />
          <span className="text-primary font-medium">Loved in a way that feels constant, sincere, and true.</span>
        </p>

        <p className="text-center text-foreground/90 leading-relaxed text-lg font-light">
          You deserve a life filled with warmth, meaning,<br />
          and gentle happiness —<br />
          today, tomorrow, and always.
        </p>

        <p className="text-center text-secondary font-script text-2xl mt-8">
          — yours, gently
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