import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowLeft, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Love = () => {
  const navigate = useNavigate();
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [hearts, setHearts] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  // Generate spreading hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      delay: Math.random() * 2,
    }));
    setHearts(newHearts);

    // Trigger black screen after hearts animation
    const timer = setTimeout(() => {
      setShowBlackScreen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-soft relative overflow-hidden">
      {/* Back Button - visible before black screen */}
      <AnimatePresence>
        {!showBlackScreen && (
          <motion.button
            onClick={() => navigate("/letter")}
            className="fixed top-6 left-6 z-50 group inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="text-foreground/80 text-sm font-light">Back</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Spreading Hearts */}
      <AnimatePresence>
        {!showBlackScreen && (
          <motion.div
            className="fixed inset-0 z-10"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute text-primary"
                style={{
                  left: `${heart.x}%`,
                  top: `${heart.y}%`,
                }}
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.8],
                  rotate: [0, 360],
                  y: [0, -50, -100],
                }}
                transition={{
                  duration: 3,
                  delay: heart.delay,
                  ease: "easeOut",
                }}
              >
                <Heart
                  className="fill-primary"
                  style={{ width: heart.size, height: heart.size }}
                />
              </motion.div>
            ))}

            {/* Center Message */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="text-center">
                <motion.div
                  className="mb-8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-24 h-24 text-primary fill-primary mx-auto" />
                </motion.div>
                <motion.h1
                  className="font-script text-5xl md:text-7xl text-gradient text-glow mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Forever Yours
                </motion.h1>
                <motion.p
                  className="font-display text-2xl text-secondary italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  with all my love
                </motion.p>
              </div>
            </motion.div>

            {/* Ambient glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black Screen Transition */}
      <AnimatePresence>
        {showBlackScreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {/* Navigation Buttons on Black Screen */}
            <motion.div
              className="fixed top-6 left-6 z-60 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <motion.button
                onClick={() => navigate("/letter")}
                className="group inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                <span className="text-white/80 text-sm font-light">Back</span>
              </motion.button>
              
              <motion.button
                onClick={() => navigate("/")}
                className="group inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm font-light">Start Over</span>
              </motion.button>
            </motion.div>

            {/* Floating hearts on black background */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0.8],
                  y: [0, -30, -60],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <Heart className="w-8 h-8 text-primary/60 fill-primary/60" />
              </motion.div>
            ))}

            {/* Final Message */}
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <motion.div
                className="mb-8"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 text-primary fill-primary mx-auto" />
              </motion.div>
              
              <motion.h1
                className="font-script text-4xl md:text-6xl text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Happy Birthday
              </motion.h1>
              
              <motion.p
                className="text-white/60 font-light text-lg tracking-widest mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                You are loved, always
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <div className="h-px bg-gradient-to-r from-transparent to-primary/50 w-16" />
                <Heart className="w-3 h-3 text-primary/50 fill-primary/50" />
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent w-16" />
              </motion.div>

              <motion.p
                className="font-script text-2xl text-primary/70 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                — yours, gently
              </motion.p>
            </motion.div>

            {/* Subtle ambient glow on black */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Love;
