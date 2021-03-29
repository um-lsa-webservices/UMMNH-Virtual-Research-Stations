// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Dan Rabosky: The Adaptable Reptiles"
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
      title: "Meet Dan Rabosky",
      text: `Dan Rabosky is Associate Professor of Ecology and Evolutionary Biology at the University of Michigan. He is also Associate Curator of Reptiles and Amphibians at the Museum of Zoology.\nSupported by the National Science Foundation.`,
      video: "https://youtu.be/g6S5zUWbx_4"
    },
    {
      title: "How do new species form?",
      text: `Rabosky began his work in the Australian desert, researching the biodiversity of lizards. Since arriving at the University of Michigan, his research has expanded to the Peruvian Amazon. Much of his work focuses on patterns of reptile and amphibian biodiversity.\nRabosky's research asks many questions: How do new species form? What determines the number of species we see on Earth? Why do we have species at all?`,
      image: {
        source: "/images/Rabosky_02_Research.png",
        desc: "Image of charts that show evolutionary diversity."
      }
    },
    {
      title: "Collecting samples in the Peruvian Amazon",
      text: `Much of Rabosky's recent work focuses on the biodiversity of snakes and frogs in the Peruvian Amazon.`,
      video: "https://youtu.be/dU1ZT5cpGBg"
    },
    {
      title: "Find the animal",
      text: `Try your hand at active searching. If you were out in the field, could you find the animal in these pictures?`,
      video: "https://youtu.be/qmTalZIkjwU"
    },
    {
      title: "There's no substitute for specimen collection",
      text: `Rabosky and his team work together with local partners and scientists to collect data.`,
      video: "https://youtu.be/-rQxK5was9Y"
    },
    {
      title: "Mission for the future",
      text: `It is more urgent than ever to create a record of all species on Earth. The Museum of Zoology at the University of Michigan is one of the world's largest biodiversity reference libraries. It houses over 15 million specimens, including some that date back to the 1830's.`,
      video: "https://youtu.be/4FOJOHLelG8"
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
      title: "Why so many species?",
      text: `From Australia's dry desert heat to the Amazon's muggy rainforests, Earth's tropical regions burst with biodiversity. A patch of Michigan forest might be home for 20 kinds of reptiles and amphibians. A similar patch in the Amazon could hold more than 200!\nScientists are striving to find out why some parts of the world have more species than others. It helps them understand better how the natural world works and sustains itself.`,
      image: {
        source: "/images/PanelImage.png",
        desc: "Image showing a variety of reptiles.",
        caption:
          "Warm climates swarm with reptiles of every shape and color. Scientists don't know why the tropics have more biodiversity than temperate zones like that of Michigan."
      }
    },
    {
      title: "The puzzling patterns of biodiversity",
      text: `U-M zoologist Daniel Robosky and his team members explore rainforests, deserts, and other environments to collect specimens, genetic samples, and ecological data. Back at U-M, they use DNA sequencing and mathematical modeling to understand the factors that generate and maitain biodiversity.\n
      Scientists theorized that species might emerge at faster rates in warmer climates where temperature is favorable for the production of new species. But Rabosky's lab found that new species do not form more quickly in warmer climates. In fact, in some cases, they evolve fastest in places with the lowest diversity.`
    }
  ],
  // Links to more stuff
  links: [
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 1",
      buttonText: "Museum@Home",
      destination: "https://lsa.umich.edu/ummnh/visitors/museumathome.html"
    },
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 2",
      buttonText: "University of Michigan",
      destination: "https://umich.edu"
    },
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 3",
      buttonText: "NASA",
      destination: "http://nasa.gov"
    }
  ],
  // Additional credit if needed
  credits: [
    {
      image: "/images/nsfLogo.png",
      desc: "National Science Foundation Logo",
      link: "https://www.nsf.gov/"
    }
  ]
};
