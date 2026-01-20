import { motion } from "framer-motion";

const hearts = [
  { color: "hsl(350, 70%, 45%)", x: 8, delay: 0, scale: 0.8 },
  { color: "hsl(25, 60%, 55%)", x: 22, delay: 1.5, scale: 0.6 },
  { color: "hsl(350, 65%, 35%)", x: 78, delay: 2, scale: 0.9 },
  { color: "hsl(15, 45%, 65%)", x: 92, delay: 0.8, scale: 0.5 },
  { color: "hsl(350, 50%, 40%)", x: 45, delay: 3, scale: 0.7 },
  { color: "hsl(350, 40%, 30%)", x: 60, delay: 4, scale: 0.6 },
];

const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0"
          style={{ left: `${heart.x}%`, scale: heart.scale }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -900, opacity: [0, 0.7, 0.7, 0] }}
          transition={{
            duration: 20,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{ rotate: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill={heart.color}
              className="drop-shadow-lg"
              style={{ filter: `drop-shadow(0 0 10px ${heart.color})` }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-glow opacity-20"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FloatingBalloons;