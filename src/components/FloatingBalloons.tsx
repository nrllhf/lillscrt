import { motion } from "framer-motion";

const balloons = [
  { color: "hsl(340, 82%, 65%)", x: 10, delay: 0 },
  { color: "hsl(43, 96%, 65%)", x: 25, delay: 0.5 },
  { color: "hsl(12, 90%, 70%)", x: 75, delay: 1 },
  { color: "hsl(340, 60%, 75%)", x: 90, delay: 1.5 },
  { color: "hsl(43, 100%, 75%)", x: 50, delay: 0.8 },
];

const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0"
          style={{ left: `${balloon.x}%` }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -800, opacity: [0, 1, 1, 0.8] }}
          transition={{
            duration: 15,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          {/* Balloon */}
          <div className="relative">
            <motion.div
              className="w-16 h-20 rounded-full relative"
              style={{ backgroundColor: balloon.color }}
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Shine effect */}
              <div
                className="absolute top-3 left-3 w-4 h-6 rounded-full opacity-40"
                style={{ backgroundColor: "white" }}
              />
              {/* Bottom knot */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3"
                style={{
                  backgroundColor: balloon.color,
                  filter: "brightness(0.8)",
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
              />
            </motion.div>
            {/* String */}
            <div
              className="absolute top-full left-1/2 w-px h-32 opacity-50"
              style={{ backgroundColor: balloon.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
