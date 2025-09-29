import { Story } from "./types";

// app/stories/data.ts
export const stories: Story[] = [
  {
    id: "solar-diary",
    title: "The Diary of a Solar Storm",
    description:
      "Follow Solara, a playful solar storm, as she travels from the Sun to Earth.",
    coverImage: "https://i.ibb.co.com/ZRMj3MZs/sola.png",
    pdfUrl: "",
    pages: [
      {
        id: 1,
        title: "My Diary Begins",
        text: `Dear Diary,
I am Solara, a solar storm born from the fiery heart of the Sun. Today, I begin my journey through the vast sky between my home and Earth. I carry both light and power, and along the way, I will tell you how I touch the lives of everyone below.`,
        narrationTone: "Calm, magical, like a bedtime story opening.",
        illustration: {
          description:
            "Big glowing Sun with golden-orange flames. Solara with a scarf smiling beside her diary.",
          image: "/sun.png",
        },
        animation: ["sun-glow", "solara-wave", "diary-flip"],
      },
      {
        id: 2,
        title: "My Fiery Birth",
        text: `I was born in a solar eruption. The Sun suddenly burst with energy, and there I was — a shining flare filled with heat, light, and plasma. Some humans call me a solar flare, and when I carry clouds with me, they call it a coronal mass ejection, or CME. Big words for such a tiny spark like me!`,
        narrationTone: "Excited, playful.",
        illustration: {
          description:
            "Close-up of Sun surface with plasma arcs. Solara flying out of a flare.",
          image: "",
        },
        animation: ["plasma-wave", "solara-shoot", "bubble-words"],
      },
      {
        id: 3,
        title: "What is Space Weather?",
        text: `Humans call my journey space weather. Just like clouds, rain, or storms on Earth, I make space a place of calm or chaos. Space weather is when the Sun’s activity travels out into space — and sometimes all the way to Earth.`,
        narrationTone: "Proud, like a friendly teacher.",
        illustration: {
          description:
            "Split page: Earth weather with clouds and rain vs. space weather with Solara zooming toward Earth.",
          image: "",
        },
        animation: ["page-flip", "rain-move", "solara-zoom"],
      },
      {
        id: 4,
        title: "Meeting the Satellites",
        text: `On my way, I met shiny machines floating high above Earth — satellites! They blink and hum as they send messages for GPS, phones, and the internet. But when I rush too close, their signals flicker. Sometimes people on Earth lose directions or can’t make a call — all because of me!`,
        narrationTone: "Playful, a little mischievous.",
        illustration: {
          description:
            "Earth’s orbit full of satellites with faces. One looks dizzy as Solara zips past.",
          image: "",
        },
        animation: ["solara-zip", "signal-flicker", "satellite-shake"],
      },
      {
        id: 5,
        title: "Northern Lights Magic",
        text: `But I’m not all trouble! When I touch Earth’s magnetic shield, I paint the skies with dancing lights — auroras! People call them the Northern Lights and Southern Lights. They shimmer in green, pink, and purple, and children on Earth watch with wonder. That is my gift of beauty.`,
        narrationTone: "Dreamy, magical, proud.",
        illustration: {
          description:
            "Children in snowy mountains watching auroras. Solara paints the sky with a glowing brush.",
          image: "",
        },
        animation: ["aurora-wave", "brush-trail", "children-glow"],
      },
      {
        id: 6,
        title: "Shaking the Power Grids",
        text: `Dear Diary, today I brushed against Earth’s magnetic shield a little too strongly. Down below, power grids buzzed and flickered. Lights in houses blinked on and off. I never mean harm, but sometimes my energy is just too big!`,
        narrationTone: "Gentle, a little guilty.",
        illustration: {
          description:
            "City at night with flickering lights and buzzing power lines. Solara looking 'oops'.",
          image: "",
        },
        animation: ["lights-blink", "power-spark", "solara-fade"],
      },
      {
        id: 7,
        title: "Flying with the Airplanes",
        text: `High in the sky, I saw airplanes flying across the world. Pilots sometimes lose radio signals when I roar too loud. That can be scary, but I try to whisper gently, so passengers can keep flying safely.`,
        narrationTone: "Caring, protective.",
        illustration: {
          description:
            "Airplane flying over clouds, Solara glowing nearby. Pilot surprised at 'No Signal'.",
          image: "",
        },
        animation: ["plane-fly", "signal-blink", "solara-breeze"],
      },
      {
        id: 8,
        title: "Astronaut Friends in Space",
        text: `But my closest friends are astronauts. They live high above in the International Space Station. They love watching my auroras, but they must be careful when I bring too much radiation. That’s when they hide inside safe places until I calm down.`,
        narrationTone: "Friendly, protective, secret-sharing.",
        illustration: {
          description:
            "ISS orbiting Earth. Two astronauts waving at Solara while auroras glow below.",
          image: "",
        },
        animation: ["iss-orbit", "astronaut-wave", "aurora-glow"],
      },
      {
        id: 9,
        title: "Fishermen and the Radio Waves",
        text: `Sailors and fishermen use radios to talk while at sea. But when my storms dance across the sky, their radios sometimes go silent. I don’t mean to scare them — I just get carried away with my energy.`,
        narrationTone: "Soft, apologetic.",
        illustration: {
          description:
            "Boat at night. Fishermen with static radio. Solara above with faint auroras.",
          image: "",
        },
        animation: ["boat-rock", "radio-static", "solara-dim"],
      },
      {
        id: 10,
        title: "Farmers and Crops",
        text: `Even farmers far below need me — or at least the satellites that guide them! Satellites help farmers know when to water crops and protect food. When I make satellites dizzy, farmers worry about their fields. I never forget: humans depend on me more than they know.`,
        narrationTone: "Thoughtful, caring.",
        illustration: {
          description:
            "Farm fields with tractor and satellite signals. Farmer looking up at Solara.",
          image: "",
        },
        animation: ["tractor-move", "signal-flicker", "wheat-sway"],
      },
      {
        id: 11,
        title: "The Warning",
        text: `Suddenly, Solara’s glow dimmed.
She whispered, 'Something is coming. A solar storm. A burst of energy from my heart.'
In a small village, Rahim and his sister Afsana looked up at the sky. The calm was about to change.`,
        narrationTone: "Mysterious, gentle.",
        illustration: {
          description:
            "Children in fields looking up. Sun glowing faintly with rippling sky.",
          image: "",
        },
        animation: ["sun-flicker", "sky-ripple", "children-gaze"],
      },
      {
        id: 12,
        title: "The First Tremor",
        text: `The ground hummed gently. Birds flew away in flocks, sensing the change.
Rahim held Afsana’s hand, 'Don’t be afraid. The Earth is strong. Solara is our friend.'
But even Solara looked uncertain.`,
        narrationTone: "Calming, protective.",
        illustration: {
          description:
            "Birds fleeing, villagers holding hands. Earth faintly shaking.",
          image: "",
        },
        animation: ["birds-fly", "ground-shake", "solara-worry"],
      },
      {
        id: 13,
        title: "The Storm Awakens",
        text: `With a flash, the solar storm burst out of Solara’s core.
Bright ribbons of light—red, green, and purple—rushed across the sky.
It was beautiful, but powerful. The villagers gasped in awe.`,
        narrationTone: "Excited, awe-filled.",
        illustration: {
          description: "Aurora waves covering sky above village huts.",
          image: "",
        },
        animation: ["aurora-flow", "stars-twinkle", "villagers-gasp"],
      },
      {
        id: 14,
        title: "The Earth Responds",
        text: `Deep inside the Earth, the magnetic shield woke up.
It spread its invisible arms wide, saying, 'Do not fear. I will protect you.'
The auroras danced brighter, but Earth’s shield stood strong.`,
        narrationTone: "Reassuring, powerful.",
        illustration: {
          description:
            "Earth with glowing shield arcs, children watching amazed.",
          image: "",
        },
        animation: ["shield-pulse", "aurora-brighten", "children-smile"],
      },
      {
        id: 15,
        title: "A Night of Colors",
        text: `The storm filled the sky with colors no one had ever seen.
Afsana whispered, 'It’s like the sky is painting us a dream.'
And Solara smiled again, knowing she hadn’t come to harm but to remind them of her power.`,
        narrationTone: "Dreamy, magical.",
        illustration: {
          description:
            "Children pointing at glowing auroras over river. Solara smiling softly.",
          image: "",
        },
        animation: ["aurora-gradient", "stars-glow", "solara-smile"],
      },
      {
        id: 16,
        title: "A Lesson in Light",
        text: `As the auroras shimmered, Solara spoke gently,
'My storms can be fierce, but they also bring beauty.
Every burst of energy is a reminder of the bond between us—Sun and Earth, light and life.'`,
        narrationTone: "Wise, gentle.",
        illustration: {
          description: "Sun smiling, rays wrapping Earth protectively.",
          image: "",
        },
        animation: ["ray-pulse", "light-wave"],
      },
      {
        id: 17,
        title: "The Children’s Promise",
        text: `Rahim gathered the children and said,
'We must care for our world, so Earth stays strong to dance with Solara’s light.
If we protect our rivers, forests, and air, the sky will always share its magic with us.'`,
        narrationTone: "Hopeful, inspiring.",
        illustration: {
          description: "Children planting saplings while auroras glow above.",
          image: "",
        },
        animation: ["sapling-grow", "leaf-fall", "aurora-bless"],
      },
      {
        id: 18,
        title: "The Sky Calms",
        text: `Slowly, the ribbons of light faded into the night.
The stars returned, brighter than ever, as if they had been washed clean by Solara’s storm.
Peace settled over the village, but the memory of the colors remained in their hearts.`,
        narrationTone: "Peaceful, calm.",
        illustration: {
          description:
            "Starry night sky, villagers resting, children still gazing upward.",
          image: "",
        },
        animation: ["aurora-fade", "stars-twinkle"],
      },
      {
        id: 19,
        title: "A New Dawn",
        text: `The next morning, the sun rose golden and calm.
Solara’s warm rays kissed the fields and the children’s faces.
She whispered, 'Thank you for listening, little dreamers. Until we meet again.'`,
        narrationTone: "Warm, gentle farewell.",
        illustration: {
          description:
            "Golden sunrise over green fields, children waving at the sun.",
          image: "",
        },
        animation: ["sunrise", "light-spread", "children-wave"],
      },
      {
        id: 20,
        title: "The Diary’s Last Page",
        text: `And so, in the hearts of Rahim, Afsana, and the villagers,
a secret was written: The sky is alive, and it speaks to those who listen.
Every storm, every light, every dawn—was part of Earth and Solara’s eternal diary.`,
        narrationTone: "Closing, magical.",
        illustration: {
          description:
            "Open diary glowing with drawings of auroras, Earth, and Sun smiling together.",
          image: "",
        },
        animation: ["diary-glow", "page-turn", "pen-write"],
      },
    ],
  },
];
