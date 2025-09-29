import { Story } from "./types";

// app/stories/data.ts
export const stories: Story[] = [
  {
    id: "solar-story",
    title: "Ella the Park Ranger and the Solar Show",
    description:
      "Ella, a park ranger, standing on a hill in a national park at night, gazing up at the glowing auroras in the sky. The stars twinkle brightly above, and the forest below is bathed in soft, colorful light",
    coverImage: "https://i.ibb.co.com/gLgG3Tvx/ella.png",
    pdfUrl: "/pdfs/story 1 ella.pdf",
    videoUrl: "/vid/story1.mp4",
    pages: [
      {
        id: 1,
        title: "Meet Ella",
        text: `Once upon a time, there was a park ranger named Ella. Ella loved working in the national park, where the trees were tall, the air was fresh, and the wildlife roamed freely. Every day, she helped visitors explore the park, keeping it safe and clean. Ella knew all the hidden trails and loved watching the changing colors of the leaves in the fall and the twinkling stars at night.

But one evening, as Ella was finishing her patrol, something magical happened.`,
        narrationTone: "Calm, magical, bedtime story opening.",
        illustration: {
          description:
            "Ella standing in a forest clearing under a starry sky. The first hints of auroras begin above the treetops.",
          image: "/stories/story2/img/park-ranger.png",
        },
        animation: ["stars-twinkle", "aurora-faint"],
      },
      {
        id: 2,
        title: "The Sky Lights Up",
        text: `As Ella walked back to the ranger station, she noticed the sky glowing. First, it was a faint green, then bright pinks and purples began to swirl across the horizon.

'What is that light?' Ella wondered, her heart racing with excitement.

The sky wasn’t dark anymore. It was filled with shimmering colors, moving and changing like a magical light show. Ella had seen auroras in books, but she had never witnessed one in person.`,
        narrationTone: "Excited, full of wonder.",
        illustration: {
          description:
            "Ella gazing at vibrant auroras swirling above the forest, wide-eyed with awe.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-swirls", "forest-glow"],
      },
      {
        id: 3,
        title: "The Call from Professor Astro",
        text: `Just then, Ella’s phone rang. It was her friend, Professor Astro, an expert in space science who loved to teach Ella about the wonders of space weather.

'Ella!' Professor Astro said, excited. 'You’re seeing the auroras! They happen when space weather from the Sun reaches Earth!'

'Auroras?' Ella asked, puzzled but curious. 'What’s space weather?'

'Space weather is caused by solar flares,' Professor Astro explained. 'The Sun sends out bursts of energy, and when they reach Earth, they cause these beautiful lights in the sky. It’s a form of energy from the Sun, called solar wind, that interacts with our atmosphere and magnetic field to create the auroras.'`,
        narrationTone: "Explaining, friendly teacher-like.",
        illustration: {
          description:
            "Ella on the phone, auroras glowing overhead. A thought bubble shows solar flares reaching Earth.",
          image: "/stories/story1/img/parabolic-antenna.png",
        },
        animation: ["phone-ring", "thought-bubble"],
      },
      {
        id: 4,
        title: "The Solar Flares",
        text: `Ella’s eyes widened in amazement. 'So, the Sun is responsible for these beautiful lights?' she asked.

'Yes, exactly!' Professor Astro said. 'Solar flares are powerful bursts of energy from the Sun. When they travel through space, they reach Earth and interact with our planet’s magnetic field, creating auroras that light up the sky.'

'That’s incredible!' Ella said, amazed. 'I had no idea the Sun could do that!'`,
        narrationTone: "Amazed, curious.",
        illustration: {
          description:
            "Diagram of solar flares bursting from the Sun, traveling to Earth. Auroras glowing in the background.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["solar-flare", "aurora-brighten"],
      },
      {
        id: 5,
        title: "The Impact on Technology",
        text: `Professor Astro continued, 'The auroras are beautiful, but solar flares can also affect technology. Solar flares can mess with things like satellites, GPS, and even power grids on Earth.'

'So, space weather isn’t just about pretty lights—it can mess with our gadgets?' Ella asked.

'Yes,' said Professor Astro, 'solar flares can cause disruptions in technology, especially things that rely on satellites, like GPS systems and communication networks.'`,
        narrationTone: "Informative, thoughtful.",
        illustration: {
          description:
            "Satellites in space glitching from solar flares. Ella looking thoughtful under glowing auroras.",
          image: "/stories/story2/img/digital.png",
        },
        animation: ["satellite-glitch", "signal-flicker"],
      },
      {
        id: 6,
        title: "A Ranger’s Challenge",
        text: `Ella thought about how important technology was in her job. 'I use GPS to help me navigate the park and communicate with my team. What if space weather causes a problem during a rescue mission?'

'That’s why we need to pay attention to space weather forecasts,' Professor Astro said. 'They help us predict when solar flares and other space weather events might happen, so we can be prepared.'

Ella nodded. 'I’ll have to keep an eye on the space weather reports from now on!'`,
        narrationTone: "Practical, serious.",
        illustration: {
          description:
            "Ella checking a space weather forecast on her phone. Bright auroras glow above the forest.",
          image: "/stories/story1/img/astronaut.png",
        },
        animation: ["phone-glow", "aurora-wave"],
      },
      {
        id: 7,
        title: "The Sun’s Power and Beauty",
        text: `Even though solar flares could sometimes cause problems with technology, Ella couldn’t stop staring at the auroras above her. 'The Sun’s energy is so powerful!' she thought. 'It creates such beautiful sights in the sky, but it also affects the world in ways we can’t always see.'

'Space weather is both beautiful and powerful,' Professor Astro said. 'It’s a reminder of how connected we are to the Sun and how its energy impacts us every day.'`,
        narrationTone: "Dreamy, reflective.",
        illustration: {
          description:
            "Ella gazing at auroras, peaceful expression. The colors of the lights reflect in her eyes.",
          image: "/stories/story2/img/sun-power.png",
        },
        animation: ["aurora-shimmer", "eye-reflection"],
      },
      {
        id: 8,
        title: "A Ranger’s Reflection",
        text: `Looking out over the park, Ella felt grateful for the Sun. 'The Sun not only gives us light and warmth,' she said, 'but it also helps plants grow, powers technology, and creates these magical auroras. It’s amazing how the Sun’s energy impacts everything around us!'

Ella smiled as she realized how much she had learned. Space weather wasn’t just something far away—it touched her work, her garden, and even the wildlife in her park.`,
        narrationTone: "Grateful, warm.",
        illustration: {
          description:
            "Ella sitting on a hilltop, watching auroras over a forest filled with wildlife. The Sun sets golden in the distance.",
          image: "/stories/story2/img/thanks.png",
        },
        animation: ["sunset-fade", "wildlife-move"],
      },
      {
        id: 9,
        title: "Ella’s Creative Solution",
        text: `Ella felt inspired by the beauty of the auroras and the Sun’s energy. She thought about how she could use the Sun’s power to make her job easier. 'Maybe I could use solar energy to power my radio and GPS, especially during space weather events!'

She spent the next few weeks building a solar-powered gadget to help her stay connected. 'If the Sun can give us auroras, it can help me with my park tools, too!' Ella said with a grin.`,
        narrationTone: "Hopeful, inventive.",
        illustration: {
          description:
            "Ella working at her ranger station on a solar-powered gadget, auroras glowing outside her window.",
          image: "/stories/story2/img/think-out-of-the-box.png",
        },
        animation: ["gadget-glow", "aurora-inspire"],
      },
      {
        id: 10,
        title: "What We Learned",
        text: `Ella learned that space weather, like solar flares, could be beautiful and powerful. It could create auroras in the sky, but it could also affect the technology that helped her do her job as a park ranger.

'The Sun’s energy touches everything,' Ella said, 'whether it’s helping plants grow, powering our gadgets, or lighting up the sky. Space weather is just another part of our world!'

With a smile, Ella looked up at the auroras one last time, knowing the Sun’s energy would continue to surprise and inspire her every day.`,
        narrationTone: "Closing, uplifting.",
        illustration: {
          description:
            "Ella standing in her park as the Sun sets, gazing at auroras. Nature around her glows with life.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["aurora-fade", "sunset-rise"],
      },
    ],
  },
  {
    id: "solar-diary",
    title: "The Diary of a Solar Storm",
    description:
      "Follow Solara, a playful solar storm, as she travels from the Sun to Earth.",
    coverImage: "https://i.ibb.co.com/ZRMj3MZs/sola.png",
    pdfUrl: "/pdfs/solara.pdf",
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
          image: "/stories/story1/img/solar-flare.png",
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
          image: "/stories/story1/img/parabolic-antenna.png",
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
          image: "/stories/story1/img/sattelite-dish.png",
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
          image: "/stories/story1/img/aurora-borealis.png",
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
          image: "/stories/story1/img/power-transformer.png",
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
          image: "/stories/story1/img/globe.png",
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
          image: "/stories/story1/img/astronaut.png",
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
          image: "/stories/story1/img/fisherman.png",
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
          image: "/stories/story1/img/farmer.png",
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
          image: "/stories/story1/img/solar-storm.png",
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
          image: "/stories/story1/img/earthquake.png",
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
          image: "/stories/story1/img/storm.png",
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
          image: "/stories/story1/img/weapons.png",
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
          image: "/stories/story1/img/cloudy-night.png",
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
          image: "/stories/story1/img/star.png",
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
          image: "/stories/story1/img/pinky-promise.png",
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
          image: "/stories/story1/img/moon.png",
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
          image: "/stories/story1/img/cloudy.png",
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
          image: "/stories/story1/img/diary.png",
        },
        animation: ["diary-glow", "page-turn", "pen-write"],
      },
    ],
  },
];
