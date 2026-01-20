import { motion } from "framer-motion";
import { Heart, Moon, Sparkles, Star } from "lucide-react";

const wishes = [
  { icon: Heart, text: "Semoga cinta selalu menyelimutimu", color: "text-primary" },
  { icon: Star, text: "Semoga bintang selalu membimbingmu", color: "text-secondary" },
  { icon: Moon, text: "Semoga ketenangan selalu menyertaimu", color: "text-rose-gold" },
  { icon: Sparkles, text: "Semoga keajaiban hadir di hidupmu", color: "text-gold" },
];

const WishesSection = () => {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      {wishes.map((wish, index) => (
        <motion.div
          key={index}
          className="group bg-card/60 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:bg-card/80"
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 + index * 0.2 }}
          whileHover={{ 
            scale: 1.02, 
            transition: { duration: 0.3 },
          }}
        >
          <motion.div 
            className={`${wish.color} bg-blush/50 p-3 rounded-xl transition-all duration-300 group-hover:bg-primary/20`}
            whileHover={{ rotate: 5 }}
          >
            <wish.icon className="w-6 h-6" />
          </motion.div>
          <p className="text-foreground/80 font-light tracking-wide">{wish.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WishesSection;