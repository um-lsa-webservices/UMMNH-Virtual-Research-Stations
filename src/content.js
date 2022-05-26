// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "U-M Biological Station: Ecology and Landscape"
  },

  // Main Content
  // example:
  // -- A video asset --
  // {
  //   title: "Meet Valeriy Ivanov",
  //   text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at the University of Michigan.\nSupported by the National Science Foundation.`,
  //   video: "https://youtu.be/lJrYeFYx374"
  // },
  // -- An image asset --
  // {
  //   title: "Field Site Location",
  //   text: `Ivanov currently works in Western Siberia in Russia, at the northern tip of the Polar Urals, or the southern peninsula of the Yamal region. The site is remote, so there is no human impact and it is far away from reindeer migration paths.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Map of locations and images of budget towers"
  //   }
  // },
  main: [
    {
      title: "Meet Monica Dus",
      text: `Monica Dus, PhD, is Assistant Professor of Molecular, Cellular, and Developmental Biology at the University of Michigan.`,
      video: "https://www.youtube.com/watch?v=jIiyGsNSmlM"
    },
    {
      title: "Studying fruit flies in the lab",
      text: `Dus’s lab studies the model organism *Drosophila melanogaster*, the common fruit flies in your kitchen.
      • Their generation time is only 10–12 days.
      • They are inexpensive and don’t require a lot of space.
      • They are easier to mutate since they only have four pairs of chromosomes.`,
      image: {
        source: "/images/Dus_01b_FlyImg.png",
        desc: "Two images; one shows a closeup of the drosophila melanogaster fruit fly, the second showing a group of them."
      }
    },
    {
      title: "A lifelong passion",
      text: `Dus’s passion for genetics and fruit flies began in high school.`,
      video: "https://www.youtube.com/watch?v=7b3UZel5M4g"
    },
    {
      title: "The fruit fly proboscis",
      text: `Fruit flies do not have teeth or a tongue. Instead, their taste sensors are on the outside of their trunk-like feeding extension, called a *proboscis.* Scientists can measure the extension response of the proboscis for research.`,
      video: "https://www.youtube.com/watch?v=iWUqYeZf8wY"
    },
    {
      title: "Different types of lab experiments",
      text: `In the lab, Dus’s team of researchers collect data about feeding patterns and behaviors of fruit flies. They try to connect behaviors to changes in the brain.`,
      video: "https://www.youtube.com/watch?v=1zRMjV_gRjk"
    },
    {
      title: "Effects of a high sugar diet",
      text: `Dus’s research show that sugar changes your taste.`,
      video: "https://www.youtube.com/watch?v=GffSMmmrQy8"
    },
    {
      title: "Sugar, sugar everywhere",
      text: `Balancing our love of sugar with a healthy diet.`,
      video: "https://www.youtube.com/watch?v=ZDKDbJTVXWg"
    },
    {
      title: "Everyone is a scientist",
      text: `If you make observations in your everyday life, you *are* a scientist!`,
      video: "https://www.youtube.com/watch?v=-UJgoU8ZlZM"
    },
  ],
  // Secondary Content
  // example:
  // Item with an accompanying image
  // {
  //   title: "Runaway melt",
  //   text: `In the far north, buried soil known as permafrost used to stay frozen year round. But the Arctic is warming more quickly than the rest of the planet. Each summer, more frozen land thaws for a longer time. Scientists are working to explain why the thaw is outpacing even their worst case predictions. The mystery is urgent--melting permafrost releases carbon dioxide, a gas that accelerates the pace of global warming.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Comparitive photos of treeline",
  // -- Text for small caption below image --
  //     caption:
  //       "Scientists remain puzzled why Arctic permafrost is melting more quickly than expected. Here, a chunk of coastal permafrost in Alaska drops into the sea.\nUSGS"
  //   }
  // },
  // Text-only item
  // {
  //   title: "Understanding the vicious cycle of global warming",
  //   text: `U-M researchers studying the warming Arctic witness firsthand the effects of climate change. They track the movement of heat energy from the Sun to air, water, and soil. They note the northward creep of the tree line, with shrubs and forests emerging where none have grown for thousands of years.\nThe carbon trapped in the permafrost is greater than that contained in the entire Amazon rainforest.\nCurrently, there is a vicious cycle, in which the Arctic warms, the permafrost thaws, //   carbon is released, and warming accelerates. U-M researchers led by Valeriy Ivanov are working with other partner universities to monitor feedback mechanisms accelerating Artic climate warming, and determine all the factors and interactions that are affecting the permafrost.`
  // }
  secondary: [
    {
      title: "Bitten by our own sweet tooth",
      text: `Sugar, a high-energy food, is rare in nature. Our bodies evolved to desire it, and to feel as though we can’t get enough.\nBut now, sugar is everywhere. People over-consume, resulting in more obesity and related illnesses.\nPeople think obesity comes from enjoying sugar too much, but the opposite is actually true—the more sugar you eat, the less you can taste and enjoy the sweetness. People seek out even more sugar to get the same pleasure.`,
      image: {
        source: "/images/candy.jpg",
        desc: "Image showing a a collection of colorful candy.",
      }
    },
    {
      title: "What we learn from the appetites of fruit flies",
      text: `U–M researcher Monica Dus studies how flies react to sugary diets. She has found that flies offered sweeter food will eat more. They also eat more if they’re in a group, and if they see other flies eating a particular food, they will eat more of the same thing.\n
      Flies get tipsy from the alcohol in rotting fruit, which also prompts them to eat more. And like humans, flies that overeat and become obese, die from the equivalent of heart attacks, kidney disease, and cancer. All of these insights can contribute to strategies designed to improve the health and eating habits of people.`
    }
  ],
  // Additional credit if needed
  credits: [

  ]
};
