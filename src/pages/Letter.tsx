import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";

const paragraphs = [
  {
    text: "You have always loved in quiet ways, and I've learned that the softest love is often the deepest.",
    italic: true,
  },
  {
    text: "With you, there is a warmth that never seeks attention — only understanding, patience, and sincerity. You never raise your voice, never make love feel heavy. Instead, you choose gentleness and calm, a kindness that feels rare and deeply genuine.",
  },
  {
    text: "With me, you allow yourself to be soft and caring, to love in a way that feels safe, honest, and real.",
  },
  {
    text: "Today, I want you to know how deeply you are appreciated — not for what you do, but for who you are. Your gentle heart, your quiet strength, and the way you love so naturally mean more to me than words could ever fully express.",
  },
  {
    text: "No matter what life brings your way, please know this: I am here. I will always stand beside you — through every step, every challenge, every change, in strength and in silence, always.",
    highlight: "I am here.",
  },
  {
    text: "As you step into a new year of your life, I pray that the world treats you with the same gentleness you give to others.",
  },
  {
    text: "May success follow you in all that you pursue, and may your efforts be met with ease, clarity, and growth that feels true to who you are. May every path you walk feel guided and smooth.",
  },
  {
    text: "May blessings and sustenance flow into your life continuously — not only in abundance, but in peace and contentment. May you always be surrounded by kind-hearted people, those who see your goodness, protect your softness, and choose sincerity every day.",
  },
  {
    text: "I pray for your health today and for all the years ahead — for strength when days feel heavy, for rest when your heart needs quiet, and for happiness that gently settles into your life and stays with you through every season.",
  },
  {
    text: "In this prayer, I also hold my gratitude. I am thankful for the moment our paths crossed, for the way your presence makes my days feel lighter, my heart calmer, and my life softer in ways I never expected.",
  },
  {
    text: "Knowing you has been a quiet kind of joy — one that lifts the weight of my days and reminds me that love can be gentle, steady, and deeply reassuring.",
    italic: true,
  },
  {
    text: "Above all, I pray that you always feel loved — in moments of happiness, in moments of uncertainty, and even in silence. Loved in a way that feels constant, sincere, and true.",
  },
  {
    text: "You deserve a life filled with warmth, meaning, and gentle happiness — today, tomorrow, and always.",
  },
];

const Letter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      <Confetti />
      <FloatingBalloons />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/birthday")}
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
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-rose-gold" />
          </motion.div>
          <h1 className="font-script text-5xl md:text-7xl text-gradient text-glow mb-4">
            A Letter for You
          </h1>
          <p className="font-display text-xl text-secondary italic">
            Words from the heart
          </p>
        </motion.div>

        {/* Letter Content */}
        <motion.div
          className="max-w-2xl mx-auto bg-card/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/20 glow-effect"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="space-y-6">
            {paragraphs.map((para, index) => (
              <motion.p
                key={index}
                className={`text-foreground/90 leading-relaxed text-lg font-light ${
                  para.italic ? "italic" : ""
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              >
                {para.text}
              </motion.p>
            ))}

            {/* Signature */}
            <motion.div
              className="pt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24" />
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-24" />
              </div>
              <p className="font-script text-3xl text-secondary">
                — yours, gently
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.button
            onClick={() => navigate("/love")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/20 hover:bg-primary/30 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-foreground font-light tracking-wide">
              Continue
            </span>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span className="font-light tracking-wide">Written with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
            <span className="font-light tracking-wide">for you</span>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default Letter;
