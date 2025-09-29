import { useRef } from "react";

export function ReadAloud({
  text,
  audioUrl,
}: {
  text: string;
  audioUrl?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const speak = () => {
    if (audioUrl) {
      audioRef.current?.play();
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // or "bn-BD" for Bangla
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <button
        onClick={speak}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg"
      >
        🔊 Read Aloud
      </button>
      {audioUrl && <audio ref={audioRef} src={audioUrl} preload="auto" />}
    </div>
  );
}
