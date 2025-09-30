export interface FunFact {
  id: string; // Unique identifier for the fact
  theme: "solar" | "human-space" | "earth-science" | "general-space"; // Helps categorize
  title: string; // E.g., "Why is the Sun Hot?"
  shortPrompt: string; // E.g., "What makes the Sun shine so bright?"
  emoji: string; // Main emoji for quick identification (replaces original fact.emoji)
  imageFront: string; // URL to a small icon/illustration for the card front
  imageBack: string; // URL to a small icon/illustration for the card back (often similar to emoji)
  factText: string; // The actual scientifically correct, kid-friendly fact
  readAloudAudioUrl?: string; // Optional audio URL for this specific fact
  sourceUrl?: string; // Optional URL for more info for parents
}

export const funFacts: FunFact[] = [
  {
    id: "sun-hot",
    theme: "solar",
    title: "The Sun's Secret Fire",
    shortPrompt: "What makes our Sun so super hot? 🔥",
    emoji: "☀️",
    imageFront: "/sun.png", // Example image
    imageBack: "/sun.png", // Example image
    factText:
      "The Sun makes its own heat by squishing tiny atoms together really, really fast! It's like billions of tiny explosions happening all the time, making energy that warms our whole planet!",
    readAloudAudioUrl: "/audio/facts/sun_hot.mp3",
  },
  {
    id: "astronaut-grow",
    theme: "human-space",
    title: "Astronauts Get Taller?",
    shortPrompt: "Do astronauts really grow in space? ⬆️",
    emoji: "🧑‍🚀",
    imageFront: "/stories/story1/img/astronaut.png",
    imageBack: "/stories/story1/img/astronaut.png",
    factText:
      "Yes! Without Earth's gravity pushing down on their spine, astronauts can actually stretch up to 2 inches taller! But don't worry, they shrink back down when they return to Earth!",
    readAloudAudioUrl: "/audio/facts/astronaut_grow.mp3",
  },
  {
    id: "moon-smell",
    theme: "human-space",
    title: "Moon Smells Like...",
    shortPrompt: "What does the Moon actually smell like? 👃",
    emoji: "🌕",
    imageFront: "/stories/story1/img/moon.png",
    imageBack: "/stories/story1/img/moon.png",
    factText:
      "Astronauts say Moon dust smells like spent gunpowder! This is because of tiny, sharp rock fragments and other chemicals blasted by solar wind. Good thing they wear helmets!",
  },
  {
    id: "jupiter-storm",
    theme: "general-space",
    title: "Jupiter's Giant Storm",
    shortPrompt: "Which planet has a storm bigger than Earth? 🌀",
    emoji: "🪐",
    imageFront: "/jupiter.png",
    imageBack: "/jupiter.png",
    factText:
      "Jupiter has a 'Great Red Spot' which is a super-giant hurricane that's been raging for hundreds of years! It's so big, three Earths could fit inside it!",
  },
  {
    id: "stars-more",
    theme: "general-space",
    title: "Stars Everywhere!",
    shortPrompt: "Are there more stars or grains of sand? ✨",
    emoji: "⭐",
    imageFront: "/stories/story1/img/star.png",
    imageBack: "/stories/story1/img/star.png",
    factText:
      "There are more stars in the universe than grains of sand on all the beaches on Earth! Can you imagine counting them all? That&apos;s a lot of sparkling lights!",
  },
  {
    id: "solar-system-edge",
    theme: "solar",
    title: "Edge of Our Home",
    shortPrompt: "How far is the 'end' of our solar system? 🔭",
    emoji: "🌌",
    imageFront: "/solar-system.png",
    imageBack: "/solar-system.png",
    factText:
      "Our solar system stretches super far, almost a light-year away! That's so far that even light takes a whole year to travel from one end to the other! It's called the Oort Cloud.",
  },
];
