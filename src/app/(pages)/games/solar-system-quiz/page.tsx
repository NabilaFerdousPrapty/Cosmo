// src/app/games/solar-system-quiz/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  fact: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What shape is the Sun?",
    options: ["Square", "Round", "Triangle", "Star-shaped"],
    correctAnswer: 1,
    fact: "The Sun looks round like a big ball.",
  },
  {
    id: 2,
    question: "What gives us light during the day?",
    options: ["The Moon", "The Stars", "The Sun", "The Clouds"],
    correctAnswer: 2,
    fact: "The Sun gives us light and warmth during the day.",
  },
  {
    id: 3,
    question: "What do we call the planet we live on?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: 1,
    fact: "We all live on planet Earth.",
  },
  {
    id: 4,
    question: "What shines at night and changes shape?",
    options: ["The Sun", "The Moon", "The Stars", "The Clouds"],
    correctAnswer: 1,
    fact: "The Moon shines at night and has different shapes called phases.",
  },
  {
    id: 5,
    question: "What do we call tiny lights we see in the night sky?",
    options: ["Stars", "Balloons", "Candles", "Fires"],
    correctAnswer: 0,
    fact: "Stars are huge balls of gas shining far away in space.",
  },
  {
    id: 6,
    question: "Which planet is called the Red Planet?",
    options: ["Mars", "Earth", "Venus", "Mercury"],
    correctAnswer: 0,
    fact: "Mars is called the Red Planet because of its reddish color.",
  },
  {
    id: 7,
    question: "What do astronauts wear in space?",
    options: ["Uniform", "Swimsuit", "Space suit", "Jacket"],
    correctAnswer: 2,
    fact: "Astronauts wear space suits to stay safe in space.",
  },
  {
    id: 8,
    question: "Which is bigger, the Sun or the Earth?",
    options: ["Earth", "The Sun", "Both same size", "Moon"],
    correctAnswer: 1,
    fact: "The Sun is much bigger than the Earth.",
  },
  {
    id: 9,
    question: "What is the Moon made of?",
    options: ["Cheese", "Rock and dust", "Water", "Paper"],
    correctAnswer: 1,
    fact: "The Moon is made of rock and dust.",
  },
  {
    id: 10,
    question: "What do we call people who travel to space?",
    options: ["Drivers", "Astronauts", "Pilots", "Explorers"],
    correctAnswer: 1,
    fact: "Astronauts are trained people who travel to space.",
  },
  {
    id: 11,
    question: "What do we see rising in the morning?",
    options: ["Moon", "Stars", "Sun", "Planets"],
    correctAnswer: 2,
    fact: "The Sun rises in the morning and gives us daylight.",
  },
  {
    id: 12,
    question: "What do we call our star?",
    options: ["The Moon", "The Sun", "Jupiter", "Venus"],
    correctAnswer: 1,
    fact: "The Sun is the star at the center of our solar system.",
  },
  {
    id: 13,
    question: "How many planets go around the Sun?",
    options: ["5", "7", "8", "10"],
    correctAnswer: 2,
    fact: "There are 8 planets in our solar system.",
  },
  {
    id: 14,
    question: "Which planet is the biggest?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    fact: "Jupiter is the largest planet in our solar system.",
  },
  {
    id: 15,
    question: "Which planet has rings?",
    options: ["Venus", "Saturn", "Earth", "Mars"],
    correctAnswer: 1,
    fact: "Saturn has beautiful rings made of ice and rock.",
  },
  {
    id: 16,
    question: "What do we call a group of stars making shapes?",
    options: ["Planets", "Constellations", "Galaxies", "Moons"],
    correctAnswer: 1,
    fact: "Constellations are patterns of stars in the sky.",
  },
  {
    id: 17,
    question: "What is our galaxy called?",
    options: ["Andromeda", "Milky Way", "Sun Galaxy", "Star Path"],
    correctAnswer: 1,
    fact: "We live in the Milky Way galaxy.",
  },
  {
    id: 18,
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Mercury", "Mars", "Jupiter"],
    correctAnswer: 1,
    fact: "Mercury is the closest planet to the Sun.",
  },
  {
    id: 19,
    question: "What planet is famous for its red color?",
    options: ["Venus", "Mars", "Neptune", "Earth"],
    correctAnswer: 1,
    fact: "Mars is called the Red Planet.",
  },
  {
    id: 20,
    question: "What do rockets use to go into space?",
    options: ["Wheels", "Engines", "Fuel", "Ladders"],
    correctAnswer: 2,
    fact: "Rockets use powerful fuel to launch into space.",
  },
  {
    id: 21,
    question: "What do astronauts travel in to reach space?",
    options: ["Car", "Bus", "Rocket", "Train"],
    correctAnswer: 2,
    fact: "Astronauts use rockets to travel to space.",
  },
  {
    id: 22,
    question: "What shines in the sky at night besides the Moon?",
    options: ["Clouds", "Stars", "Rainbows", "Sun"],
    correctAnswer: 1,
    fact: "Stars shine brightly at night in the sky.",
  },
  {
    id: 23,
    question: "Which planet is called the Blue Planet?",
    options: ["Earth", "Neptune", "Mars", "Venus"],
    correctAnswer: 0,
    fact: "Earth is called the Blue Planet because of its water and oceans.",
  },
  {
    id: 24,
    question: "What is the closest star to Earth?",
    options: ["Moon", "Polaris", "The Sun", "Jupiter"],
    correctAnswer: 2,
    fact: "The Sun is the closest star to Earth.",
  },
  {
    id: 25,
    question: "What helps plants grow on Earth?",
    options: ["Moonlight", "Starlight", "Sunlight", "Clouds"],
    correctAnswer: 2,
    fact: "Plants need sunlight to make food through photosynthesis.",
  },
  {
    id: 26,
    question: "What do we call the path planets take around the Sun?",
    options: ["Circle", "Orbit", "Loop", "Track"],
    correctAnswer: 1,
    fact: "Planets move around the Sun in paths called orbits.",
  },
  {
    id: 27,
    question: "Which planet is famous for being very hot and cloudy?",
    options: ["Venus", "Mars", "Jupiter", "Earth"],
    correctAnswer: 0,
    fact: "Venus is very hot because of its thick clouds.",
  },
  {
    id: 28,
    question: "What do astronauts eat in space?",
    options: ["Pizza", "Special space food", "Ice cream", "Nothing"],
    correctAnswer: 1,
    fact: "Astronauts eat special packed food in space.",
  },
  {
    id: 29,
    question: "What do we call the spinning of Earth on its axis?",
    options: ["Orbit", "Rotation", "Revolution", "Roll"],
    correctAnswer: 1,
    fact: "Earth rotates on its axis, making day and night.",
  },
  {
    id: 30,
    question: "How long does Earth take to go once around the Sun?",
    options: ["1 day", "1 month", "1 year", "10 years"],
    correctAnswer: 2,
    fact: "Earth takes one year to orbit the Sun.",
  },
  {
    id: 31,
    question: "What keeps us on the ground so we don’t float away?",
    options: ["Air", "Gravity", "Ropes", "Shoes"],
    correctAnswer: 1,
    fact: "Gravity pulls everything down to Earth.",
  },
  {
    id: 32,
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 2,
    fact: "Jupiter has many moons, the most in our solar system.",
  },
  {
    id: 33,
    question: "What shape is Earth?",
    options: ["Flat", "Round", "Square", "Triangle"],
    correctAnswer: 1,
    fact: "Earth is round like a ball.",
  },
  {
    id: 34,
    question: "What do we call a rock that falls from space?",
    options: ["Meteor", "Balloon", "Cloud", "Bubble"],
    correctAnswer: 0,
    fact: "Meteors are rocks that fall from space and burn in our sky.",
  },
  {
    id: 35,
    question: "What do we call the bright line in the sky made by a meteor?",
    options: ["Rainbow", "Shooting star", "Cloud", "Flashlight"],
    correctAnswer: 1,
    fact: "A shooting star is really a meteor burning in the sky.",
  },
  {
    id: 36,
    question: "Which planet is farthest from the Sun?",
    options: ["Mercury", "Mars", "Neptune", "Saturn"],
    correctAnswer: 2,
    fact: "Neptune is the farthest planet from the Sun.",
  },
  {
    id: 37,
    question: "What planet has a big storm called the Great Red Spot?",
    options: ["Venus", "Earth", "Jupiter", "Mars"],
    correctAnswer: 2,
    fact: "Jupiter has a giant storm called the Great Red Spot.",
  },
  {
    id: 38,
    question: "Which planet looks blue because of gases?",
    options: ["Mars", "Venus", "Neptune", "Mercury"],
    correctAnswer: 2,
    fact: "Neptune looks blue because of methane gas.",
  },
  {
    id: 39,
    question: "What is the name of our natural satellite?",
    options: ["Sun", "Moon", "Mars", "Venus"],
    correctAnswer: 1,
    fact: "The Moon is Earth’s natural satellite.",
  },
  {
    id: 40,
    question: "What helps rockets blast off into space?",
    options: ["Fireworks", "Engines and fuel", "Airplanes", "Parachutes"],
    correctAnswer: 1,
    fact: "Rockets use powerful engines and fuel to launch into space.",
  },
  {
    id: 41,
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: 1,
    fact: "Venus is the hottest planet due to its thick atmosphere.",
  },
  {
    id: 42,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: 0,
    fact: "Mars is called the Red Planet because of its reddish soil.",
  },
  {
    id: 43,
    question: "What do we call a group of stars forming a pattern?",
    options: ["Galaxy", "Constellation", "Orbit", "Asteroid"],
    correctAnswer: 1,
    fact: "Constellations are groups of stars forming patterns in the sky.",
  },
  {
    id: 44,
    question: "Which planet is the largest in the solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 1,
    fact: "Jupiter is the largest planet in our solar system.",
  },
  {
    id: 45,
    question: "Which planet has rings around it?",
    options: ["Saturn", "Mars", "Earth", "Venus"],
    correctAnswer: 0,
    fact: "Saturn is famous for its beautiful rings.",
  },
  {
    id: 46,
    question: "What force keeps the Moon orbiting the Earth?",
    options: ["Magnetism", "Gravity", "Wind", "Water"],
    correctAnswer: 1,
    fact: "Gravity keeps the Moon moving around the Earth.",
  },
  {
    id: 47,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Earth", "Venus", "Mars"],
    correctAnswer: 0,
    fact: "Mercury is the closest planet to the Sun.",
  },
  {
    id: 48,
    question: "What do we call the trail of light left by a comet?",
    options: ["Tail", "Ring", "Cloud", "Orbit"],
    correctAnswer: 0,
    fact: "A comet’s tail is the glowing trail left as it passes near the Sun.",
  },
  {
    id: 49,
    question: "Which planet is called the Morning Star or Evening Star?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 1,
    fact: "Venus is often called the Morning or Evening Star.",
  },
  {
    id: 50,
    question: "What is the name of the galaxy we live in?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
    correctAnswer: 1,
    fact: "We live in the Milky Way galaxy.",
  },
  {
    id: 51,
    question: "What do astronauts wear to breathe in space?",
    options: ["Suit", "Spacesuit", "Hat", "Shoes"],
    correctAnswer: 1,
    fact: "Astronauts wear spacesuits to survive in space.",
  },
  {
    id: 52,
    question: "Which planet spins the fastest?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: 1,
    fact: "Jupiter spins very fast, completing a day in about 10 hours.",
  },
  {
    id: 53,
    question: "Which planet is known for its bright blue color?",
    options: ["Mars", "Neptune", "Saturn", "Venus"],
    correctAnswer: 1,
    fact: "Neptune appears bright blue due to methane in its atmosphere.",
  },
  {
    id: 54,
    question: "What do we call the edge of space where the atmosphere ends?",
    options: ["Horizon", "Exosphere", "Kármán Line", "Orbit"],
    correctAnswer: 2,
    fact: "The Kármán Line marks the boundary of space at about 100 km above Earth.",
  },
  {
    id: 55,
    question: "Which planet has a storm bigger than Earth?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    correctAnswer: 1,
    fact: "Jupiter has a giant storm called the Great Red Spot.",
  },
  {
    id: 56,
    question: "What do we call a small rocky body orbiting the Sun?",
    options: ["Moon", "Asteroid", "Star", "Comet"],
    correctAnswer: 1,
    fact: "Asteroids are small rocky bodies orbiting the Sun.",
  },
  {
    id: 57,
    question: "Which planet has a day longer than its year?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 0,
    fact: "Venus takes longer to spin once than to orbit the Sun.",
  },
  {
    id: 58,
    question: "What is the bright object we see in the sky during the day?",
    options: ["Moon", "Sun", "Star", "Cloud"],
    correctAnswer: 1,
    fact: "The Sun is the bright object visible in the daytime sky.",
  },
  {
    id: 59,
    question: "What keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Wind", "Clouds"],
    correctAnswer: 1,
    fact: "Gravity keeps planets moving around the Sun in their orbits.",
  },
  {
    id: 60,
    question: "Which planet is known for its giant red storm?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    fact: "Jupiter has a huge red storm called the Great Red Spot.",
  },
  {
    id: 61,
    question: "Which planet is famous for its rings?",
    options: ["Saturn", "Mars", "Earth", "Venus"],
    correctAnswer: 0,
    fact: "Saturn is known for its beautiful rings.",
  },
  {
    id: 62,
    question: "What do we call the path a planet follows around the Sun?",
    options: ["Orbit", "Line", "Trail", "Route"],
    correctAnswer: 0,
    fact: "Planets move in paths called orbits around the Sun.",
  },
  {
    id: 63,
    question: "Which planet is called the Blue Planet?",
    options: ["Mars", "Earth", "Jupiter", "Neptune"],
    correctAnswer: 1,
    fact: "Earth is called the Blue Planet because of its oceans.",
  },
  {
    id: 64,
    question: "What do stars make at night in the sky?",
    options: ["Dots", "Constellations", "Clouds", "Lights"],
    correctAnswer: 1,
    fact: "Stars form patterns called constellations.",
  },
  {
    id: 65,
    question: "Which planet is known for volcanoes?",
    options: ["Mars", "Mercury", "Jupiter", "Saturn"],
    correctAnswer: 0,
    fact: "Mars has the biggest volcano in the solar system.",
  },
  {
    id: 66,
    question: "Which planet is farthest from the Sun?",
    options: ["Mars", "Neptune", "Earth", "Venus"],
    correctAnswer: 1,
    fact: "Neptune is the farthest planet from the Sun.",
  },
  {
    id: 67,
    question: "What is the name of Earth's natural satellite?",
    options: ["Moon", "Sun", "Star", "Mars"],
    correctAnswer: 0,
    fact: "The Moon orbits around the Earth.",
  },
  {
    id: 68,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Earth", "Mars", "Venus"],
    correctAnswer: 0,
    fact: "Jupiter has more than 90 known moons.",
  },
  {
    id: 69,
    question: "What is a shooting star?",
    options: ["Meteor", "Planet", "Moon", "Star"],
    correctAnswer: 0,
    fact: "A shooting star is actually a meteor burning in the sky.",
  },
  {
    id: 70,
    question: "Which planet is closest to Earth?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    correctAnswer: 1,
    fact: "Venus is usually the closest planet to Earth.",
  },
  {
    id: 71,
    question: "Which planet is known as the Gas Giant?",
    options: ["Earth", "Jupiter", "Mars", "Mercury"],
    correctAnswer: 1,
    fact: "Jupiter is a giant planet mostly made of gas.",
  },
  {
    id: 72,
    question: "Which planet spins in the opposite direction?",
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    correctAnswer: 0,
    fact: "Venus rotates in the opposite direction of most planets.",
  },
  {
    id: 73,
    question: "Which planet is known for its red soil?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    correctAnswer: 0,
    fact: "Mars has red soil because of iron oxide.",
  },
  {
    id: 74,
    question: "What do we call a giant explosion on the Sun?",
    options: ["Sunspot", "Solar flare", "Comet", "Moon"],
    correctAnswer: 1,
    fact: "A solar flare is a powerful explosion on the Sun.",
  },
  {
    id: 75,
    question: "Which planet is smaller than Earth?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: 0,
    fact: "Mercury is smaller than Earth.",
  },
  {
    id: 76,
    question: "Which planet has a thin atmosphere and extreme temperatures?",
    options: ["Mercury", "Mars", "Earth", "Venus"],
    correctAnswer: 0,
    fact: "Mercury has almost no atmosphere and gets very hot and cold.",
  },
  {
    id: 77,
    question: "Which planet has a very fast wind?",
    options: ["Neptune", "Mars", "Venus", "Earth"],
    correctAnswer: 0,
    fact: "Neptune has the fastest winds in the solar system.",
  },
  {
    id: 78,
    question: "What is the name of the first manned Moon landing?",
    options: ["Apollo 11", "Apollo 10", "Gemini 4", "Mercury 7"],
    correctAnswer: 0,
    fact: "Apollo 11 was the first mission to land humans on the Moon.",
  },
  {
    id: 79,
    question: "Which planet is the hottest in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: 1,
    fact: "Venus is the hottest planet due to its thick atmosphere.",
  },
  {
    id: 80,
    question: "Which planet has the longest day?",
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    correctAnswer: 0,
    fact: "Venus takes longer to rotate once than to orbit the Sun.",
  },
  {
    id: 81,
    question: "Which planet is called the Morning Star?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: 0,
    fact: "Venus can be seen shining brightly in the morning sky.",
  },
  {
    id: 82,
    question: "Which planet is called the Evening Star?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: 0,
    fact: "Venus is also visible in the evening sky.",
  },
  {
    id: 83,
    question: "Which planet has water in frozen form at the poles?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    correctAnswer: 0,
    fact: "Mars has ice caps at its poles.",
  },
  {
    id: 84,
    question: "Which planet is famous for the Great Red Spot?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 1,
    fact: "Jupiter has a giant storm called the Great Red Spot.",
  },
  {
    id: 85,
    question: "Which planet is known as the ‘Greenhouse Planet’?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    correctAnswer: 0,
    fact: "Venus has a strong greenhouse effect, making it very hot.",
  },
  {
    id: 86,
    question: "What is a natural satellite?",
    options: ["Moon", "Star", "Planet", "Sun"],
    correctAnswer: 0,
    fact: "A natural satellite is a body that orbits a planet.",
  },
  {
    id: 87,
    question: "Which planet has a tilted axis causing seasons?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 0,
    fact: "Earth’s tilt causes the different seasons.",
  },
  {
    id: 88,
    question: "Which planet is known for having volcanoes and valleys?",
    options: ["Mars", "Earth", "Venus", "Mercury"],
    correctAnswer: 0,
    fact: "Mars has large volcanoes and deep valleys.",
  },
  {
    id: 89,
    question: "What do we call a large collection of stars, gas, and dust?",
    options: ["Galaxy", "Constellation", "Asteroid", "Comet"],
    correctAnswer: 0,
    fact: "A galaxy contains billions of stars along with gas and dust.",
  },
  {
    id: 90,
    question: "Which planet has a ring system made of ice and rock?",
    options: ["Saturn", "Mars", "Earth", "Venus"],
    correctAnswer: 0,
    fact: "Saturn’s rings are made of ice and rock.",
  },
  {
    id: 91,
    question: "What is the Sun mainly made of?",
    options: ["Gas", "Rock", "Water", "Metal"],
    correctAnswer: 0,
    fact: "The Sun is mostly made of hydrogen and helium gas.",
  },
  {
    id: 92,
    question: "Which planet is known for its red dust storms?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    correctAnswer: 0,
    fact: "Mars experiences huge red dust storms.",
  },
  {
    id: 93,
    question: "Which planet has the fastest rotation?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: 1,
    fact: "Jupiter spins very fast, making a day just 10 hours.",
  },
  {
    id: 94,
    question: "What is the brightest object in the night sky?",
    options: ["Moon", "Sun", "Venus", "Mars"],
    correctAnswer: 0,
    fact: "The Moon is the brightest object in the night sky.",
  },
  {
    id: 95,
    question: "Which planet is known for its strong winds and storms?",
    options: ["Neptune", "Mars", "Venus", "Earth"],
    correctAnswer: 0,
    fact: "Neptune has the fastest winds in the solar system.",
  },
  {
    id: 96,
    question:
      "What do we call a small body of ice and dust that orbits the Sun?",
    options: ["Comet", "Asteroid", "Planet", "Moon"],
    correctAnswer: 0,
    fact: "A comet is made of ice and dust and has a glowing tail.",
  },
  {
    id: 97,
    question:
      "Which planet is known for its white clouds and thick atmosphere?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    correctAnswer: 0,
    fact: "Venus has thick clouds in its atmosphere.",
  },
  {
    id: 98,
    question: "Which planet is smaller than Mercury?",
    options: ["Pluto", "Venus", "Mars", "Earth"],
    correctAnswer: 0,
    fact: "Pluto is smaller than Mercury and is now a dwarf planet.",
  },
  {
    id: 99,
    question: "Which planet has a red spot that is a giant storm?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 1,
    fact: "Jupiter’s Great Red Spot is a giant storm.",
  },
  {
    id: 100,
    question: "Which planet is closest to Jupiter?",
    options: ["Mars", "Saturn", "Venus", "Earth"],
    correctAnswer: 1,
    fact: "Saturn is the next planet after Jupiter from the Sun.",
  },
];

