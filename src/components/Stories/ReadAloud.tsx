// components/Stories/ReadAloud.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";

interface ReadAloudProps {
  text: string;
  audioUrl?: string;
}

export const ReadAloud: React.FC<ReadAloudProps> = ({ text, audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioUrl) {
      // Audio file playback
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().catch((err) => {
            console.error("Audio play failed:", err);
          });
          setIsPlaying(true);
        }
      }
    } else {
      // TTS playback - simplified error handling
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        try {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "en-US";

          utterance.onend = () => setIsPlaying(false);
          utterance.onerror = () => setIsPlaying(false); // Silently handle errors

          window.speechSynthesis.speak(utterance);
          setIsPlaying(true);
        } catch (error) {
          console.error("TTS error:", error);
          setIsPlaying(false);
        }
      }
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex justify-center">
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-lg transition-colors"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "⏸️" : "🔊"}
      </button>

      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          className="hidden"
        />
      )}
    </div>
  );
};
