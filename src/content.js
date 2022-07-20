// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Trisha Wittkopp: Measuring Mutations"
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
      title: "Meet Trisha Wittkopp",
      text: `Trisha Wittkopp, PhD, is Arthur F. Thurnau Professor, Sally L. Allen Collegiate Professor of Ecology and Evolutionary Biology and Molecular, Cellular, and Developmental Biology at the University of Michigan.`,
      video: "https://youtu.be/pZ6rNF87Vgk"
    },
    {
      title: "Mutations",
      text: `Wittkopp’s research focuses on the rise of genetic changes through mutations over evolutionary time. Mutations are the key to biodiversity and are responsible for the diverse beauty in the natural world.`,
      video: "https://youtu.be/1q-wlGg7ra0"
    },
    {
      title: "Why don’t pigs fly?",
      text: `The developmental process within each species shapes what’s possible in mutations. For example, humans are usually symmetrical, so our left and right hands are mirrored.\nThis concept of constraint means that although we can imagine flying pigs, there is no genetic change that can cause that trait in pigs, so we may never see the day pigs fly!`,
      video: "https://youtu.be/td6CGZApqFU"
    },
    {
      title: "Working with fruit flies",
      text: `The Wittkopp Lab studies the genetic basis of differences that can be seen in cell types, between individuals of the same species, or between species. Working with different fruit fly *Drosophila* species, Wittkopp and her team look at variable traits such as pigmentation to study the role of gene expression.`,
      video: "https://youtu.be/BiPao1QZIiA"
    },
    {
      title: "One in a million",
      text: `To study the effects of new mutations and how they introduce variation, Wittkopp uses baker’s yeast, or *Saccharomyces cerevisiae*. Fruit flies have a generation time of two weeks, but in one day, yeast can reproduce in the millions.\nThat means that in a much shorter time, researchers can track the inheritance traits over time, and search for rare mutations in individual yeast cells.`,
      video: "https://youtu.be/4L-w7MX5iiI"
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
      title: "Why can’t cats shoot lasers from their eyes?",
      text: `Seemingly, laser eyes would give cats an evolutionary advantage as predators. However, there are no likely mutations in their genetic material that would allow cats to project lasers from their eyes. Without such mutations, natural selection cannot favor the evolution of this trait. Evolution isn’t only about the survival of the fittest, it also requires the arrival of the fittest through a mutation that causes a beneficial trait.`,
      image: {
        source: "/images/Laser cat.png",
        caption: `Even if it would be adaptive, cats cannot evolve laser eyes because no mutations cause lasers to develop.`,
        desc: `Even if it would be adaptive, cats cannot evolve laser eyes because no mutations cause lasers to develop.`
      }
    },
    {
      title: "Genetic mutations in SARS-CoV-2 viral strains",
      text: `The SARS-CoV-2 virus that causes COVID-19 has been acquiring random mutations ever since it jumped from animals to humans. These mutations can take the form of single-letter typos in the viral genetic code or deletions or insertions of longer stretches of genetic material. Because new mutations quickly arise with each round of replication, each copy of a virus circulating in the population offers a chance for SARS-CoV-2 to reinvent itself. The  evolutionary history of the virus, from its origins in another species to its spread within human populations, is captured within its genetic sequences, making an understanding of evolutionary biology and the tools used to study it essential for tracking and mitigating disease outbreaks. Studying the effects of new mutations and how they interact with natural selection can help us understand, prepare for, and respond to biological challenges caused by SARS-CoV-2 and other pathogens.`
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
