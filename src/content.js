// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Lacey Knowles: The Origin of New Species"
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
      title: "Meet Lacey Knowles",
      text: `Lacey Knowles, PhD, is Robert B. Payne Collegiate Professor of Ecology and Evolutionary Biology at University of Michigan. She is also a curator at the Museum of Zoology.`,
      video: "https://youtu.be/Rbne2Br6rQ8"
    },
    {
      title: "Rapid Divergence",
      text: `Knowles focuses on recent and rapid emergence of species. That means researching species that may have diverged quickly–as many as 100 new species in under 5 million years. Understanding this evolutionary timeline for different groups can give important insight into the process of speciation.`,
      video: "https://youtu.be/AGEAJtKA_pw"
    },
    {
      title: "Cryptic species",
      text: `Cryptic species often stump scientists because organisms that look the same on the outside turn out to be completely different internally, or in genetic makeup.\nKnowles uses genomic tools to help identify these cryptic species.`,
      video: "https://youtu.be/IECm2KtwoOw"
    },
    {
      title: `*Melanoplus* puzzle`,
      text: `For the past 20 years, Knowles has been researching a group of *Melanoplus* species of grasshoppers in the Rocky Mountains.`,
      video: "https://youtu.be/9dGNWlPzDDs"
    },
    {
      title: "New techniques, old questions",
      text: `Working with a team of experts, Knowles uses new genomic techniques and computational tools to answer old questions. Combined with morphology and traditional taxonomical analysis, these different avenues of research mean Knowles can be confident about the conclusions she draws.`,
      video: "https://youtu.be/hKZnXCHOcNo"
    },
    {
      title: "Be one with the grasshopper",
      text: `Because grasshoppers don’t fly, catching them out in the field requires thinking like one.\nBeing in the field lets Knowles’s team members see the environment of the specimens they are collecting firsthand. Along with the specimen, they collect climate, georeference, and habitat data.`,
      video: "https://youtu.be/UzLDx3pAC2k"
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
      title: "Studying speciation",
      text: `The first step in studying biodiversity is identifying new species. All the amazing biodiversity on Earth originated through *speciation*, the formation of species.\nWhen a group of individuals within a species separates from others via geographic isolation, natural selection, or genetic mutation, it develops its own unique characteristics and forms a new species. Genetic tools are crucial in finding new species.`,
      image: {
        source: "/images/654 Melanopls cimatario M Panec XII 2006 b.JPG",
        caption: `These grasshoppers may look almost identical, but their DNA reveals that they are two different species: *Melanoplus cimatario* (top) and *Melanoplus chichimecus* (bottom). \n *Courtesy of Knowles Lab / U-M Ecology and Evolutionary Biology*`,
        desc: `These grasshoppers may look almost identical, but their DNA reveals that they are two different species: *Melanoplus cimatario* (top) and *Melanoplus chichimecus* (bottom). \n *Courtesy of Knowles Lab / U-M Ecology and Evolutionary Biology*`
      }
    },
    {
      title: "Grasshopper DNA",
      text: `Researchers use genetic tools to discover whether organisms are variations of the same species or entirely new. On the surface, many organisms look identical to us, but their DNA sequences may show that they are genetically distinct. For example, there were previously thought to be 40-50 species of melanoplus grasshoppers. After sequencing the genes of a variety of melanoplus grasshopper specimens, the number jumped to over 300 distinct melanoplus species!\nGenomic tools also help us understand how species diversity forms across space and over time as climatic shifts impact the ecological habitats where these grasshoppers live.\n*Courtesy of Melissa McMasters.*`,
      image: {
        source: "/images/Grasshopper_(24617999529).jpeg",
        caption: `Image of grasshoper on a branch`,
        desc: `Image of grasshoper on a branch`
    }
  ],
  // Additional credit if needed
  credits: [

  ]
};
