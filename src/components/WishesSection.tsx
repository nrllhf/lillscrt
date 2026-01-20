import { motion } from "framer-motion";
import { Gift, PartyPopper, Sparkles, Stars } from "lucide-react";

const wishes = [
  { icon: Gift, text: "Semoga mendapat banyak kejutan manis", color: "text-primary" },
  { icon: Stars, text: "Semoga bintang selalu bersinar untukmu", color: "text-secondary" },
  { icon: PartyPopper, text: "Semoga hari ini penuh keceriaan", color: "text-coral" },
  { icon: Sparkles, text: "Semoga mimpi-mimpimu terwujud", color: "text-gold" },
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
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 border border-border/30 shadow-lg"
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 + index * 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className={`${wish.color} bg-muted/50 p-3 rounded-xl`}>
            <wish.icon className="w-6 h-6" />
          </div>
          <p className="text-foreground/80 font-medium">{wish.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WishesSection;
