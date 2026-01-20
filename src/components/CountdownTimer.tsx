import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2026-05-09T00:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  if (!mounted) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
        >
          <div className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center glow-effect">
            <motion.span
              key={unit.value}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient font-bold block"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mt-2 block font-light">
              {unit.label}
            </span>
          </div>
          
          {/* Glow effect behind */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;