export default function SolarSystemQuiz() {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    setCurrentQuestions(getRandomQuestions());
  }, []);
  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === currentQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setShowFact(true);
  };
  // Function to get random questions
  const getRandomQuestions = (count: number = 10): Question[] => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestions(getRandomQuestions());
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFact(false);
  };
  // Don't render until questions are loaded
  if (currentQuestions.length === 0) {
    return (
      <GameLayout
        title="Solar System Quiz"
        description="Test your knowledge about our Sun and solar system"
      >
        <div className="text-center py-16">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading questions...</p>
        </div>
      </GameLayout>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  return (
    <GameLayout
      title="Solar System Quiz"
      description="Test your knowledge about our Sun and solar system"
    >
      <div className="max-w-4xl mx-auto">
        {/* Progress */}
        {/* Progress */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold text-white">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
            <div className="text-lg font-semibold text-yellow-400">
              Score: {score}
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / currentQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
        {!showResult ? (
          <>
            {/* Question */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 mb-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {currentQuestions[currentQuestionIndex].question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showFact}
                      className={`p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? index ===
                            currentQuestions[currentQuestionIndex].correctAnswer
                            ? "border-green-500 bg-green-500 bg-opacity-20"
                            : "border-red-500 bg-red-500 bg-opacity-20"
                          : showFact &&
                            index ===
                              currentQuestions[currentQuestionIndex]
                                .correctAnswer
                          ? "border-green-500 bg-green-500 bg-opacity-20"
                          : "border-gray-600 hover:border-gray-500 bg-gray-800"
                      } disabled:opacity-50`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            selectedAnswer === index
                              ? index ===
                                currentQuestions[currentQuestionIndex]
                                  .correctAnswer
                                ? "bg-green-500"
                                : "bg-red-500"
                              : showFact &&
                                index ===
                                  currentQuestions[currentQuestionIndex]
                                    .correctAnswer
                              ? "bg-green-500"
                              : "bg-gray-600"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-white">{option}</span>
                      </div>
                    </button>
                  )
                )}
              </div>

              {/* Fact */}
              {showFact && (
                <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    💡 Did You Know?
                  </h4>
                  <p className="text-gray-300">
                    {currentQuestions[currentQuestionIndex].fact}
                  </p>
                </div>
              )}
            </div>

            {/* Next Button */}
            {showFact && (
              <div className="text-center">
                <button
                  onClick={nextQuestion}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-colors"
                >
                  {currentQuestionIndex < currentQuestions.length - 1
                    ? "Next Question →"
                    : "See Results"}
                </button>
              </div>
            )}
          </>
        ) : (
          /* Results */
          <div className="text-center">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Quiz Complete!
              </h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {score} / {currentQuestions.length}
              </div>
              <div className="text-xl text-gray-400 mb-6">
                {score === currentQuestions.length
                  ? "Perfect Score! 🌟"
                  : score >= currentQuestions.length / 2
                  ? "Great Job! 🚀"
                  : "Keep Learning! 📚"}
              </div>
              <button
                onClick={restartQuiz}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xl transition-colors"
              >
                🔄 Play Again
              </button>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-white">Solar Knowledge</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">☀️</div>
              <div>4.6 Billion years old</div>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">🔥</div>
              <div>27 Million °F core</div>
            </div>
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl mb-2">💫</div>
              <div>93 Million miles away</div>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
