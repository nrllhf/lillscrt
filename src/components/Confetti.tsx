import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = [
  "hsl(350, 70%, 45%)", // burgundy
  "hsl(350, 65%, 35%)", // deep wine
  "hsl(25, 60%, 55%)",  // rose gold
  "hsl(15, 45%, 65%)",  // soft rose gold
  "hsl(350, 40%, 25%)", // dark blush
];

const Confetti = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = [];
    for (let i = 0; i < 35; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 10,
        rotation: Math.random() * 360,
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            width: petal.size,
            height: petal.size * 1.3,
            backgroundColor: petal.color,
            borderRadius: "50% 0 50% 50%",
            opacity: 0.6,
          }}
          initial={{ y: -100, rotate: 0, opacity: 0 }}
          animate={{
            y: "100vh",
            rotate: petal.rotation + 360,
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 30, -20, 10, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;