// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Valeriy Ivanov: Decoding Rainforests"
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
      title: "Meet Valeriy Ivanov",
      text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at University of Michigan.
      Brazil field footage courtesy of:
      Joseph Xu, University of Michigan Engineering`,
      video: "https://youtu.be/n-S9IBB8r7E"
    },
    {
      title: "Field site K67 in Brazil",
      text: `K67 (named by locals for its proximity to kilometer 67 on highway BR-163) is an Amazon rainforest field site located in the Tapajós National Forest in Brazil.
      The site provides equipment such as the 200’ tall AmeriFlux tower, which focuses measurements on carbon dioxide, as well as below ground sensors for soil water content.`,
      image: {
        source: "/images/Ivanov_K67_site_02a.png",
        desc: `AmeriFlux tower at K67 is 200 feet tall, measuring date above the rainforest canopy.`
      }
    },
    {
      title: "Sensors, meters and data",
      text: ` Ivanov installs and monitors sap flow sensors and stem psychrometers to measure water flow within the tree. 
      Measurements such as canopy structure or photosynthesis are taken by colleagues who specialize in plant physiology.  
      The collected data from K67 allows for an integrated view of how trees function in the rainforest, and allows Ivanov to create better predictive models.`,
      image: {
        source: "/images/Ivanov_K67_site_02b.png",
        desc: `Six images of stem psychrometers being installed on trees.`
      }
    },
    {
      title: "Making a bet",
      text: `Tyeen Taylor works closely with Ivanov at field site K67 and is a postdoctoral researcher at the University of Michigan, specializing in plant interactions with the atmosphere.
      Diverse species of trees have different survival strategies. These different “bets” help the Amazon rainforest survive and thrive.
      K67 field footage and specimen photos courtesy of Tyeen Taylor.
      Additional field footage courtesy of Joseph Xu, University of Michigan Engineering.`,
      video: "https://youtu.be/vNSiSph3mws"
    },
    {
      title: "From data to models",
      text: `Ivanov creates predictive models that help us understand the future of the Amazon. But how do you accurately, yet efficiently, represent 16,000 species of trees in a computer model?
      Brazil field footage and photos courtesy of Joseph Xu, University of Michigan Engineering.`,
      video: "https://youtu.be/pTZke2Xe-IE"
    },
    {
      title: "Working in a rainforest",
      text: `Field work in the Amazon comes with many trials, errors, and challenges.
      Brazil field footage and photos courtesy of Joseph Xu, University of Michigan Engineering and Tyeen Taylor.`,
      video: "https://youtu.be/K9d9ahZdR4w"
    },
    {
      title: "Conversations that lead to science",
      text: `Back at base camp, U-M researchers and local collaborators forge friendships and discover shared curiosities that make doing science in the Amazon possible.
      Brazil field footage and photos courtesy of Joseph Xu, University of Michigan Engineering and Tyeen Taylor.`,
      video: "https://youtu.be/-sGXKxfjMRM"
    }
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
      title: "What is the future of rainforests",
      text: `The planet’s future may depend on building a deeper understanding of ecohydrology in the Amazon. *Ecohydrology* is the study of the connections between living things and water. In the coming decades the climate crisis will result in an Amazon rainforest that’s hotter and drier than at any previous point in human history. Understanding the science behind the rainforest could help researchers predict future global impacts due to climate change and seek solutions.`,
      image: {
        source: "/images/candy.jpg",
        caption: `The image shows the decline of moisture in the air, particularly across the south and southeastern Amazon during the dry season months (August through October) from 1987 to 2016. The brown areas have become drier over time while in the green areas moisture has actually increased. Courtesy of NASA`,
        desc: `The image shows the decline of moisture in the air, particularly across the south and southeastern Amazon during the dry season months (August through October) from 1987 to 2016. The brown areas have become drier over time while in the green areas moisture has actually increased. Courtesy of NASA`
      }
    },
    {
      title: "Drying out the Amazon Rainforest",
      text: `In the early 2000s a massive drought hit the Amazon basin. Researchers expected the forest canopy to shut down—but they found the opposite. While some species did pull back to conserve water, others got greener even through the driest period.
      Biological diversity makes ecosystems resilient. Individual species react to conditions differently, and researchers are beginning to understand how these distinct behaviors affect the function of the ecosystem as a whole. By understanding the diversity of plants in the rainforest canopy, researchers can predict how the Amazon rainforest will transform in the future as the climate changes.`,
      image: {
        source: "/images/candy.jpg",
        caption: `Courtesy of David Riaño Cortés`,
        desc: `Courtesy of David Riaño Cortés`
    }
  ],
  // Additional credit if needed
  credits: [

  ]
};
