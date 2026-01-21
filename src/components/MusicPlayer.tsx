import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Romantic piano music - royalty free
  const musicUrl = "https://cdn.pixabay.com/audio/2024/11/04/audio_c50e6e4c55.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      <audio ref={audioRef} src={musicUrl} />
      
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-gold/30 text-gold hover:bg-card transition-all shadow-lg"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full bg-gradient-to-br from-burgundy to-burgundy/80 border border-gold/30 text-gold hover:from-burgundy/90 hover:to-burgundy/70 transition-all shadow-lg flex items-center gap-2"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <>
            <Pause size={20} />
            <Music size={16} className="animate-pulse" />
          </>
        ) : (
          <>
            <Play size={20} />
            <Music size={16} />
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;
