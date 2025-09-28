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
    question: "What is the temperature of the Sun's core?",
    options: [
      "1 million °C",
      "15 million °C",
      "100 thousand °C",
      "500 million °C",
    ],
    correctAnswer: 1,
    fact: "The Sun's core reaches 15 million °C, where nuclear fusion occurs.",
  },
  {
    id: 2,
    question: "How long does it take sunlight to reach Earth?",
    options: ["1 second", "8 minutes", "1 hour", "1 day"],
    correctAnswer: 1,
    fact: "Sunlight takes 8 minutes and 20 seconds to travel 93 million miles to Earth.",
  },
  {
    id: 3,
    question: "What are solar flares?",
    options: [
      "Cool spots on the Sun",
      "Magnetic energy explosions",
      "Solar wind patterns",
      "Sun's rotation features",
    ],
    correctAnswer: 1,
    fact: "Solar flares are massive explosions of magnetic energy on the Sun's surface.",
  },
  {
    id: 4,
    question: "How often does the Sun's magnetic field reverse?",
    options: ["Every year", "Every 11 years", "Every 100 years", "Never"],
    correctAnswer: 1,
    fact: "The Sun's magnetic field reverses every 11 years during solar maximum.",
  },
  {
    id: 5,
    question: "What is the outermost layer of the Sun’s atmosphere called?",
    options: ["Core", "Corona", "Photosphere", "Chromosphere"],
    correctAnswer: 1,
    fact: "The corona is the Sun’s outermost atmosphere, visible during a total solar eclipse.",
  },
  {
    id: 6,
    question: "What powers the Sun's energy production?",
    options: [
      "Nuclear fusion",
      "Nuclear fission",
      "Chemical burning",
      "Gravitational collapse",
    ],
    correctAnswer: 0,
    fact: "The Sun’s energy comes from nuclear fusion of hydrogen into helium in its core.",
  },
  {
    id: 7,
    question: "What are sunspots?",
    options: [
      "Dark, cooler regions on the Sun",
      "Solar explosions",
      "Storms on Earth",
      "Burning gases",
    ],
    correctAnswer: 0,
    fact: "Sunspots are cooler, darker regions caused by magnetic field activity.",
  },
  {
    id: 8,
    question: "How old is the Sun?",
    options: [
      "500 million years",
      "4.6 billion years",
      "10 billion years",
      "100 million years",
    ],
    correctAnswer: 1,
    fact: "The Sun is about 4.6 billion years old and halfway through its main sequence life.",
  },
  {
    id: 9,
    question: "What will the Sun eventually become?",
    options: ["Black hole", "Red giant", "Neutron star", "White dwarf"],
    correctAnswer: 3,
    fact: "The Sun will expand into a red giant and eventually shrink into a white dwarf.",
  },
  {
    id: 10,
    question: "Which element makes up most of the Sun?",
    options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
    correctAnswer: 1,
    fact: "The Sun is mostly hydrogen (about 74%) and helium (about 24%).",
  },
  {
    id: 11,
    question: "What are coronal mass ejections (CMEs)?",
    options: [
      "Streams of solar wind",
      "Massive bursts of plasma",
      "Magnetic loops",
      "Sunspots",
    ],
    correctAnswer: 1,
    fact: "CMEs are giant bubbles of plasma and magnetic field ejected from the Sun.",
  },
  {
    id: 12,
    question: "What type of star is the Sun?",
    options: ["Red giant", "Neutron star", "Yellow dwarf", "White dwarf"],
    correctAnswer: 2,
    fact: "The Sun is a G-type main-sequence star, also called a yellow dwarf.",
  },
  {
    id: 13,
    question: "Which part of the Sun do we see from Earth?",
    options: ["Corona", "Core", "Photosphere", "Radiative zone"],
    correctAnswer: 2,
    fact: "The photosphere is the visible surface of the Sun we see from Earth.",
  },
  {
    id: 14,
    question: "What is the average distance between the Earth and the Sun?",
    options: [
      "93 million miles",
      "1 million miles",
      "50 million miles",
      "150 thousand miles",
    ],
    correctAnswer: 0,
    fact: "The Earth orbits the Sun at an average distance of 93 million miles (150 million km).",
  },
  {
    id: 15,
    question: "What causes the auroras (Northern and Southern Lights)?",
    options: [
      "Moonlight",
      "Solar wind interacting with Earth’s atmosphere",
      "Volcanic activity",
      "Ocean currents",
    ],
    correctAnswer: 1,
    fact: "Auroras occur when charged particles from the solar wind collide with Earth's atmosphere.",
  },
  {
    id: 16,
    question: "What is the Sun’s approximate diameter?",
    options: [
      "1.4 million km",
      "400 thousand km",
      "10 million km",
      "700 thousand km",
    ],
    correctAnswer: 0,
    fact: "The Sun’s diameter is about 1.4 million kilometers.",
  },
  {
    id: 17,
    question: "What protects Earth from harmful solar radiation?",
    options: ["Ozone layer", "Earth’s magnetic field", "Clouds", "The Moon"],
    correctAnswer: 1,
    fact: "Earth’s magnetic field deflects much of the solar wind and harmful radiation.",
  },
  {
    id: 18,
    question: "Which spacecraft was the first to 'touch' the Sun’s atmosphere?",
    options: ["Voyager 1", "Parker Solar Probe", "SOHO", "Solar Orbiter"],
    correctAnswer: 1,
    fact: "NASA’s Parker Solar Probe entered the Sun’s outer atmosphere (the corona) in 2021.",
  },
  {
    id: 19,
    question: "What is solar wind?",
    options: [
      "Streams of charged particles",
      "Light waves",
      "Magnetic storms",
      "Air from the Sun",
    ],
    correctAnswer: 0,
    fact: "Solar wind is a stream of charged particles constantly flowing from the Sun.",
  },
  {
    id: 20,
    question: "What is the lifespan of the Sun in total?",
    options: [
      "5 billion years",
      "10 billion years",
      "20 billion years",
      "50 billion years",
    ],
    correctAnswer: 1,
    fact: "The Sun’s total lifespan is about 10 billion years; it’s currently 4.6 billion years old.",
  },
  {
    id: 21,
    question: "What color is the Sun when viewed from space?",
    options: ["Yellow", "Red", "White", "Orange"],
    correctAnswer: 2,
    fact: "From space, the Sun appears white because it emits all colors of light.",
  },
  {
    id: 22,
    question:
      "Which layer of the Sun lies between the core and convective zone?",
    options: ["Photosphere", "Radiative zone", "Chromosphere", "Corona"],
    correctAnswer: 1,
    fact: "The radiative zone transports energy outward from the Sun’s core.",
  },
  {
    id: 23,
    question: "What type of energy is released by the Sun?",
    options: ["Thermal and light", "Sound", "Mechanical", "Electrical"],
    correctAnswer: 0,
    fact: "The Sun mainly releases energy in the form of heat (thermal) and light (radiation).",
  },
  {
    id: 24,
    question: "How many Earths could fit across the Sun’s diameter?",
    options: ["10", "100", "1,000", "109"],
    correctAnswer: 3,
    fact: "About 109 Earths could fit side by side across the Sun’s diameter.",
  },
  {
    id: 25,
    question: "What is the Sun’s rotation period at its equator?",
    options: ["1 day", "7 days", "25 days", "1 year"],
    correctAnswer: 2,
    fact: "The Sun rotates about once every 25 days at the equator.",
  },
  {
    id: 26,
    question:
      "What is the faint glow seen around the Sun during a solar eclipse?",
    options: ["Chromosphere", "Corona", "Photosphere", "Solar wind"],
    correctAnswer: 1,
    fact: "The corona is visible as a glowing halo around the Sun during a total solar eclipse.",
  },
  {
    id: 27,
    question: "Which planet receives the most solar energy?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 1,
    fact: "Mercury, being closest to the Sun, receives the most solar energy.",
  },
  {
    id: 28,
    question: "What happens during a solar eclipse?",
    options: [
      "Moon passes between Earth and Sun",
      "Earth passes between Sun and Moon",
      "Sun explodes",
      "Stars block the Sun",
    ],
    correctAnswer: 0,
    fact: "A solar eclipse occurs when the Moon blocks sunlight from reaching Earth.",
  },
  {
    id: 29,
    question:
      "What is the boundary between the Sun’s visible surface and outer layers?",
    options: ["Photosphere", "Corona", "Radiative zone", "Convective zone"],
    correctAnswer: 0,
    fact: "The photosphere marks the visible surface of the Sun.",
  },
  {
    id: 30,
    question:
      "Which spacecraft has provided continuous solar observation since 1995?",
    options: ["Voyager 2", "SOHO", "Parker Solar Probe", "New Horizons"],
    correctAnswer: 1,
    fact: "The SOHO spacecraft has been observing the Sun continuously since 1995.",
  },
  {
    id: 31,
    question: "What is differential rotation of the Sun?",
    options: [
      "Sun spins the same everywhere",
      "Equator rotates faster than poles",
      "Poles rotate faster than equator",
      "Sun doesn’t rotate",
    ],
    correctAnswer: 1,
    fact: "The Sun rotates faster at the equator (about 25 days) than at the poles (about 35 days).",
  },
  {
    id: 32,
    question: "Which particles are mainly released in solar wind?",
    options: [
      "Protons and electrons",
      "Neutrons",
      "Oxygen atoms",
      "Gamma rays",
    ],
    correctAnswer: 0,
    fact: "Solar wind is mostly made of charged particles like protons and electrons.",
  },
  {
    id: 33,
    question: "What is the heliosphere?",
    options: [
      "Sun’s magnetic bubble",
      "Sun’s corona",
      "Space around Earth",
      "Solar core",
    ],
    correctAnswer: 0,
    fact: "The heliosphere is a giant bubble created by the solar wind that surrounds the solar system.",
  },
  {
    id: 34,
    question: "Which process converts hydrogen to helium in the Sun?",
    options: [
      "Photosynthesis",
      "Nuclear fusion",
      "Nuclear fission",
      "Combustion",
    ],
    correctAnswer: 1,
    fact: "Nuclear fusion in the Sun’s core turns hydrogen into helium, releasing energy.",
  },
  {
    id: 35,
    question: "Which telescope was launched to study the Sun in 2010?",
    options: [
      "James Webb",
      "Solar Dynamics Observatory (SDO)",
      "Kepler",
      "Hubble",
    ],
    correctAnswer: 1,
    fact: "NASA’s Solar Dynamics Observatory studies the Sun’s atmosphere and activity.",
  },
  {
    id: 36,
    question: "What is a solar prominence?",
    options: ["Dark spot", "Loop of plasma", "Shockwave", "Solar flare"],
    correctAnswer: 1,
    fact: "Prominences are large, bright loops of plasma extending from the Sun’s surface.",
  },
  {
    id: 37,
    question: "What causes sunspots?",
    options: [
      "Cool gases",
      "Strong magnetic fields",
      "Eclipses",
      "Solar flares",
    ],
    correctAnswer: 1,
    fact: "Sunspots form due to intense magnetic field activity that lowers surface temperature.",
  },
  {
    id: 38,
    question: "What is the visible spectrum of sunlight called?",
    options: ["Gamma rays", "Infrared", "White light", "Ultraviolet"],
    correctAnswer: 2,
    fact: "Sunlight appears as white light, a combination of all visible colors.",
  },
  {
    id: 39,
    question: "How many times larger is the Sun’s mass compared to Earth?",
    options: ["100x", "1,000x", "300,000x", "1 million x"],
    correctAnswer: 2,
    fact: "The Sun is about 333,000 times more massive than Earth.",
  },
  {
    id: 40,
    question: "What is the approximate surface temperature of the Sun?",
    options: ["2,000 °C", "5,500 °C", "10,000 °C", "15,000 °C"],
    correctAnswer: 1,
    fact: "The surface of the Sun (photosphere) has an average temperature of about 5,500 °C.",
  },
  {
    id: 41,
    question:
      "Which planet has the longest day due to slow rotation but still receives sunlight from the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 0,
    fact: "Venus rotates so slowly that a day on Venus is longer than its year.",
  },
  {
    id: 42,
    question: "What is the main effect of solar storms on Earth?",
    options: [
      "Increase in earthquakes",
      "Communication disruptions",
      "Stronger gravity",
      "Volcanic eruptions",
    ],
    correctAnswer: 1,
    fact: "Solar storms can disrupt satellites, radio communication, and power grids.",
  },
  {
    id: 43,
    question: "Which color of light does the Sun emit most strongly?",
    options: ["Blue-green", "Red", "Yellow", "Infrared"],
    correctAnswer: 0,
    fact: "The Sun’s peak emission is in the blue-green range, though it appears white to us.",
  },
  {
    id: 44,
    question: "What keeps the Sun from collapsing under its own gravity?",
    options: [
      "Magnetic fields",
      "Nuclear fusion pressure",
      "Solar wind",
      "Rotation",
    ],
    correctAnswer: 1,
    fact: "The outward pressure from nuclear fusion balances the inward pull of gravity.",
  },
  {
    id: 45,
    question: "What is a solar cycle?",
    options: [
      "Sun’s orbit",
      "11-year magnetic activity cycle",
      "Rotation of the Sun",
      "Nuclear cycle",
    ],
    correctAnswer: 1,
    fact: "The Sun follows an 11-year cycle of increasing and decreasing magnetic activity.",
  },
  {
    id: 46,
    question: "What is the second most abundant element in the Sun?",
    options: ["Helium", "Oxygen", "Carbon", "Nitrogen"],
    correctAnswer: 0,
    fact: "After hydrogen, helium is the second most abundant element in the Sun.",
  },
  {
    id: 47,
    question: "What is the effect of increased sunspot activity on Earth?",
    options: [
      "Colder weather",
      "Warmer weather",
      "More volcanic eruptions",
      "No effect",
    ],
    correctAnswer: 1,
    fact: "Increased sunspot activity is often linked to slightly warmer global temperatures.",
  },
  {
    id: 48,
    question: "What does 'solar maximum' mean?",
    options: [
      "When the Sun is farthest from Earth",
      "Peak of solar activity",
      "When the Sun is closest to Earth",
      "Sun’s rotation maximum",
    ],
    correctAnswer: 1,
    fact: "Solar maximum is the period of peak sunspot and solar flare activity in the 11-year cycle.",
  },
  {
    id: 49,
    question: "What is 'solar minimum'?",
    options: [
      "Fewest sunspots and activity",
      "Strongest flares",
      "Shortest day of the year",
      "Sun’s slowest rotation",
    ],
    correctAnswer: 0,
    fact: "Solar minimum is when the Sun has the lowest sunspot and flare activity.",
  },
  {
    id: 50,
    question: "Which planet experiences the strongest solar wind effects?",
    options: ["Earth", "Mercury", "Saturn", "Neptune"],
    correctAnswer: 1,
    fact: "Mercury, being closest to the Sun, is heavily affected by solar wind.",
  },
  {
    id: 51,
    question: "What part of the Sun produces visible light?",
    options: ["Core", "Radiative zone", "Photosphere", "Corona"],
    correctAnswer: 2,
    fact: "The photosphere produces the sunlight visible from Earth.",
  },
  {
    id: 52,
    question: "Which type of radiation from the Sun causes sunburn?",
    options: ["Infrared", "Ultraviolet", "Gamma rays", "X-rays"],
    correctAnswer: 1,
    fact: "Ultraviolet (UV) radiation is responsible for sunburn.",
  },
  {
    id: 53,
    question:
      "What happens when solar wind interacts with Earth’s magnetic field?",
    options: ["Tsunamis", "Auroras", "Earthquakes", "Hurricanes"],
    correctAnswer: 1,
    fact: "Auroras are created when solar wind particles collide with Earth's atmosphere.",
  },
  {
    id: 54,
    question:
      "What do we call the stream of energy from the Sun that travels as light?",
    options: [
      "Solar wind",
      "Electromagnetic radiation",
      "Gravity waves",
      "Plasma",
    ],
    correctAnswer: 1,
    fact: "The Sun emits electromagnetic radiation, which includes visible light.",
  },
  {
    id: 55,
    question: "Which space mission first confirmed solar wind in 1959?",
    options: ["Luna 1", "Apollo 11", "Pioneer 10", "Voyager 1"],
    correctAnswer: 0,
    fact: "The Soviet Luna 1 mission provided the first direct evidence of solar wind.",
  },
  {
    id: 56,
    question: "What is the approximate speed of solar wind?",
    options: ["10 km/s", "100 km/s", "400 km/s", "1000 km/s"],
    correctAnswer: 2,
    fact: "The solar wind travels at around 400 km per second on average.",
  },
  {
    id: 57,
    question: "Why is the Sun round in shape?",
    options: [
      "Magnetic fields",
      "Nuclear fusion",
      "Gravity pulls equally in all directions",
      "Solar wind pressure",
    ],
    correctAnswer: 2,
    fact: "Gravity pulls equally in all directions, making the Sun nearly spherical.",
  },
  {
    id: 58,
    question: "Which star is the closest neighbor to our Sun?",
    options: ["Betelgeuse", "Sirius", "Alpha Centauri", "Proxima Centauri"],
    correctAnswer: 3,
    fact: "Proxima Centauri, about 4.24 light-years away, is the closest star to the Sun.",
  },
  {
    id: 59,
    question: "What is the Sun’s escape velocity?",
    options: ["11 km/s", "100 km/s", "600 km/s", "2000 km/s"],
    correctAnswer: 2,
    fact: "The escape velocity from the Sun is about 618 km/s.",
  },
  {
    id: 60,
    question: "What is the solar constant?",
    options: [
      "Sun’s core pressure",
      "Amount of solar energy received per unit area on Earth",
      "Sun’s rotation speed",
      "Number of sunspots",
    ],
    correctAnswer: 1,
    fact: "The solar constant is the average solar energy received per square meter at Earth’s distance.",
  },
  {
    id: 61,
    question: "What is the main gas in the Sun’s core undergoing fusion?",
    options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    correctAnswer: 1,
    fact: "Hydrogen nuclei fuse into helium in the Sun’s core, releasing energy.",
  },
  {
    id: 62,
    question: "What protects astronauts from direct solar radiation in space?",
    options: [
      "Earth’s ozone",
      "Magnetic shields in spacecraft",
      "Water",
      "Lead",
    ],
    correctAnswer: 1,
    fact: "Spacecraft use special shielding and technology to reduce radiation exposure.",
  },
  {
    id: 63,
    question: "What is a solar storm composed of?",
    options: [
      "Water vapor",
      "Plasma and magnetic fields",
      "Dust",
      "Carbon dioxide",
    ],
    correctAnswer: 1,
    fact: "Solar storms are bursts of plasma and magnetic energy released from the Sun.",
  },
  {
    id: 64,
    question: "What happens during a geomagnetic storm on Earth?",
    options: [
      "Volcanoes erupt",
      "Satellites malfunction",
      "Sunspots increase",
      "Earth spins faster",
    ],
    correctAnswer: 1,
    fact: "Geomagnetic storms can disrupt satellites, navigation, and communication systems.",
  },
  {
    id: 65,
    question: "How does the Sun compare in size to the Milky Way galaxy?",
    options: ["Much larger", "Tiny", "Equal in size", "Half the size"],
    correctAnswer: 1,
    fact: "The Sun is just one of about 200 billion stars in the Milky Way.",
  },
  {
    id: 66,
    question: "What is the Sun’s average density compared to water?",
    options: ["Equal", "Half", "1.4 times denser", "10 times denser"],
    correctAnswer: 2,
    fact: "The Sun’s average density is about 1.4 times that of water.",
  },
  {
    id: 67,
    question: "What causes the Sun to shine?",
    options: [
      "Burning gases",
      "Nuclear fusion reactions",
      "Chemical reactions",
      "Friction",
    ],
    correctAnswer: 1,
    fact: "The Sun shines due to energy released by nuclear fusion in its core.",
  },
  {
    id: 68,
    question: "What is the approximate pressure at the Sun’s core?",
    options: [
      "10 million atmospheres",
      "100 billion atmospheres",
      "250 billion atmospheres",
      "1,000 atmospheres",
    ],
    correctAnswer: 2,
    fact: "The pressure at the Sun’s core is around 250 billion atmospheres.",
  },
  {
    id: 69,
    question: "What type of star will the Sun eventually become?",
    options: ["Supernova", "Neutron star", "White dwarf", "Black hole"],
    correctAnswer: 2,
    fact: "The Sun is not massive enough to explode; it will end as a white dwarf.",
  },
  {
    id: 70,
    question: "How much of the solar system’s mass is contained in the Sun?",
    options: ["50%", "74%", "92%", "99.8%"],
    correctAnswer: 3,
    fact: "The Sun contains 99.8% of all mass in the solar system.",
  },
  {
    id: 71,
    question: "What happens when the Sun runs out of hydrogen?",
    options: [
      "It shrinks",
      "It becomes a red giant",
      "It explodes",
      "It turns black",
    ],
    correctAnswer: 1,
    fact: "When hydrogen runs out, the Sun will expand into a red giant.",
  },
  {
    id: 72,
    question: "How far is the Sun from the center of the Milky Way?",
    options: [
      "8 light-minutes",
      "26,000 light-years",
      "1 billion light-years",
      "100 light-years",
    ],
    correctAnswer: 1,
    fact: "The Sun is located about 26,000 light-years from the galaxy’s center.",
  },
  {
    id: 73,
    question: "What is a solar granule?",
    options: [
      "Magnetic loop",
      "Bright convective cell",
      "Sunspot",
      "Solar flare",
    ],
    correctAnswer: 1,
    fact: "Granules are bright cells on the Sun’s surface formed by convection currents.",
  },
  {
    id: 74,
    question: "Which planet receives about half the sunlight Earth does?",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
    correctAnswer: 1,
    fact: "Mars receives about half the sunlight that Earth receives.",
  },
  {
    id: 75,
    question: "What is the approximate luminosity of the Sun?",
    options: [
      "3.8 × 10^26 watts",
      "1 × 10^12 watts",
      "5 × 10^6 watts",
      "7 × 10^30 watts",
    ],
    correctAnswer: 0,
    fact: "The Sun radiates about 3.8 × 10^26 watts of energy every second.",
  },
  {
    id: 76,
    question: "Which solar feature appears as bright arcs of gas?",
    options: ["Sunspots", "Prominences", "Solar flares", "Granules"],
    correctAnswer: 1,
    fact: "Solar prominences appear as glowing arcs of plasma extending from the Sun.",
  },
  {
    id: 77,
    question:
      "What type of waves do scientists use to study the Sun’s interior?",
    options: [
      "Sound waves",
      "Seismic waves",
      "Helioseismic waves",
      "Gravity waves",
    ],
    correctAnswer: 2,
    fact: "Helioseismology uses solar oscillations (helioseismic waves) to study the Sun’s interior.",
  },
  {
    id: 78,
    question: "What are spicules on the Sun?",
    options: [
      "Dark spots",
      "Bright gas jets",
      "Magnetic storms",
      "X-ray bursts",
    ],
    correctAnswer: 1,
    fact: "Spicules are short-lived jets of gas shooting up from the Sun’s surface.",
  },
  {
    id: 79,
    question: "What is the Sun’s magnetic field strength compared to Earth’s?",
    options: ["Weaker", "Similar", "Stronger", "Nonexistent"],
    correctAnswer: 2,
    fact: "The Sun’s magnetic field is much stronger and more dynamic than Earth’s.",
  },
  {
    id: 80,
    question:
      "Which scientist proposed that the Sun is powered by nuclear fusion?",
    options: ["Einstein", "Hans Bethe", "Galileo", "Newton"],
    correctAnswer: 1,
    fact: "Hans Bethe explained the nuclear fusion process that powers the Sun in the 1930s.",
  },
  {
    id: 81,
    question: "What is the main driver of the Sun's 11-year solar cycle?",
    options: [
      "Sun’s rotation",
      "Magnetic field changes",
      "Solar wind pressure",
      "Planetary alignment",
    ],
    correctAnswer: 1,
    fact: "The solar cycle is driven by the Sun's magnetic field flipping polarity every 11 years.",
  },
  {
    id: 82,
    question: "Which NASA mission continuously monitors the Sun?",
    options: ["Hubble Space Telescope", "SOHO", "Chandra", "Voyager 2"],
    correctAnswer: 1,
    fact: "The Solar and Heliospheric Observatory (SOHO) has monitored the Sun since 1995.",
  },
  {
    id: 83,
    question: "What happens in the Sun's convective zone?",
    options: [
      "Nuclear fusion",
      "Light absorption",
      "Energy transfer by plasma movement",
      "Magnetic storms",
    ],
    correctAnswer: 2,
    fact: "In the convective zone, hot plasma rises and cooler plasma sinks, transferring energy outward.",
  },
  {
    id: 84,
    question: "What is the fate of the Sun in about 5 billion years?",
    options: [
      "Turn into a black hole",
      "Explode as a supernova",
      "Expand into a red giant",
      "Collapse into a neutron star",
    ],
    correctAnswer: 2,
    fact: "The Sun will expand into a red giant before eventually becoming a white dwarf.",
  },
  {
    id: 85,
    question: "What is helioseismology?",
    options: [
      "Study of solar winds",
      "Study of Sun’s oscillations",
      "Study of solar flares",
      "Study of auroras",
    ],
    correctAnswer: 1,
    fact: "Helioseismology studies pressure waves inside the Sun to understand its internal structure.",
  },
  {
    id: 86,
    question: "What does the Parker Solar Probe study?",
    options: [
      "Sun’s surface",
      "Sun’s outer corona",
      "Earth’s auroras",
      "Comets near the Sun",
    ],
    correctAnswer: 1,
    fact: "NASA’s Parker Solar Probe is the first mission to fly through the Sun’s corona.",
  },
  {
    id: 87,
    question: "What protects Earth from most solar radiation?",
    options: ["Atmosphere", "Magnetic field", "Ozone layer", "Clouds"],
    correctAnswer: 1,
    fact: "Earth’s magnetic field deflects harmful charged particles from the solar wind.",
  },
  {
    id: 88,
    question: "What is the Sun’s average density compared to water?",
    options: [
      "Much denser than water",
      "Same as water",
      "Less dense than water",
      "Twice as dense as water",
    ],
    correctAnswer: 0,
    fact: "The Sun’s density is about 1.4 times that of water, despite being mostly hydrogen.",
  },
  {
    id: 89,
    question: "Which part of the Sun emits solar neutrinos?",
    options: ["Photosphere", "Corona", "Core", "Chromosphere"],
    correctAnswer: 2,
    fact: "Solar neutrinos are produced during nuclear fusion in the Sun’s core.",
  },
  {
    id: 90,
    question: "What causes the Sun’s corona to be hotter than its surface?",
    options: [
      "Fusion reactions",
      "Magnetic reconnection",
      "Gravity",
      "Rotational speed",
    ],
    correctAnswer: 1,
    fact: "The corona is heated by magnetic reconnection and plasma waves, reaching millions of °C.",
  },
  {
    id: 91,
    question: "What is the approximate luminosity of the Sun?",
    options: [
      "3.8 × 10^26 watts",
      "1 × 10^20 watts",
      "9.5 × 10^15 watts",
      "2 × 10^30 watts",
    ],
    correctAnswer: 0,
    fact: "The Sun emits about 3.8 × 10^26 watts of energy every second.",
  },
  {
    id: 92,
    question: "What type of radiation makes up most of the Sun’s light?",
    options: ["Gamma rays", "Ultraviolet", "Visible light", "Infrared"],
    correctAnswer: 2,
    fact: "Most of the Sun’s radiation is in the visible light spectrum.",
  },
  {
    id: 93,
    question: "What is a solar prominence?",
    options: [
      "Dark spot on the Sun",
      "Loop of plasma ejected",
      "Shockwave of solar wind",
      "Magnetic pole flip",
    ],
    correctAnswer: 1,
    fact: "Solar prominences are large, bright plasma loops anchored to the Sun’s surface.",
  },
  {
    id: 94,
    question: "Which color is the Sun actually when viewed from space?",
    options: ["Yellow", "Red", "White", "Orange"],
    correctAnswer: 2,
    fact: "The Sun is actually white, but appears yellow from Earth due to atmospheric scattering.",
  },
  {
    id: 95,
    question: "What is the escape velocity from the Sun’s surface?",
    options: ["11 km/s", "618 km/s", "100 km/s", "300,000 km/s"],
    correctAnswer: 1,
    fact: "Objects need to travel at 618 km/s to escape the Sun’s gravity from its surface.",
  },
  {
    id: 96,
    question: "What is the chemical composition of the Sun?",
    options: [
      "Hydrogen and Helium",
      "Carbon and Iron",
      "Oxygen and Silicon",
      "Nitrogen and Argon",
    ],
    correctAnswer: 0,
    fact: "The Sun is about 74% hydrogen and 24% helium by mass.",
  },
  {
    id: 97,
    question: "What is differential rotation of the Sun?",
    options: [
      "Equator rotates faster than poles",
      "Poles rotate faster than equator",
      "All layers rotate equally",
      "Sun rotates like a solid body",
    ],
    correctAnswer: 0,
    fact: "The Sun’s equator rotates faster than its poles due to its gaseous nature.",
  },
  {
    id: 98,
    question: "What is the estimated remaining lifespan of the Sun?",
    options: [
      "1 billion years",
      "3 billion years",
      "5 billion years",
      "10 billion years",
    ],
    correctAnswer: 2,
    fact: "The Sun has about 5 billion years left before becoming a red giant.",
  },
  {
    id: 99,
    question: "What happens during a total solar eclipse?",
    options: [
      "Earth blocks Sun",
      "Moon blocks Sun",
      "Sun blocks Moon",
      "Sun blocks Earth",
    ],
    correctAnswer: 1,
    fact: "A total solar eclipse occurs when the Moon passes directly between Earth and the Sun.",
  },
  {
    id: 100,
    question: "What is the importance of the Sun for Earth’s climate?",
    options: [
      "Provides oxygen",
      "Controls magnetic field",
      "Main source of heat and energy",
      "Prevents earthquakes",
    ],
    correctAnswer: 2,
    fact: "The Sun’s energy drives Earth’s climate and weather systems.",
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
