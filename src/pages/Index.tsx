import { motion } from "framer-motion";
import Confetti from "@/components/Confetti";
import FloatingBalloons from "@/components/FloatingBalloons";
import CountdownTimer from "@/components/CountdownTimer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-soft relative overflow-hidden flex items-center justify-center">
      <Confetti />
      <FloatingBalloons />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      <main className="relative z-20 px-4">
        <CountdownTimer />
      </main>

      <MusicPlayer />
    </div>
  );
};

export default Index;