import { Story } from "./types";

// app/stories/data.ts
export const stories: Story[] = [
  {
    id: "solar-story",
    title: "Ella the Park Ranger and the Solar Show",
    description:
      "Ella, a park ranger, standing on a hill in a national park at night, gazing up at the glowing auroras in the sky. The stars twinkle brightly above, and the forest below is bathed in soft, colorful light",
    coverImage: "https://i.ibb.co.com/gLgG3Tvx/ella.png",
    pdfUrl:
      "https://drive.google.com/file/d/1hTljY76Ub1k4pNQokOzoPFBX0Yk-TdaY/preview",
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
    id: "skyler-story",
    title: "Skyler and the Dancing Lights",
    description:
      "Skyler, a brave pilot, discovers the magic of auroras while flying at night and learns about the Sun’s powerful role in creating space weather.",
    coverImage: "https://i.ibb.co.com/gbnsDJ05/skyler.png",
    pdfUrl:
      "https://drive.google.com/file/d/1pvy3oxuS1Ps17Tn2crjXkn2QD0_g78Um/preview",
    videoUrl: "/vid/story2.mp4",

    pages: [
      {
        id: 1,
        title: "Meet Skyler",
        text: "Once upon a time, there was a brave pilot named Skyler. Skyler loved flying high in the sky, above the clouds, where the air was fresh and the view was breathtaking. She flew all around the world, taking people to far-off places, and she had seen all sorts of things—clouds that looked like fluffy cotton candy, sunsets that painted the sky in gold and pink, and even the stars sparkling brightly at night.\n\nBut one evening, Skyler was flying through the night sky when something magical happened. She looked out of the window and saw something she had never seen before. The sky below was glowing with beautiful colors, like the sky was alive and dancing!",
        narrationTone: "Adventurous, magical discovery.",
        illustration: {
          description:
            "Skyler in the cockpit of her plane, flying through a starry night sky. The first signs of auroras begin to glow faintly below the clouds.",
          image: "/pilot.png",
        },
        animation: ["plane-flying", "aurora-faint"],
      },
      {
        id: 2,
        title: "The Lights in the Sky",
        text: "Skyler’s eyes widened in amazement. The sky wasn’t dark anymore—it was filled with swirling colors! There were greens, pinks, and purples all dancing together like a magical light show. 'What is that light?' Skyler wondered, tapping her fingers on the dashboard.\n\n'It looks like the sky is dancing!' Skyler whispered to herself, feeling like she was flying through a dream.",
        narrationTone: "Amazed, dreamy, curious.",
        illustration: {
          description:
            "Skyler gazing out of the window at the bright auroras swirling below. The sky is filled with vibrant greens, pinks, and purples, and the cockpit glows with the reflection of the colorful lights.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["aurora-bright", "cockpit-glow"],
      },
      {
        id: 3,
        title: "The Call from Professor Nova",
        text: "Just then, Skyler’s radio crackled to life. It was her friend, Professor Nova, who studied space weather. 'Skyler!' Professor Nova said excitedly, 'You’re seeing the auroras!'\n\n'Auroras?' Skyler asked, confused but curious. 'What are those?'\n\n'Ah! The auroras are one of the most beautiful things in space weather!' Professor Nova explained. 'They happen when the Sun sends out bursts of energy called solar flares. These flares travel all the way to Earth and make the sky light up in dazzling colors!'",
        narrationTone: "Excited, informative, friendly.",
        illustration: {
          description:
            "Skyler holding the radio, looking surprised, with the auroras glowing outside. A small, friendly image of Professor Nova appears on the radio screen.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["radio-static", "aurora-glow"],
      },
      {
        id: 4,
        title: "The Solar Flares",
        text: "Skyler blinked. 'So, the Sun is responsible for this light show?'\n\nProfessor Nova chuckled. 'Yes! The Sun is very powerful. Sometimes, it sends out bursts of energy called solar flares. These flares are like giant fireworks that explode from the Sun and travel through space. When they reach Earth, they interact with the atmosphere and magnetic field, and that’s when you get the beautiful auroras in the sky!'\n\n'Wow!' Skyler exclaimed. 'I never knew the Sun could do that!'",
        narrationTone: "Curious, amazed, educational.",
        illustration: {
          description:
            "A diagram showing solar flares bursting from the Sun, with lines of energy traveling through space towards Earth, where they interact with the magnetic field, creating auroras.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["sun-flare", "energy-lines", "aurora-appear"],
      },
      {
        id: 5,
        title: "A Solar Surprise",
        text: "As Skyler watched the auroras, something strange happened. The radio in her cockpit started to crackle and buzz, and her GPS screen started flickering. 'Hmm, that’s odd,' Skyler thought.\n\nThen she remembered what Professor Nova had said: 'Solar flares can sometimes mess with technology. They can affect radios, satellites, and GPS systems!'\n\n'Uh-oh,' Skyler said. 'Looks like the Sun is causing some trouble with my tech!'",
        narrationTone: "Surprised, slightly worried, playful.",
        illustration: {
          description:
            "Skyler looking worried at the crackling radio and flickering GPS screen in her cockpit, with the glowing auroras still visible outside the window.",
          image: "/stories/story1/img/earthquake.png",
        },
        animation: ["radio-buzz", "gps-flicker", "aurora-bright"],
      },
      {
        id: 6,
        title: "The Impact on Technology",
        text: "Professor Nova’s voice came through the radio again. 'Don’t worry, Skyler. This is a normal part of space weather. Solar flares can interfere with things like radio signals and GPS, which is why your radio and GPS are acting up. But it’s also why we get to see these beautiful lights!'\n\n'That’s cool, but a little tricky too!' Skyler said. 'It’s like the Sun’s energy is both helping me see this amazing light show and causing some problems with my instruments!'",
        narrationTone: "Reassuring, informative, light-hearted.",
        illustration: {
          description:
            "Skyler trying to use the radio and GPS, but both are showing static and glitches. The auroras continue to dance in the sky outside, creating a mix of awe and mild frustration for Skyler.",
          image: "/stories/img/interview.png",
        },
        animation: ["gps-glitch", "radio-static", "aurora-dance"],
      },
      {
        id: 7,
        title: "The Power of the Sun",
        text: "'It’s incredible!' Skyler said, staring at the auroras. 'The Sun is so far away, yet its energy can travel all the way to Earth and cause this.'\n\nProfessor Nova laughed. 'Exactly! The Sun is 93 million miles away, but its energy still reaches us and has a big impact on our planet. Solar flares, solar winds, and the Sun’s magnetic field all create space weather, which affects Earth in so many ways.'\n\n'It’s like a big cosmic dance happening all around us!' Skyler said, feeling inspired.",
        narrationTone: "Inspirational, awe-filled, cosmic.",
        illustration: {
          description:
            "Skyler gazing out the cockpit window, lost in wonder as the colorful auroras glow. A line from the Sun to Earth is shown, symbolizing the journey of the Sun's energy traveling through space.",
          image: "/sun.png",
        },
        animation: ["sun-energy-line", "aurora-glow"],
      },
      {
        id: 8,
        title: "Riding the Waves of Space Weather",
        text: "Even though the solar flares were making her GPS go haywire, Skyler didn’t mind. She decided to sail through the night by the stars, just like sailors did in the old days.\n\n'This is just like an adventure!' Skyler grinned, enjoying the quiet beauty of the night sky and the glowing auroras below. 'It’s like I’m part of something bigger, something magical!'",
        narrationTone: "Adventurous, uplifting, magical.",
        illustration: {
          description:
            "Skyler navigating her plane through the night sky, using the stars for guidance, with the glowing auroras lighting the way beneath her.",
          image: "/stories/story1/img/parabolic-antenna.png",
        },
        animation: ["plane-glide", "stars-twinkle", "aurora-light"],
      },
      {
        id: 9,
        title: "The Beauty of Space Weather",
        text: "As Skyler flew, she marveled at how space weather wasn’t just about technology problems—it was also about the beauty the Sun brings to the Earth. 'The auroras are incredible! They remind me how the Sun’s power can create such amazing things, like this light show!'\n\nSkyler smiled as she realized that, while solar flares and space weather can cause some trouble, they also make the world a more magical place.",
        narrationTone: "Peaceful, reflective, appreciative.",
        illustration: {
          description:
            "Skyler gazing out the window, feeling peaceful as she watches the auroras continue to swirl in the night sky, the stars twinkling above her.",
          image: "/stories/img/day-and-night.png",
        },
        animation: ["aurora-slow-dance", "stars-twinkle"],
      },
      {
        id: 10,
        title: "What We Learned",
        text: "Skyler learned that space weather—like solar flares and auroras—can affect technology, like GPS and radio signals. But she also learned that space weather creates beautiful sights in the sky that are both magical and mysterious.\n\n'The Sun is full of surprises!' Skyler said with a smile. 'Its energy touches everything on Earth in ways we can’t always see—but when we do, it’s something amazing!'\n\nSkyler couldn’t wait to see what other surprises the Sun would send next. But for now, she was content, flying through the glowing sky, feeling part of something bigger than herself.",
        narrationTone: "Concluding, hopeful, magical.",
        illustration: {
          description:
            "Skyler flying peacefully through the night sky with the auroras glowing beneath her. The sky is calm, and the stars shine brightly, leaving a sense of wonder and awe.",
          image: "/stories/story1/img/tech.png",
        },
        animation: ["plane-flying", "aurora-glow", "stars-shine"],
      },
    ],
  },

  {
    id: "zoey-gardener-story",
    title: "Zoey the Gardener and the Sun’s Gift",
    description:
      "A magical story of Zoey discovering the Sun’s energy and the beauty of auroras.",
    coverImage: "https://i.ibb.co.com/gFFWxhNw/zoey.png",
    pdfUrl:
      "https://drive.google.com/file/d/1s1Jjf2CpvhR3N6chNhqjfOpX7an1cN3x/preview",

    pages: [
      {
        id: 1,
        title: "Meet Zoey",
        text: "Once upon a time, there was a kind gardener named Zoey. Zoey loved to plant flowers, herbs, and vegetables. Every morning, she would go out into her garden and water the plants, making sure they were strong and healthy. She loved watching her garden grow as the days passed. But one afternoon, as Zoey was tending to her flowers, something magical happened.\nShe looked up and saw that the sky wasn’t just blue anymore. It was glowing with bright colors—greens, pinks, and purples! 'What is that light?' Zoey wondered, amazed by the beauty of the sky.",
        narrationTone: "Gentle, warm, magical.",
        illustration: {
          description:
            "Zoey standing in her colorful garden, watering plants, while the sky above her starts to glow with the first hints of auroras. Flowers and vegetables fill the garden around her.",
          image: "/stories/img/farmerg.png",
        },
        animation: ["plants-sway", "aurora-begin"],
      },
      {
        id: 2,
        title: "A Glow in the Garden",
        text: "As Zoey watched, the glowing colors in the sky began to swirl and dance. 'It looks like the sky is alive!' Zoey whispered to herself. The bright greens, pinks, and purples twirled across the sky like a magical light show. Zoey was so excited—she had never seen the sky like this before!\nShe stopped watering the plants and stood still, her eyes wide with wonder. 'What could it be?' she thought. The colors above her shimmered, creating the most beautiful light show she had ever seen.",
        narrationTone: "Excited, full of wonder.",
        illustration: {
          description:
            "Zoey standing with her watering can in hand, staring up in awe at the swirling auroras above her. The sky is filled with colorful lights, and the plants around her seem to glow in the soft light.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-dance", "light-glow"],
      },
      {
        id: 3,
        title: "The Call from Professor Sol",
        text: "Just then, Zoey’s phone rang. It was her friend, Professor Sol, who loved to teach Zoey about space and science.\n'Zoey!' Professor Sol said excitedly. 'You’re seeing the auroras! They happen when space weather from the Sun reaches Earth!'\n'Space weather?' Zoey asked, puzzled. 'What does that mean?'\n'Space weather is caused by the Sun sending out bursts of energy, called solar flares. When these flares reach Earth, they interact with the gases in our atmosphere and create those beautiful lights in the sky, called auroras!'",
        narrationTone: "Educational, curious.",
        illustration: {
          description:
            "Zoey on the phone with Professor Sol, holding the phone to her ear while looking up at the colorful auroras. A simple diagram next to Zoey shows solar flares from the Sun reaching Earth.",
          image: "/stories/img/interview.png",
        },
        animation: ["phone-ring", "aurora-bright"],
      },
      {
        id: 4,
        title: "The Sun’s Special Gift",
        text: "Zoey thought for a moment. 'So, the Sun is making the sky glow like that?' she asked, amazed. 'That’s incredible!'\n'Yes,' Professor Sol replied. 'The Sun is always sending out energy to Earth in the form of solar flares and solar wind. These things help power our planet and keep everything growing! The energy from the Sun is essential for life on Earth—without it, plants wouldn’t be able to grow.'\nZoey smiled, feeling even more connected to her garden. She had always known the Sun was important, but now she understood just how powerful its energy really was!",
        narrationTone: "Revealing, joyful.",
        illustration: {
          description:
            "Zoey standing in her garden, smiling as she listens to Professor Sol. The glowing auroras swirl above her garden, and the plants seem to stretch and grow in response to the sunlight.",
          image: "/stories/img/sungift.png",
        },
        animation: ["plants-grow", "aurora-sparkle"],
      },
      {
        id: 5,
        title: "A Gardener’s Connection to the Sun",
        text: "Zoey looked at her garden, thinking about everything Professor Sol had just said. 'The Sun helps my garden grow strong and healthy,' Zoey thought, 'and it’s the same energy that’s causing these beautiful lights in the sky!'\n'The Sun’s energy gives my plants the light they need to grow,' Zoey continued, 'and now I see that space weather is just another way the Sun helps us!'",
        narrationTone: "Peaceful, reflective.",
        illustration: {
          description:
            "Zoey walking through her garden, gently touching the leaves of a plant, with the auroras still glowing above. The sunlight filters through the plants, showing how they are growing and thriving.",
          image: "/stories/img/garden.png",
        },
        animation: ["sunlight-filter", "aurora-soft"],
      },
      {
        id: 6,
        title: "The Gift of Solar Energy",
        text: "Zoey thought about how solar energy worked in her garden. 'Just like solar panels use sunlight to create electricity, the Sun’s energy helps power everything on Earth,' she said out loud. 'It gives my plants the food they need to grow, and it even powers my home!'\n'And now, I know that space weather from the Sun gives us those magical auroras to enjoy!'\nZoey smiled. 'I think I’ll be able to make even more amazing inventions in my garden to harness the power of the Sun.'",
        narrationTone: "Inspired, inventive.",
        illustration: {
          description:
            "Zoey thinking creatively in her garden, with a solar panel in the background next to her house. The auroras glow above, and the garden is thriving under the bright sunlight.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["sunlight-bright", "aurora-flow"],
      },
      {
        id: 7,
        title: "Solar Flares and Their Power",
        text: "Professor Sol’s voice came through the phone again. 'Zoey, the Sun’s energy isn’t just helpful for growing plants. Solar flares can also cause beautiful auroras in the sky, but they can sometimes mess with things like power grids or satellite communications.'\n'Solar flares can interfere with technology on Earth,' Professor Sol continued, 'but don’t worry! Even though they’re powerful, they’re not harmful to us directly. We just have to be careful about the things that rely on solar energy.'",
        narrationTone: "Careful, informative.",
        illustration: {
          description:
            "A simple diagram showing solar flares shooting from the Sun, with lines of energy traveling through space, reaching Earth. On the side, a small image shows satellites and power grids being impacted by solar flares.",
          image: "/stories/img/solar-energy.png",
        },
        animation: ["flare-burst", "signal-glitch"],
      },
      {
        id: 8,
        title: "Zoey’s Creative Idea",
        text: "Zoey thought for a moment. 'If solar flares can affect technology,' she said, 'maybe I can come up with an invention to protect my garden’s solar-powered gadgets from solar flares!'\nZoey worked late into the evening, building a special solar shield for her garden’s equipment. 'If the Sun can power my garden, it can also make sure my gadgets work safely,' she said, excited by the new project.",
        narrationTone: "Creative, determined.",
        illustration: {
          description:
            "Zoey working in her garden at night, using tools to add a solar shield to her solar-powered gadgets. The auroras glow softly in the sky above, casting a gentle light on her work.",
          image: "/stories/story1/img/tech.png",
        },
        animation: ["tool-hammer", "aurora-glow"],
      },
      {
        id: 9,
        title: "The Magic of the Sun",
        text: "As Zoey finished her work, she stepped back and looked at her garden. The solar shield worked perfectly, keeping her gadgets safe from any disruptions caused by space weather.\n'The Sun’s magic really is everywhere!' Zoey said with a smile. 'From growing my plants to powering my gadgets, the Sun’s energy makes everything possible.'\nZoey felt connected to the Sun and all the plants in her garden. 'Space weather is just another part of nature’s big plan!'",
        narrationTone: "Grateful, uplifting.",
        illustration: {
          description:
            "Zoey proudly looking at her solar-powered gadgets working perfectly in the garden. The auroras are visible in the sky, and the garden is thriving, with plants growing tall and strong under the Sun’s energy.",
          image: "/stories/img/crystal-ball.png",
        },
        animation: ["gadgets-glow", "aurora-bright"],
      },
      {
        id: 10,
        title: "What We Learned",
        text: "Zoey learned that space weather, like solar flares, isn’t something to fear. It can bring beautiful auroras to the sky, and with a little creativity, it can even inspire new inventions to help her garden thrive. She also learned that the Sun’s energy is a gift that powers life on Earth in more ways than one.\n'The Sun is always giving us surprises!' Zoey said, 'Whether it’s beautiful lights in the sky or energy to help us grow, the Sun’s magic is always with us.'",
        narrationTone: "Concluding, warm, magical.",
        illustration: {
          description:
            "Zoey standing in the middle of her beautiful garden, with the auroras glowing above her and the Sun setting in the distance. The garden is full of life, and Zoey is smiling, surrounded by the energy of the Sun.",
          image: "/stories/story1/img/globe.png",
        },
        animation: ["sunset-glow", "aurora-fade"],
      },
    ],
  },
  {
    id: "cosmic-canvas",
    title: "Maya the Street Artist and the Cosmic Canvas",
    description:
      "Maya, a creative street artist, discovers the beauty of solar flares and auroras, turning the night sky into her cosmic inspiration for a masterpiece mural in the city.",
    coverImage: "https://i.ibb.co.com/Z3LWGF3/4.png",
    pdfUrl:
      "https://drive.google.com/file/d/1-tLjsg23uVV0AKnPt3Thw3Ob_ddV1WT2/preview",

    pages: [
      {
        id: 1,
        title: "Meet Maya",
        text: "Maya was a street artist who loved bringing color to the world. Her murals could be found on buildings, alleys, and even buses. She loved painting scenes that made people smile, from giant flowers to colorful animals. But one night, as Maya was about to begin her newest mural, something unusual caught her eye. The sky above her started to shimmer in a way she had never seen before.",
        narrationTone: "Curious, warm, bedtime introduction.",
        illustration: {
          description:
            "Maya standing in front of a bare city wall with paint cans. The skyline is visible, and above, the sky glows faintly with mysterious colors.",
          image: "/stories/img/artist.png",
        },
        animation: ["stars-twinkle", "sky-shimmer"],
      },
      {
        id: 2,
        title: "The Cosmic Light Show",
        text: "The sky wasn’t just dark anymore—it was alive with colors! Green, purple, and pink swirled above like an artist’s palette spilled across the heavens. 'What is that?' Maya whispered. The lights seemed to pulse, moving like they were dancing in the night sky. It was as if the universe itself was putting on a light show, just for her.",
        narrationTone: "Magical and awe-filled.",
        illustration: {
          description:
            "Auroras swirl and shimmer above the city. Maya gazes upward in awe, her spray can forgotten in her hand.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-dance", "light-pulse"],
      },
      {
        id: 3,
        title: "The Call from Leo",
        text: "Maya quickly called her friend Leo, a scientist who loved explaining the mysteries of the universe. 'Maya, you’re seeing the auroras!' Leo exclaimed. 'It’s space weather caused by solar flares from the Sun. The Sun sends bursts of energy toward Earth, and when they hit our atmosphere, they create these beautiful lights in the sky!' Maya was amazed. 'So the Sun is painting the sky?' she asked. 'Exactly,' said Leo. 'It’s nature’s own light show!'",
        narrationTone: "Excited and explanatory.",
        illustration: {
          description:
            "Maya on her phone, listening intently. Behind her, auroras glow across the sky. A small diagram shows solar flares traveling from the Sun to Earth.",
          image: "/solar-system.png",
        },
        animation: ["phone-glow", "solarflare-diagram"],
      },
      {
        id: 4,
        title: "The Cosmic Canvas",
        text: "'Wow,' Maya said, 'The Sun’s energy is so powerful, it’s creating this amazing light show!' Leo replied, 'Yes! When solar flares hit Earth’s atmosphere, they create these magical auroras.' Maya’s eyes sparkled with inspiration. 'If the sky can be this colorful, why not paint it?' she thought. The blank wall in front of her now felt like a canvas for the universe itself.",
        narrationTone: "Inspired, thoughtful.",
        illustration: {
          description:
            "Maya looking at the city wall, her eyes glowing with inspiration. Above her, swirling auroras stretch across the night sky.",
          image: "/stories/img/universe.png",
        },
        animation: ["aurora-swirls", "wall-glow"],
      },
      {
        id: 5,
        title: "Painting the Sky’s Colors",
        text: "Maya picked up her spray paint cans and began working on her mural. With every spray, she felt like she was capturing the cosmic light show on Earth. Green, pink, and purple colors blended beautifully on the wall. 'This is magic,' Maya whispered. 'It’s like I’m painting the sky itself!'",
        narrationTone: "Energetic, creative.",
        illustration: {
          description:
            "Maya spray-painting a vibrant mural that mimics the auroras. Colors splash across the wall, glowing in the night.",
          image: "/stories/story1/img/moon.png",
        },
        animation: ["paint-spray", "aurora-reflect"],
      },
      {
        id: 6,
        title: "The Power of Space Weather",
        text: "As Maya painted, she realized that space weather wasn’t just about lights in the sky. The Sun’s energy powered plants, fueled technology, and even influenced Earth’s weather! 'It’s like everything is connected to the Sun,' Maya mused as she added rays of sunlight and auroras into her mural.",
        narrationTone: "Educational but inspiring.",
        illustration: {
          description:
            "Next to Maya’s mural, a diagram shows the Sun’s rays helping plants grow, powering satellites, and creating auroras.",
          image: "/stories/story1/img/parabolic-antenna.png",
        },
        animation: ["sunbeam-rays", "icon-glow"],
      },
      {
        id: 7,
        title: "The City’s New Masterpiece",
        text: "When Maya stepped back, she gasped. The mural glowed with vibrant energy, blending the city’s lights with the cosmic auroras above. It was as if the universe had become part of the city itself.",
        narrationTone: "Proud, uplifting.",
        illustration: {
          description:
            "Maya standing proudly in front of her completed mural. Above, auroras glow across the night sky, matching her artwork.",
          image: "/stories/img/paint.png",
        },
        animation: ["city-lights-twinkle", "mural-glow"],
      },
      {
        id: 8,
        title: "A Lesson in Light",
        text: "Maya realized that the Sun’s energy wasn’t just far away in space. It was part of life on Earth too—from glowing skies to the power in their homes. 'The Sun connects everything,' she thought. 'And tonight, it connected me to the universe in the most magical way.'",
        narrationTone: "Reflective, calm.",
        illustration: {
          description:
            "Maya looking at her mural while auroras glow overhead, with diagrams of the Sun subtly blended into the artwork.",
          image: "/stories/story1/img/star.png",
        },
        animation: ["sun-symbol-glow", "aurora-soft-fade"],
      },
      {
        id: 9,
        title: "The Cosmic Connection",
        text: "The next day, people gathered around Maya’s mural. Children pointed at the colors, adults smiled, and everyone felt a little closer to the sky. Her art had captured not just the beauty of the auroras, but the connection between Earth and the Sun.",
        narrationTone: "Joyful and communal.",
        illustration: {
          description:
            "A crowd admiring Maya’s mural, smiling and pointing at the cosmic colors. The auroras faintly shimmer above in daylight.",
          image: "/stories/img/half-moon.png",
        },
        animation: ["crowd-cheer", "light-glimmer"],
      },
      {
        id: 10,
        title: "The Sky is Her Canvas",
        text: "That night, Maya looked up at the auroras once more. 'The universe is the greatest artist,' she whispered. And with her spray can in hand, she smiled, knowing the sky would always be her canvas.",
        narrationTone: "Dreamy, bedtime closing.",
        illustration: {
          description:
            "Maya gazing up at the auroras with her spray can, her mural glowing beside her. The night feels alive with cosmic magic.",
          image: "/stories/img/canvas.png",
        },
        animation: ["aurora-bright", "star-twinkle"],
      },
    ],
  },
  {
    id: "solar-surprise",
    title: "Miko the Inventor and the Solar Surprise",
    description:
      "Miko, a young inventor, discovers how solar flares and auroras affect Earth and technology, inspiring him to create a new invention powered by the Sun’s energy.",
    coverImage: "https://i.ibb.co.com/4qq5XMs/5.png",
    pdfUrl:
      "https://drive.google.com/file/d/18GIEV_Mx-AY0Mtq1QfjBnAi0OfHeiM4U/preview",

    pages: [
      {
        id: 1,
        title: "Meet Miko",
        text: "Once upon a time, there was a young inventor named Miko. Miko loved building things! Whether it was a robot that could dance or a clock that ran on sunlight, Miko’s ideas were always full of surprises. He spent hours tinkering with gadgets and learning how things worked. One night, Miko was working on a new invention when something strange happened.",
        narrationTone: "Curious, warm, bedtime introduction.",
        illustration: {
          description:
            "Miko sitting at his workbench surrounded by gadgets, gears, and blueprints. Through the window, the night sky begins to glow with soft auroras.",
          image: "/stories/img/scientist.png",
        },
        animation: ["tools-clink", "aurora-faint"],
      },
      {
        id: 2,
        title: "The Lights in the Sky",
        text: "As Miko tinkered with his tools, the lights in the room flickered. 'Hmm, that’s odd,' he thought. He looked outside and saw the sky glowing with bright colors—greens, pinks, and purples. 'It looks like the sky is dancing!' Miko whispered in awe. The lights twirled across the sky, and Miko had never seen anything like it before.",
        narrationTone: "Magical and wonder-filled.",
        illustration: {
          description:
            "Miko standing at the window, eyes wide with amazement. Outside, the sky glows with swirling auroras in green, pink, and purple. The workshop is lit by their glow.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-dance", "light-flicker"],
      },
      {
        id: 3,
        title: "The Call from Professor Nova",
        text: "Just then, Miko’s phone rang. It was his friend, Professor Nova, an expert in space science. 'Miko, you’re seeing the auroras!' said Professor Nova excitedly. 'They happen when the Sun sends out solar flares to Earth. It’s a form of space weather!' 'Space weather?' Miko asked. 'Yes! Solar flares are bursts of energy from the Sun. When they reach Earth, they make the gases in the atmosphere glow, creating the beautiful auroras you're seeing.' Miko’s eyes sparkled. 'So the Sun is responsible for this light show?' 'Exactly!' Nova said.",
        narrationTone: "Excited and educational.",
        illustration: {
          description:
            "Miko on the phone, listening intently. Outside the window, the auroras shimmer. A small diagram shows solar flares bursting from the Sun and reaching Earth.",
          image: "/stories/img/interview.png",
        },
        animation: ["phone-ring", "solarflare-diagram"],
      },
      {
        id: 4,
        title: "A Solar Surprise",
        text: "Miko thought for a moment. 'So the Sun is causing the sky to glow like that? Wow!' But then, he noticed something strange—the battery on his solar-powered clock wasn’t working. The screen was blank, even though it should have been charged. 'Could space weather be affecting my gadgets?' Miko wondered. 'I’ve heard solar flares can mess with electronics, but I didn’t think it would happen here!' He scratched his head. 'I need to make sure this doesn’t happen again.'",
        narrationTone: "Curious and problem-solving.",
        illustration: {
          description:
            "Miko looking puzzled at his solar-powered clock with a blank screen. Tools are scattered on his bench, and auroras glow outside.",
          image: "/stories/img/sungift.png",
        },
        animation: ["clock-fade", "aurora-bright"],
      },
      {
        id: 5,
        title: "The Creative Solution",
        text: "Miko had an idea. 'If solar flares can make the sky glow, maybe they can help power my inventions!' he thought. 'What if I could create something that captures the Sun’s energy and stores it safely?' He worked late into the night, adding a shiny solar shield to his inventions. This shield would protect them and collect energy directly from the Sun, keeping his gadgets safe and powered.",
        narrationTone: "Innovative and determined.",
        illustration: {
          description:
            "Miko working hard at his bench, attaching a glowing solar shield to his clock. The auroras shine through the window as he focuses on his work.",
          image: "/stories/story2/img/think-out-of-the-box.png",
        },
        animation: ["gear-turn", "spark-glow"],
      },
      {
        id: 6,
        title: "The Glow of Innovation",
        text: "By morning, Miko’s invention worked perfectly! The solar-powered clock began ticking again, powered by the Sun’s energy, even in the middle of the night. 'It worked!' Miko cheered. He realized that while space weather could cause problems, it could also inspire new ideas. Smiling at the glowing auroras, he whispered, 'The Sun’s power just sparked my best invention yet.'",
        narrationTone: "Triumphant and joyful.",
        illustration: {
          description:
            "Miko proudly holding his working solar-powered clock, which ticks brightly. His workshop is softly lit by both the invention and the auroras outside.",
          image: "/stories/img/innovation.png",
        },
        animation: ["clock-tick", "light-glow"],
      },
      {
        id: 7,
        title: "What We Learned",
        text: "Miko learned that space weather, like solar flares, can affect technology—but with creativity, it could become a source of inspiration. 'The Sun may be far away,' Miko said, smiling, 'but its magic is always with us. Who knows what other surprises it might bring for my inventions!'",
        narrationTone: "Encouraging and thoughtful.",
        illustration: {
          description:
            "Miko sitting at his bench, jotting notes in a notebook while his solar-powered clock ticks beside him. Auroras still shimmer softly outside.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["pen-write", "aurora-fade"],
      },
      {
        id: 8,
        title: "Solar Flares and Technology",
        text: "Miko remembered what Professor Nova had said: solar flares can affect satellites, GPS, and even power grids. 'Space weather can cause problems,' Miko thought, 'but it also gives us these beautiful auroras.' He realized the Sun’s energy was powerful and sometimes tricky—both a challenge and a gift.",
        narrationTone: "Explanatory and balanced.",
        illustration: {
          description:
            "A diagram shows solar flares leaving the Sun, reaching satellites and Earth’s magnetic field, causing auroras. Miko studies the diagram with interest.",
          image: "/stories/story1/img/tech.png",
        },
        animation: ["flare-burst", "diagram-glow"],
      },
      {
        id: 9,
        title: "The Sun’s Magical Energy",
        text: "Even though solar flares sometimes caused problems, Miko admired the Sun’s incredible power. 'The Sun’s energy can travel across space and still affect Earth,' he thought. 'It creates auroras and connects everything to space. That’s amazing!' His curiosity about the universe grew stronger.",
        narrationTone: "Reflective and inspiring.",
        illustration: {
          description:
            "Miko gazing thoughtfully out the window at auroras. A subtle overlay shows rays of solar energy traveling from the Sun to Earth.",
          image: "/stories/img/solar-energy.png",
        },
        animation: ["energy-rays", "aurora-soft"],
      },
      {
        id: 10,
        title: "Miko’s Next Invention",
        text: "That night, Miko looked at the glowing auroras and smiled. His solar-powered clock ticked happily beside him. 'I wonder what the Sun will send next,' he thought. With his invention complete, Miko felt ready for new surprises. The sky was full of wonders, and the Sun’s energy would always inspire his next great idea.",
        narrationTone: "Dreamy, closing bedtime tone.",
        illustration: {
          description:
            "Miko standing proudly beside his working solar-powered clock, gazing out the window at glowing auroras. His workshop is filled with creative inventions.",
          image: "/stories/img/idea.png",
        },
        animation: ["aurora-bright", "star-twinkle"],
      },
    ],
  },
  {
    id: "solar-diary",
    title: "The Diary of a Solar Storm",
    description:
      "Follow Solara, a playful solar storm, as she travels from the Sun to Earth.",
    coverImage: "https://i.ibb.co.com/ZRMj3MZs/sola.png",
    pdfUrl:
      "https://drive.google.com/file/d/1WJhvHlBgZmyPNm4JNnvEaA3AXCiJQbJd/preview",
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
  {
    id: "farmer-solar-storm",
    title: "Farmer Ben and the Solar Storm",
    description:
      "Farmer Ben discovers how solar flares and space weather affect the farm and everyday life, learning about auroras and the Sun’s energy.",
    coverImage: "https://i.ibb.co.com/R4N9DLvF/6.png",
    pdfUrl:
      "https://drive.google.com/file/d/17nEhcCIIaHuFgTFn3hqOMfw52rz8Apv0/preview",

    pages: [
      {
        id: 1,
        title: "Meet Farmer Ben",
        text: "Farmer Ben loved his farm. He woke up early every day to take care of his animals, plant crops, and watch the sun rise. But today was different. As he stepped outside, he saw something strange in the sky. 'What’s that glow?' Ben wondered. 'It looks like the sky is dancing!'",
        narrationTone: "Friendly, curious, engaging for children.",
        illustration: {
          description:
            "Farmer Ben standing outside his farmhouse holding a pitchfork, with animals nearby. The morning sun rises behind him and the sky glows with auroras.",
          image: "/stories/story1/img/farmer.png",
        },
        animation: ["sunrise-glow", "aurora-faint"],
      },
      {
        id: 2,
        title: "What Are Those Colors?",
        text: "The sky was filled with beautiful colors—green, purple, and pink—swirling and shimmering like a rainbow! Ben was curious. 'What’s causing all of this?' he asked. His friend, Professor Lisa, who worked at the local science lab, called him on the phone. 'Ben, that’s the aurora! It’s a space weather event caused by solar flares from the Sun!'",
        narrationTone: "Magical and curious.",
        illustration: {
          description:
            "Ben holding his phone with Professor Lisa on the screen. The sky is full of colorful auroras swirling above the farm.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["phone-ring", "aurora-dance"],
      },
      {
        id: 3,
        title: "What is Space Weather?",
        text: "Professor Lisa explained, 'Space weather happens when the Sun releases bursts of energy, called solar flares. These flares send waves of light and particles to Earth. When they hit Earth’s atmosphere, they make the auroras—the beautiful lights you’re seeing!'",
        narrationTone: "Informative and simple for kids.",
        illustration: {
          description:
            "Diagram showing the Sun sending a solar flare to Earth, which causes glowing auroras in the atmosphere.",
          image: "/stories/story1/img/sattelite-dish.png",
        },
        animation: ["flare-travel", "aurora-glow"],
      },
      {
        id: 4,
        title: "A Solar Storm on the Farm",
        text: "'But the auroras aren’t the only thing the solar flare is doing,' Professor Lisa warned. 'A solar storm can mess with your GPS and satellite systems.' Ben looked at his tractor. The GPS wasn’t working! 'Uh-oh!' said Ben. 'I guess I’ll have to do it the old-fashioned way today!'",
        narrationTone: "Lightly suspenseful, playful.",
        illustration: {
          description:
            "Ben standing next to his tractor, looking confused at the GPS error message. Auroras still shine in the sky.",
          image: "/stories/story1/img/storm.png",
        },
        animation: ["gps-error", "aurora-faint"],
      },
      {
        id: 5,
        title: "The Farm Without GPS",
        text: "Ben decided to trust his instincts and start plowing the field without the GPS. 'It’s like old times!' he laughed. As he worked, he thought about how space weather affects not just farmers, but everyone. Solar storms can mess with everything—from satellite TV to GPS, and even power grids.",
        narrationTone: "Playful, educational.",
        illustration: {
          description:
            "Ben plowing the field manually with a smile. The sun sets behind him and auroras glow in the sky. Farm animals follow along peacefully.",
          image: "/stories/img/no-gps.png",
        },
        animation: ["tractor-move", "aurora-dance"],
      },
      {
        id: 6,
        title: "The Return of the Calm",
        text: "As the night went on, the auroras slowly faded. The sky returned to peaceful blue, and Ben’s GPS system came back online. 'Everything’s back to normal,' he smiled. 'But that was an exciting reminder of how space weather can affect us, even out here on the farm!'",
        narrationTone: "Calm and reflective.",
        illustration: {
          description:
            "Night sky calming, auroras fading. Farmer Ben relaxing on his porch, enjoying the peaceful farm.",
          image: "/stories/story1/img/moon.png",
        },
        animation: ["aurora-fade", "porch-light"],
      },
      {
        id: 7,
        title: "What is a Solar Flare?",
        text: "'Solar flares are like giant bursts of energy that shoot out from the Sun,' Professor Lisa had explained. 'They release light, heat, and particles into space. These flares can travel all the way to Earth, and when they hit Earth’s magnetic field, they create the auroras you saw!'",
        narrationTone: "Educational and engaging.",
        illustration: {
          description:
            "Diagram showing a solar flare bursting from the Sun, traveling through space, and impacting Earth's magnetic field.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["flare-burst", "magnetic-field-glow"],
      },
      {
        id: 8,
        title: "The Solar Storm's Power",
        text: "Ben had learned that solar storms could cause more than just a pretty light show. 'They can mess with our electronics and even cause power outages,' Professor Lisa had warned. 'So, it’s important to understand space weather.' Ben smiled and said, 'I never thought about how much the Sun affects us!'",
        narrationTone: "Informative with wonder.",
        illustration: {
          description:
            "Ben looking up at the Sun thoughtfully. Farm animals graze peacefully while auroras glow in the background.",
          image: "/stories/story1/img/solar-storm.png",
        },
        animation: ["sun-glow", "aurora-soft"],
      },
      {
        id: 9,
        title: "What We Learned About Space Weather",
        text: "Farmer Ben now knew that space weather was more than just the beautiful auroras. It came from the Sun, in the form of solar flares and CMEs. While space weather can be beautiful, it’s also important to understand how it affects our lives—like messing with GPS, power grids, and satellites.",
        narrationTone: "Reflective, educational.",
        illustration: {
          description:
            "Ben in front of his farmhouse at twilight, auroras fading in the sky. He smiles, knowing he’s learned something new.",
          image: "/stories/img/atmospheric-conditions.png",
        },
        animation: ["twilight-glow", "aurora-last-streak"],
      },
      {
        id: 10,
        title: "Looking to the Future",
        text: "'The auroras are beautiful, but now I know how space weather works,' said Ben, watching the stars twinkle. 'And I’m glad I learned about the Sun’s power!' He sat on his porch, ready for whatever space weather would bring next. There’s always more to learn about the world above us!",
        narrationTone: "Calm, hopeful bedtime tone.",
        illustration: {
          description:
            "Ben sitting on his porch, looking at a starry sky. Auroras are fading, leaving a peaceful night full of possibilities.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["stars-twinkle", "aurora-fade"],
      },
    ],
  },
  {
    id: "lily-northern-lights",
    title: "Lily the Photographer and the Northern Lights",
    description:
      "Lily, a young photographer, discovers the Northern Lights and learns how space weather affects Earth and technology.",
    coverImage: "https://i.ibb.co.com/0RvVrC06/7.png",
    pdfUrl:
      "https://drive.google.com/file/d/1SBnQ9k_-0wv_ItZEd2D8AjVEHHjTRqnF/preview",

    pages: [
      {
        id: 1,
        title: "Meet Lily the Photographer",
        text: "Lily loved taking pictures. She traveled all over the world, capturing beautiful sunsets, majestic mountains, and peaceful lakes. But there was one thing Lily had always dreamed of photographing — the Northern Lights!",
        narrationTone: "Curious, adventurous, inspiring.",
        illustration: {
          description:
            "Lily standing in a snowy landscape, holding her camera, surrounded by tall pine trees. The sky above begins to glow with soft green and purple light.",
          image: "/stories/img/photographer.png",
        },
        animation: ["camera-focus", "aurora-faint"],
      },
      {
        id: 2,
        title: "A Perfect Night for Photos",
        text: "One cold winter evening, Lily was in the perfect spot in the Arctic, waiting for the Northern Lights. The sky was clear, and the stars sparkled like diamonds. 'Tonight might be the night!' she thought, feeling excited.",
        narrationTone: "Excited, magical.",
        illustration: {
          description:
            "Lily setting up her camera, eagerly looking at the sky. The first faint hints of auroras appear as green streaks across the dark sky.",
          image: "/stories/story1/img/cloudy-night.png",
        },
        animation: ["aurora-faint", "camera-adjust"],
      },
      {
        id: 3,
        title: "The Aurora is Born",
        text: "Suddenly, the sky exploded in bright waves of green, purple, and pink! The Northern Lights were dancing in the sky! Lily gasped in amazement. She quickly grabbed her camera and snapped a photo. 'Wow, this is the best one yet!' she thought.",
        narrationTone: "Magical, awe-filled.",
        illustration: {
          description:
            "The sky above Lily is filled with vibrant auroras swirling in colorful patterns. Lily holds her camera, capturing the magical moment with joy.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-dance", "camera-flash"],
      },
      {
        id: 4,
        title: "What Causes the Northern Lights?",
        text: "As Lily snapped more photos, she remembered something her teacher had taught her. 'The Northern Lights are caused by space weather,' her teacher had explained. 'When solar flares and CMEs (Coronal Mass Ejections) hit Earth’s atmosphere, they create these beautiful lights in the sky!'",
        narrationTone: "Educational, friendly.",
        illustration: {
          description:
            "Diagram showing the Sun sending solar flares and CMEs toward Earth. The atmosphere glows with colorful auroras created by the Sun’s energy.",
          image: "/stories/img/northern-lights.png",
        },
        animation: ["flare-travel", "aurora-glow"],
      },
      {
        id: 5,
        title: "Space Weather Affects Us All",
        text: "Lily smiled. 'So, the Sun is responsible for this beauty!' she thought. But then, she remembered something else. 'Space weather can also affect our technology. Solar storms can mess with satellites, GPS, and even cause power outages!'",
        narrationTone: "Curious, thoughtful.",
        illustration: {
          description:
            "Lily sitting on a snowbank, looking at her camera with auroras above. A thought bubble shows a satellite and GPS system being affected by solar energy.",
          image: "/stories/img/atmospheric-conditions.png",
        },
        animation: ["aurora-flicker", "satellite-energy-lines"],
      },
      {
        id: 6,
        title: "The Storm Passes",
        text: "As the night went on, the auroras slowly started to fade. The sky calmed down, and the colorful lights disappeared into the dark sky. Lily packed up her camera, feeling content. 'What an amazing adventure,' she thought. 'Space weather can be magical, but it’s good to know how it works!'",
        narrationTone: "Calm, reflective.",
        illustration: {
          description:
            "Lily walking back to her cozy cabin, with the last of the auroras gently fading behind her. Snowflakes fall around her.",
          image: "/stories/story1/img/storm.png",
        },
        animation: ["aurora-fade", "snow-fall"],
      },
      {
        id: 7,
        title: "What We Learned",
        text: "Lily learned that space weather, like solar flares and CMEs, can be both beautiful and powerful. The Northern Lights are created by the Sun’s energy interacting with Earth’s atmosphere. And even though space weather can sometimes mess with our technology, it's always amazing to see how the Sun affects Earth!",
        narrationTone: "Educational, uplifting.",
        illustration: {
          description:
            "Lily standing outside her cabin, looking up at a calm, starry sky. Her camera rests on her shoulder, and the sky is peaceful.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["stars-twinkle", "aurora-faint"],
      },
      {
        id: 8,
        title: "The Sun’s Power",
        text: "Lily thought about how the Sun is a giant ball of gas, burning billions of miles away. It’s always sending out energy — sometimes gently, sometimes more powerfully. When the Sun’s energy reaches Earth, we get sunlight, warmth, and even auroras!",
        narrationTone: "Educational, awe-inspiring.",
        illustration: {
          description:
            "Illustration of the Sun with rays extending toward Earth, showing energy reaching the planet and creating a glowing atmosphere.",
          image: "/stories/img/solar-energy.png",
        },
        animation: ["sun-rays", "aurora-glow"],
      },
      {
        id: 9,
        title: "Solar Flares and CMEs",
        text: "Lily also remembered her teacher explaining solar flares and CMEs. A solar flare is like a giant burst of energy from the Sun, while a CME is a big cloud of solar particles that can travel through space. When these hit Earth’s atmosphere, they create auroras. Sometimes they also affect satellites and even power lines!",
        narrationTone: "Educational, clear.",
        illustration: {
          description:
            "Colorful diagram showing solar flares and CMEs bursting from the Sun. Particles travel through space and interact with Earth's magnetic field, creating auroras.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["flare-burst", "aurora-dance"],
      },
      {
        id: 10,
        title: "The Beauty of Space Weather",
        text: "Lily had learned so much about space weather that night. She smiled, knowing she’d share her knowledge with her friends and family. 'Space weather is fascinating,' she thought. 'It makes the sky look beautiful, and helps us understand the powerful Sun!'",
        narrationTone: "Peaceful, reflective.",
        illustration: {
          description:
            "Lily sitting inside her cabin, looking at photographs of the Northern Lights. Warm light inside, snow outside, peaceful starlit sky through the window.",
          image: "/stories/story1/img/parabolic-antenna.png",
        },
        animation: ["cabin-light", "stars-twinkle"],
      },
    ],
  },
  {
    id: "leo-cosmic-tides",
    title: "Leo the Fisherman and the Cosmic Tides",
    description:
      "Leo, a fisherman, discovers how space weather affects Earth, the sky, the ocean, and technology while observing the Northern Lights.",
    coverImage: "https://i.ibb.co.com/4CnZh7W/8.png",
    pdfUrl:
      "https://drive.google.com/file/d/1fNSubGCYk_wf_SvnfXD923jmufKE1Tol/preview",

    pages: [
      {
        id: 1,
        title: "Meet Leo the Fisherman",
        text: "Leo the fisherman loved to be out on the water. Every morning before the sun rose, he would set out in his little boat to catch fish. The sea was always calm and peaceful, and he enjoyed the quiet sounds of the waves. But one morning, something caught his eye in the sky.",
        narrationTone: "Calm, curious.",
        illustration: {
          description:
            "Leo sitting in his boat, looking out at the calm sea. The sky above is still dark, but colorful auroras are beginning to appear in the distance.",
          image: "/stories/story1/img/fisherman.png",
        },
        animation: ["aurora-faint", "water-ripple"],
      },
      {
        id: 2,
        title: "A Mysterious Glow",
        text: "As Leo sailed further from the shore, the sky began to glow with beautiful lights—green, purple, and pink swirls dancing across the dark sky. 'What’s happening up there?' Leo wondered aloud. He had never seen the sky like this before. 'It looks like the stars are moving!'",
        narrationTone: "Amazed, curious.",
        illustration: {
          description:
            "Leo in his boat, looking up at the vibrant auroras dancing across the sky. The ocean reflects the colorful lights, and the boat drifts peacefully.",
          image: "/stories/img/northern-lights.png",
        },
        animation: ["aurora-dance", "water-reflect"],
      },
      {
        id: 3,
        title: "Leo Calls Professor Lisa",
        text: "Leo picked up his phone and called his friend, Professor Lisa, who worked at the science lab. 'Lisa, what’s happening with the sky?' he asked. Professor Lisa explained, 'Leo, what you’re seeing is called the aurora! It’s caused by space weather from the Sun. Solar flares send bursts of energy toward Earth, and when they reach our atmosphere, they make the sky light up in beautiful colors!'",
        narrationTone: "Informative, friendly.",
        illustration: {
          description:
            "Leo sitting in his boat with his phone in hand, speaking with Professor Lisa. The auroras above swirl brightly, with soft waves rippling below the boat.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-glow", "water-wave"],
      },
      {
        id: 4,
        title: "What is Space Weather?",
        text: "Professor Lisa continued, 'Space weather happens when the Sun releases bursts of energy called solar flares. These flares send light and charged particles through space. When they reach Earth’s atmosphere, they create the auroras you’re seeing!' Leo smiled, excited to learn something new. 'So, the Sun is making the sky look like this?'",
        narrationTone: "Curious, educational.",
        illustration: {
          description:
            "Diagram showing solar flares coming from the Sun and traveling through space toward Earth. The Earth glows where auroras appear, with energy particles moving toward it.",
          image: "/stories/img/atmospheric-conditions.png",
        },
        animation: ["flare-travel", "aurora-glow"],
      },
      {
        id: 5,
        title: "The Cosmic Tides",
        text: "As Leo listened to Professor Lisa, he started to think. 'If space weather can make the sky light up like this, could it affect the ocean too?' Leo wondered. Professor Lisa chuckled, 'Well, the Sun’s energy can affect more than just the sky. It can also influence the tides! The magnetic field around Earth changes during solar storms, and that can cause tiny shifts in the ocean’s movement.'",
        narrationTone: "Thoughtful, curious.",
        illustration: {
          description:
            "Leo staring out at the ocean, with auroras glowing above. The ocean reflects the lights, and small waves ripple gently in the water.",
          image: "/solar-system.png",
        },
        animation: ["aurora-faint", "water-ripple"],
      },
      {
        id: 6,
        title: "A Fisherman’s Challenge",
        text: "Leo noticed something strange. His GPS was no longer working, and his compass seemed to be spinning in circles. 'Uh-oh!' he said, scratching his head. 'It looks like the space weather is messing with my equipment!' Professor Lisa explained, 'Solar storms can interfere with GPS systems and even power grids. It’s a reminder that space weather affects more than just the sky!'",
        narrationTone: "Concerned, curious.",
        illustration: {
          description:
            "Leo looking at his GPS screen showing an error message. The compass needle spins wildly. The auroras continue to glow above.",
          image: "/stories/story1/img/weapons.png",
        },
        animation: ["gps-error", "compass-spin", "aurora-glow"],
      },
      {
        id: 7,
        title: "Fishing Without GPS",
        text: "Leo decided to trust his instincts and fish the old-fashioned way, without relying on his GPS. 'It’s like how the fishermen did it in the old days!' Leo smiled. He cast his fishing line into the water and waited patiently. As he sat back, he thought about how space weather affects not just sailors and fishermen, but everyone!",
        narrationTone: "Confident, reflective.",
        illustration: {
          description:
            "Leo fishing from his boat, with the beautiful auroras above. The water below is calm, and the boat drifts along peacefully.",
          image: "/stories/img/no-gps.png",
        },
        animation: ["aurora-dance", "water-calm"],
      },
      {
        id: 8,
        title: "The Return of Calm",
        text: "As the night went on, the auroras slowly faded, and the sky turned back to its usual dark blue. The GPS and compass returned to normal, and Leo could navigate again. 'Everything’s back to normal,' Leo said with a laugh. 'But I’ll always remember how space weather made the sky look so amazing tonight!'",
        narrationTone: "Peaceful, relieved.",
        illustration: {
          description:
            "The night sky is calm, with the last of the auroras gently fading. Leo sits back in his boat, smiling as the stars twinkle. The calm sea reflects the stars.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["aurora-fade", "stars-twinkle"],
      },
      {
        id: 9,
        title: "What We Learned",
        text: "Leo learned that space weather isn’t just beautiful; it can also cause changes here on Earth. 'Solar flares and CMEs can affect more than just the sky,' Leo said. 'They can mess with our technology and even influence the ocean tides!' He smiled and cast his fishing line one more time, knowing that space weather was something he would always think about when he looked up at the sky.",
        narrationTone: "Reflective, educational.",
        illustration: {
          description:
            "Leo holding his fishing rod with a peaceful smile, looking at the stars above. The calm ocean reflects fading auroras, and the boat gently drifts.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["stars-twinkle", "water-reflect"],
      },
      {
        id: 10,
        title: "The Magic of Space Weather",
        text: "As Leo sailed back to shore, he thought about how lucky he was to see the Northern Lights that night. 'Space weather is like magic,' Leo said with a smile. 'It can change the sky, the sea, and even our technology. But it’s always amazing to see how the Sun’s energy reaches us here on Earth!' Leo was happy knowing he’d learned something new about the universe.",
        narrationTone: "Peaceful, inspired.",
        illustration: {
          description:
            "Leo’s boat sailing back to shore, with the last auroras glowing softly. He looks up at the starry sky with a contented smile, while the ocean reflects twinkling stars.",
          image: "/stories/story1/img/parabolic-antenna.png",
        },
        animation: ["aurora-fade", "stars-twinkle", "water-reflect"],
      },
    ],
  },
  {
    id: "max-solar-surprise",
    title: "Max the Chef and the Solar Surprise",
    description:
      "Max the Chef discovers how space weather can affect Earth, electricity, and technology while witnessing the auroras from his kitchen.",
    coverImage: "https://i.ibb.co.com/8DrcVp2m/9.png",
    pdfUrl:
      "https://drive.google.com/file/d/1I9R9LZEEavsW0Ot9mgEIpULeEXd5JuLL/preview",

    pages: [
      {
        id: 1,
        title: "Meet Max the Chef",
        text: "Max the Chef owned a cozy little restaurant in the heart of town. Every day, he cooked delicious meals for everyone. From warm soups in winter to fresh salads in the summer, Max made food with love. But one cold evening, as he was preparing dinner, something strange happened.",
        narrationTone: "Warm, inviting.",
        illustration: {
          description:
            "Max in his kitchen, stirring a pot on the stove with his apron on. Through the window, the sky glows faintly with auroras.",
          image: "/stories/img/cooking.png",
        },
        animation: ["aurora-faint", "kitchen-light-flicker"],
      },
      {
        id: 2,
        title: "The Solar Surprise",
        text: "As Max was chopping vegetables, he noticed something odd. The kitchen lights flickered. 'That’s strange,' Max thought. 'The lights never flicker like that.' Just then, his phone rang. It was his friend Lisa, a scientist. 'Max, you're experiencing space weather!' Lisa said excitedly.",
        narrationTone: "Curious, surprised.",
        illustration: {
          description:
            "Max looks up at the flickering lights, holding a knife in one hand. His phone is ringing on the counter, and through the window, the auroras glow softly.",
          image: "/stories/img/interview.png",
        },
        animation: ["light-flicker", "aurora-soft"],
      },
      {
        id: 3,
        title: "What is Space Weather?",
        text: "'Space weather?' Max asked, confused. 'Yes,' Lisa explained. 'It’s when the Sun sends out energy bursts called solar flares and CMEs (Coronal Mass Ejections). This energy can affect things here on Earth, like satellites and even the electricity we use!' Max was amazed. 'So, the Sun is causing the flickering lights?'",
        narrationTone: "Curious, informative.",
        illustration: {
          description:
            "Max talking on the phone with Lisa, with a thought bubble showing solar energy traveling from the Sun to Earth. Auroras start glowing in the sky.",
          image: "/stories/img/atmospheric-conditions.png",
        },
        animation: ["aurora-start", "energy-burst"],
      },
      {
        id: 4,
        title: "Solar Flares and CMEs",
        text: "Lisa continued, 'Solar flares are huge bursts of energy from the Sun. And CMEs are big clouds of solar particles that shoot out into space. When they hit Earth’s atmosphere, they can create the auroras and sometimes cause electrical problems, like the flickering lights in your kitchen!'",
        narrationTone: "Educational, friendly.",
        illustration: {
          description:
            "Diagram showing solar flares and CMEs coming from the Sun, traveling through space toward Earth. Earth’s atmosphere glows with auroras. Max looks amazed.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["flare-burst", "aurora-glow"],
      },
      {
        id: 5,
        title: "The Kitchen Challenge",
        text: "Max chuckled. 'Well, at least I don’t need GPS to make soup!' he joked. But then, he noticed something even stranger. His oven wasn’t working right. The heat wouldn’t turn up. 'Uh-oh! Even my stove is affected by space weather!' Max said, scratching his head.",
        narrationTone: "Playful, surprised.",
        illustration: {
          description:
            "Max opening the oven door, looking surprised as the oven light flickers and doesn’t heat up. Auroras glow outside the window.",
          image: "/stories/img/no-fire.png",
        },
        animation: ["oven-flicker", "aurora-glow"],
      },
      {
        id: 6,
        title: "Max’s Creative Solution",
        text: "Max was a creative chef. He thought, 'I don’t need the oven to make a great meal!' So, he set up a big pot on the stove and made his famous space-weather soup with extra warmth. 'Who needs an oven when you’ve got creativity?' Max laughed, stirring the pot.",
        narrationTone: "Creative, cheerful.",
        illustration: {
          description:
            "Max cooking on the stove, stirring a big pot of soup. Auroras glow softly outside his kitchen window, filling the room with warm, colorful light.",
          image: "/stories/img/idea.png",
        },
        animation: ["stir-soup", "aurora-glow"],
      },
      {
        id: 7,
        title: "What is a Solar Storm?",
        text: "As Max cooked, he thought more about space weather. 'Solar storms are caused by the Sun’s energy,' Lisa had explained. 'When the Sun sends out bursts of energy, it can mess with things like satellites and GPS. It also creates the beautiful auroras we see in the sky!' Max smiled, thinking about how something so far away could make such beautiful lights.",
        narrationTone: "Reflective, educational.",
        illustration: {
          description:
            "Diagram showing solar storms affecting Earth’s atmosphere, with satellites, GPS systems, and auroras glowing in the background.",
          image: "/stories/story1/img/solar-storm.png",
        },
        animation: ["aurora-glow", "satellite-effect"],
      },
      {
        id: 8,
        title: "The Sky Clears",
        text: "As the night went on, Max noticed the auroras slowly started to fade. The sky turned calm again, and the lights in his kitchen came back to normal. Max’s oven started working again, too. 'Looks like everything’s back to normal!' Max said with a big smile.",
        narrationTone: "Peaceful, relieved.",
        illustration: {
          description:
            "Max sitting at the dinner table with a bowl of soup, smiling as the auroras fade. Kitchen lights are bright again, stars twinkle outside.",
          image: "/stories/story1/img/moon.png",
        },
        animation: ["aurora-fade", "stars-twinkle"],
      },
      {
        id: 9,
        title: "What We Learned",
        text: "Max learned that space weather, like solar flares and CMEs, can affect more than just the sky. 'Solar storms can mess with the electricity, satellites, and even power lines,' Lisa had said. 'But it’s amazing to know that space weather helps create the beautiful auroras we see!'",
        narrationTone: "Reflective, informative.",
        illustration: {
          description:
            "Max standing in his kitchen, looking out the window at the peaceful night sky. He has a peaceful smile, with his cooking tools on the counter.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["aurora-fade", "stars-twinkle"],
      },
      {
        id: 10,
        title: "The Magic of the Sun",
        text: "Max sat back and thought, 'Space weather is like magic from the Sun. It makes the sky glow and affects our world in unexpected ways. I’ll always look up at the auroras now and remember how they happen.' Max was happy to have learned something new about space and the Sun.",
        narrationTone: "Peaceful, inspired.",
        illustration: {
          description:
            "Max sitting contentedly at his table, with his bowl of soup, looking out the window at the stars and the faint remnants of auroras. He smiles, grateful for the wonders of space.",
          image: "/stories/img/sungift.png",
        },
        animation: ["aurora-fade", "stars-twinkle", "warm-light"],
      },
    ],
  },
  {
    id: "captain-mark-space-storm",
    title: "Captain Mark and the Space Storm",
    description:
      "Captain Mark experiences a solar storm on the International Space Station and learns how space weather affects Earth and astronauts.",
    coverImage: "https://i.ibb.co.com/fLM1M2B/11.png",
    pdfUrl:
      "https://drive.google.com/file/d/1g6omNTeW77fwCwRT_bKbO1dk_J7LbTmJ/preview",

    pages: [
      {
        id: 1,
        title: "Meet Captain Mark",
        text: "Captain Mark was an astronaut who lived on the International Space Station, far above Earth. Every day, he floated in space, looking down at the planet below. He loved his job, but today was different. His space weather monitor started beeping loudly.",
        narrationTone: "Calm, curious.",
        illustration: {
          description:
            "Captain Mark floating inside the ISS, looking at his space weather monitor. Earth is visible through the large window. The monitor shows a warning about a solar storm.",
          image: "/stories/story1/img/astronaut.png",
        },
        animation: ["monitor-beep", "earth-glow"],
      },
      {
        id: 2,
        title: "What is Space Weather?",
        text: "Captain Mark quickly contacted his friend, Professor Lisa, who worked at the space lab on Earth. 'Professor Lisa, what’s happening? My monitor is flashing!' he asked. Lisa smiled. 'Captain Mark, that’s a solar storm! It’s a type of space weather caused by solar flares from the Sun.'",
        narrationTone: "Informative, urgent.",
        illustration: {
          description:
            "Captain Mark talking to Professor Lisa on video call. Solar flares are visible coming from the Sun. Earth is visible through the ISS window.",
          image: "/stories/img/atmospheric-conditions.png",
        },
        animation: ["solar-flare-burst", "video-call-flicker"],
      },
      {
        id: 3,
        title: "Solar Flares and CMEs",
        text: "Professor Lisa explained, 'A solar flare is a burst of energy from the Sun. And sometimes, the Sun releases a cloud of charged particles called coronal mass ejections or CMEs. These energy bursts travel through space and can reach Earth, causing space weather!'",
        narrationTone: "Educational, friendly.",
        illustration: {
          description:
            "Diagram showing solar flares and CMEs coming from the Sun and traveling through space toward Earth.",
          image: "/stories/story1/img/solar-flare.png",
        },
        animation: ["flare-burst", "particle-travel"],
      },
      {
        id: 4,
        title: "The Solar Storm Hits",
        text: "Suddenly, Captain Mark’s communication system flickered. 'The storm is here!' he said, looking out the space station window. 'The solar flare is affecting our systems!' The solar storm sent waves of energy and particles through space, causing disruptions.",
        narrationTone: "Tense, dramatic.",
        illustration: {
          description:
            "Bright solar flare bursts from the Sun. Earth below shows glitches in communication lines. Captain Mark looks at his monitor showing an error.",
          image: "/stories/story1/img/storm.png",
        },
        animation: ["flare-intense", "monitor-flicker"],
      },
      {
        id: 5,
        title: "Solar Storm’s Effects on Earth",
        text: "Captain Mark looked at his monitor. 'Solar storms can mess with our technology on Earth,' he said. 'They can cause problems with satellites, GPS systems, and even power grids!' Professor Lisa added, 'But don’t worry, Captain Mark, these storms are a natural part of space weather.'",
        narrationTone: "Educational, calm.",
        illustration: {
          description:
            "Diagram showing solar storms affecting satellites and GPS systems on Earth with energy lines traveling from space.",
          image: "/stories/img/network.png",
        },
        animation: ["energy-lines", "satellite-glow"],
      },
      {
        id: 6,
        title: "The Space Station’s Shield",
        text: "Captain Mark knew the space station had special shields to protect the astronauts from the solar radiation. 'Luckily, we’re safe up here,' he said. 'But space weather can be dangerous for astronauts if we’re not prepared.'",
        narrationTone: "Reassuring, informative.",
        illustration: {
          description:
            "Captain Mark floating inside the ISS, smiling as he looks at protective shields. Outside, solar storm energy is blocked by the shields.",
          image: "/stories/img/shield.png",
        },
        animation: ["shield-glow", "solar-energy-block"],
      },
      {
        id: 7,
        title: "The Beautiful Aurora",
        text: "Even though the solar storm was powerful, it created something beautiful. 'Look at that!' Captain Mark exclaimed. 'The auroras are glowing brightly!' The solar storm’s energy created colorful lights in the Earth’s atmosphere.",
        narrationTone: "Amazed, joyful.",
        illustration: {
          description:
            "Auroras glowing above Earth in greens, purples, and pinks. Captain Mark watches from the ISS window, mesmerized.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["aurora-dance", "earth-glow"],
      },
      {
        id: 8,
        title: "The Calm After the Storm",
        text: "As the solar storm passed, the auroras slowly faded away. 'The storm is over,' Captain Mark said. 'We’re safe, and everything is back to normal.' His communication system came back online, and the Sun returned to its calm state.",
        narrationTone: "Peaceful, relieved.",
        illustration: {
          description:
            "Captain Mark looking out of the ISS window at calm Earth. Auroras faded, stars twinkle in the sky.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["aurora-fade", "stars-twinkle"],
      },
      {
        id: 9,
        title: "What We Learned",
        text: "Captain Mark learned that solar flares and CMEs are powerful events from the Sun. They send energy to Earth, creating auroras but also affecting technology. 'Space weather is fascinating,' he said. 'It’s important to understand how the Sun affects everything on Earth.'",
        narrationTone: "Reflective, educational.",
        illustration: {
          description:
            "Captain Mark floating near the ISS window, looking at peaceful Earth. The Sun shines calmly in the distance.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["earth-glow", "sun-calm"],
      },
      {
        id: 10,
        title: "Looking to the Future",
        text: "Captain Mark smiled as he gazed at the stars. 'There’s always something new to learn about space,' he thought. 'I’m glad we’re prepared to study space weather. The Sun might be far away, but it affects us here on Earth!'",
        narrationTone: "Hopeful, inspiring.",
        illustration: {
          description:
            "Captain Mark at his station, looking up at starry sky outside. Earth peaceful below, ISS floats in space.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["stars-twinkle", "earth-glow", "station-hover"],
      },
    ],
  },
  {
    id: "lila-sun-shadow",
    title: "Lila the Scientist and the Shadow of the Sun",
    description:
      "Lila, a brilliant young scientist, discovers the beauty and dangers of the Sun’s power when a mysterious villain tries to steal its energy.",
    coverImage: "https://i.ibb.co.com/v4HJ3f9c/12.png",
    pdfUrl:
      "https://drive.google.com/file/d/1fCrEr7M4SCNwU5N-f3rZDDPD3_tK96a-/preview",

    pages: [
      {
        id: 1,
        title: "Meet Lila",
        text: "Lila was a scientist who loved studying the Sun. Every day, she cared for her garden and tested her solar inventions that helped plants grow stronger. She believed the Sun was a friend, a magical giver of life. But one evening, as she watered her plants, the sky changed. The blue faded into swirling colors—greens, purples, and pinks. Lila gasped.",
        narrationTone: "Calm, magical, curious.",
        illustration: {
          description:
            "Lila watering her plants in her garden. Above her, the first bright streaks of auroras appear. Her eyes are wide with wonder.",
          image: "/stories/img/scientistg.png",
        },
        animation: ["stars-twinkle", "aurora-faint"],
      },
      {
        id: 2,
        title: "The Mysterious Glow",
        text: "The colors in the sky danced like ribbons. 'It’s so beautiful… but why now?' Lila whispered. Suddenly, her solar gadgets flickered. The lights dimmed, and her lab screens blinked red. Something was wrong.",
        narrationTone: "Curious, slightly tense.",
        illustration: {
          description:
            "The auroras swirl dramatically. Lila’s solar gadgets in the garden glow, then flicker. Lila kneels beside them, looking worried.",
          image: "/stories/img/northern-lights.png",
        },
        animation: ["aurora-dance", "gadgets-flicker"],
      },
      {
        id: 3,
        title: "The Villain Appears",
        text: "A deep laugh echoed through the night. From the shadows stepped Umbra, a villain who wanted to steal the Sun’s power for himself. 'Your Sun is weak, Lila,' Umbra sneered. 'With this storm, I’ll control its energy!' Lila’s heart raced. She knew she had to protect her garden, her inventions, and even the Sun’s gift itself.",
        narrationTone: "Dark, dramatic.",
        illustration: {
          description:
            "Umbra, cloaked in black shadows, appears behind Lila. His hands spark with dark energy. Lila stands protectively in front of her glowing plants.",
          image: "/stories/img/villain.png",
        },
        animation: ["shadow-rise", "plants-glow"],
      },
      {
        id: 4,
        title: "Call from Professor Sol",
        text: "Lila’s phone rang. It was Professor Sol, her mentor. 'Lila! That’s not just a storm—it’s a solar flare. Umbra is trying to twist the Sun’s energy for his own power. You must stop him!' 'But how?' Lila asked, fear in her voice. 'Remember, the Sun’s true gift is life. Use that gift to fight back,' Sol encouraged.",
        narrationTone: "Urgent, supportive.",
        illustration: {
          description:
            "Lila clutching her phone, Professor Sol’s face glowing on the screen. Behind her, Umbra spreads his dark energy across the garden.",
          image: "/stories/img/interview.png",
        },
        animation: ["phone-glow", "shadow-spread"],
      },
      {
        id: 5,
        title: "The Sun’s Gift",
        text: "Lila steadied her breath. 'The Sun gives life… it helps my plants grow strong,' she thought. She touched the leaves of her flowers, and they glowed with golden light. 'The Sun is with me,' she whispered.",
        narrationTone: "Hopeful, magical.",
        illustration: {
          description:
            "Lila’s hands glow as she touches the plants. The flowers bloom brighter, radiating golden energy. Umbra steps back, shielding his eyes.",
          image: "/stories/img/sungift.png",
        },
        animation: ["flower-glow", "umbra-shield"],
      },
      {
        id: 6,
        title: "Umbra’s Attack",
        text: "‘Foolish girl!’ Umbra shouted, sending a wave of shadow crashing into the garden. The plants bent, and her solar panels sparked. Lila stumbled but didn’t fall. Tears filled her eyes—not from fear, but from love for her garden. 'I won’t let you take the Sun’s gift!'",
        narrationTone: "Tense, emotional.",
        illustration: {
          description:
            "Umbra casting a massive shadowy wave across the garden. Lila stands firm, holding onto a glowing flower, tears glistening on her face.",
          image: "/stories/story1/img/weapons.png",
        },
        animation: ["shadow-wave", "flower-glow"],
      },
      {
        id: 7,
        title: "Lila’s Shield of Light",
        text: "The auroras above grew stronger. Lila raised her hands, and the light from her plants rose into the sky, forming a shield. The shield clashed with Umbra’s darkness, filling the night with sparks of color. The storm raged, but Lila’s love for life was stronger.",
        narrationTone: "Epic, powerful.",
        illustration: {
          description:
            "Lila standing tall, beams of golden and green light shooting upward, forming a glowing shield against Umbra’s shadow attack.",
          image: "/stories/img/solar-energy.png",
        },
        animation: ["light-shield", "shadow-clash"],
      },
      {
        id: 8,
        title: "The Beautiful Aurora",
        text: "As the shield grew, Umbra’s shadow began to fade. The garden glowed, and the auroras above danced brighter than ever. Umbra screamed as the light washed over him, dissolving his shadows. 'No! The Sun belongs to me!' 'No,' Lila said softly. 'The Sun belongs to all of us.'",
        narrationTone: "Triumphant, firm.",
        illustration: {
          description:
            "Umbra disintegrating into the night as Lila’s shield grows stronger. The auroras swirl magnificently above, lighting up the garden.",
          image: "/stories/story1/img/aurora-borealis.png",
        },
        animation: ["umbra-fade", "aurora-bright"],
      },
      {
        id: 9,
        title: "The Calm After the Storm",
        text: "The storm passed. The garden stood taller than ever, glowing in the soft aurora light. Lila sank to her knees, exhausted but proud. Professor Sol’s voice came through her phone again. 'You did it, Lila. You showed that the Sun’s power is meant for life, not destruction.' Lila smiled through her tears. 'I only protected what I loved.'",
        narrationTone: "Peaceful, warm.",
        illustration: {
          description:
            "Lila kneeling in the glowing garden, holding a bright flower. Her phone screen shows Professor Sol smiling proudly.",
          image: "/stories/story1/img/cloudy.png",
        },
        animation: ["garden-glow", "phone-smile"],
      },
      {
        id: 10,
        title: "What We Learned",
        text: "Lila learned that the Sun’s power can create storms, but it also gives life, light, and hope. Even when shadows try to steal it, love and courage shine brighter. As she looked up at the fading auroras, Lila whispered, 'The Sun’s gift is for everyone. I’ll keep protecting it—always.'",
        narrationTone: "Reflective, inspiring.",
        illustration: {
          description:
            "Lila standing in her vibrant garden at sunrise, smiling with determination. The auroras fade into dawn, and the world looks peaceful again.",
          image: "/stories/story2/img/knowledge.png",
        },
        animation: ["sunrise-glow", "aurora-fade"],
      },
    ],
  },
];
