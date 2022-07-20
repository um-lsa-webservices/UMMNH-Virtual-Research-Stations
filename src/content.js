// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Liuyan Zhao: Lasers and Magnetism"
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
      title: "Meet Liuyan Zhao",
      text: `Liuyan Zhao, PhD, is Assistant Professor of Physics at University of Michigan.\nZhao is an experimental condensed matter physics scientist. Her research group searches for new states in materials. These new states occur at the electron level, and can be observed in unique magnetic properties.`,
      video: "https://youtu.be/EH-HKo00jWM"
    },
    {
      title: "Zhao Research Group",
      text: `How do you make a new discovery that’s never been observed, or we never knew existed before?\nZhao Research Group investigates the symmetry, time, and spatial properties of materials and elements using lasers. These measurements help them look for new states at the electron level, which are observed in unique magnetic properties.\nDiscovering these new magnetic properties may be the key to unlocking future technologies in computer sciences and data processing. Or, it might just be a new piece in the puzzle to completing fundamental quantum physics theories.`,
      image: {
        source: "/images/Zhao02GraphicA.png",
        desc: "Liuyan Zhao and her team at the Zhao Research Group laboratory. Optical instruments are meticulously set up to manipulate the laser light used for data collection."
      }
    },
    {
      title: "Lasers and optics",
      text: `Using a technique called *rotational anisotropy-second harmonic generation*, or RA-SHG, Zhao’s lab measures laser light that is reflected off of the material (the SHG signal) with a photon-sensitive camera. These sensitive cameras take up to one minute to record one pixel of an image, at the scale of 200 microns.\nRA-SHG scan data helps researchers create a map and pinpoint areas of the material to do further experiments. This includes looking at symmetrical properties, how properties change in extreme temperatures, or changes through time.`,
      image: {
        source: "/images/Zhao02GraphicB.png",
        desc: "Microscope image for NiTiO3 and SHG scanning image for NiTiO3. The area of interest is indicated by the white line bordering the light and dark areas."
      }
    },
    {
      title: "Working with 2D and 3D samples",
      text: `The materials Zhao’s lab studies are not typically found in nature. They can be 3D samples that are very small or 2D samples that are as thin as a single atom. After preparation, the samples are ready for laser light measurements, their properties with laser light, or see how they react in extreme low temperatures.\nYoungjun Ahn is a postdoctoral research fellow and Hongchao Xie is a postdoctoral scholar at the University of Michigan.`,
      video: "https://youtu.be/CYkn5jcsgE8"
    },
    {
      title: "RA-SHG",
      text: `Zhao’s lab uses a technique called rotational anisotropy-second harmonic generation, or RA-SHG. Laser light is directed onto the sample material and its properties are then observed by measuring light (the SHG signal) that reflects off of it.\nXiaoyu Guo is a graduate student in the Zhao Research Group.`,
      video: "https://youtu.be/Zo2Z1_b4lhI"
    },
    {
      title: "Measurements through time",
      text: `Time-resolved RA-SHG (Tr-RA-SHG) uses multiple laser pulses to make measurements through time. Using this technique, the Zhao Research Group can see how a sample’s properties may change through time.\nRachel Owen is a graduate student in the Department of Physics at University of Michigan.`,
      video: "https://youtu.be/uS7cPiYqMA0"
    },
    {
      title: "Completing the ferro-rotational order",
      text: `The Zhao Research Group was the first to observe a ferro-rotational moment. This phenomenon had never been directly observed before, but had been theorized in quantum physics. The result was achieved using RA-SHG techniques with the material RbFe(MoO4)2 in extremely low temperatures.\nElizabeth Drueke is a graduate student in the Department of Physics at University of Michigan.`,
      video: "https://youtu.be/_HFYKet2dqo"
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
      title: "The search for new states",
      text: `In *experimental condensed matter physics*, scientists look for new states in materials. These new states, such as magnetism, originate from interactions at the electron level. Discovering these new magnetic properties may be the key to unlocking new technologies in computer science and faster data processing. Or, it could be a new piece in the effort to complete the puzzle of fundamental quantum physics theories.\n*Courtesy of Zhao Research Group*`,
      image: {
        source: "/images/ZhaoPosterImage.jpg",
        caption: `The Zhao lab uses optical lasers to perform experiments on different materials then creates a visual map of the materials’ unique properties.`,
        desc: "The Zhao lab uses optical lasers to perform experiments on different materials then creates a visual map of the materials’ unique properties.",
      }
    },
    {
      title: "Visualizing material properties",
      text: `Researchers in condensed matter physics study ordering phenomena, or the way electrons interact and line up to give rise to new and exciting properties. Condensed matter physicists often use materials not typically found in nature. Material samples are grown in the lab for scientists to measure and observe.\nSome samples are so small that they are no longer three dimensional but rather exist in two dimensions and can be as thin as an atom.\nAfter prepping the samples, researchers measure their properties with laser light. A laser is shone onto the sample material through a set of specialized optics.\nMeasuring the light that is reflected off of the materials, scientists create a visual map of existence and distribution of ordered states, resolve the mystery of their origin, and guide the design of future experiments and applications.`
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
