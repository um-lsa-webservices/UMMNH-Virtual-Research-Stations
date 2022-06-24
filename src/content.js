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
      title: "Supporting research in the field",
      text: `Resident Biologist Adam Schubel describes how UMBS supports visiting researchers. The Biostation’s facilities include a stream lab, a chemistry lab and two flux towers that measures Co2 exchange with the atmosphere.`,
      video: "https://youtu.be/sXqLkgK5O8Q"
    },
    {
      title: "A century of research",
      text: `The UMBS is located at the “tip of the mitt.” For over a century, researchers and students have gathered to study human impact on the environment in this unique setting.`,
      video: "https://youtu.be/Wr76ZrjGUi8"
    },
    {
      title: "The value of longterm data",
      text: `As the oldest continuously running field station in the nation, UMBS researchers have collected an immense and diverse dataset. This invaluable information is carefully stored and managed so scientists will be able to access it well into the future.`,
      video: "https://youtu.be/IJBaFKIZ74s"
    },
    {
      title: "The outdoor classroom",
      text: `U-M alum and UMBS faculty member Amy Schrank, PhD, is an Adjunct Assistant Professor at the University of Minnesota. At UMBS, she uses the unique setting to expose students of all types to field work in her specialty, the biology and ecology of fishes.`,
      video: "https://youtu.be/bMXK6G8PeKM"
    },
    {
      title: "Studying hydrology in a one-of-a-kind lab",
      text: `Phoebe Aron, PhD is a postdoctoral fellow at the University of Michigan. Focusing on hydrology and climate sciences, her research at UMBS looks at the role of forest structure in water regulation.`,
      video: "https://youtu.be/m9n8uoGsO_o"
    },
    {
      title: "The year I stopped being afraid",
      text: `Every year, UMBS welcomes U-M students to its campus for summer courses. For many, the hands on learning in the field can be a life changing experience.`,
      video: "https://youtu.be/j5ynuf_BC74"
    },
    {
      title: "Conversations to collaborations",
      text: `The living-learning community at UMBS makes it easy to connect with other students and researchers. Sometimes, the best science collaborations begin from a simple conversation.`,
      video: "https://youtu.be/rdr223ATSWE"
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
      title: "Born from the ashes",
      text: `The University of Michigan Biological Station (UMBS) is located on the ancestral land of the Burt Lake Band of Ottawa and Chippewa Indians. After the Band’s forced relocation, logging and fires destroyed the landscape. UMBS was established in 1909 on land acquired from lumber barons. For decades, student and faculty researchers studied first-hand how land exploitation impacted the environment. The 10,000-acre property has since been reforested via natural processes.\n*Top image courtesy of U-M Biological Station*\n*Bottom image courtesy of John Den Uyl*`,
      image: {
        source: "/images/UMBS_Poster_Image1.jpeg",
        caption: `Top image: After Michigan's logging era, much of the northern part of the state looked like a wasteland.\nBottom image: The view above the rain garden toward Douglas Lake at UMBS.`,
        desc: "Top image: After Michigan's logging era, much of the northern part of the state looked like a wasteland.\nBottom image: The view above the rain garden toward Douglas Lake at UMBS."
      }
    },
    {
      title: "Community and collaborations",
      text: `Today, UMBS students engage in and learn about biology and environmental science by studying directly in the field and by working alongside experts. UMBS is a highly interactive community where students, faculty and researchers come together to learn about the natural world, to examine environmental change, and to seek solutions to the critical environmental challenges of our times—climate change and invasive species foremost among them.\n*Courtesy of U-M Biological Station*`,
      image: {
        source: "/images/Logging.jpeg",
        caption: `Students participate in a field lab at Sturgeon Bay in 2019.`,
        desc: "Students participate in a field lab at Sturgeon Bay in 2019."
      }      
    }
  ],
  // Additional credit if needed
  credits: [

  ]
};
