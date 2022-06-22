// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Jesse Capecelatro: The Physics of Flow"
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
      title: "Meet Jesse Capecelatro",
      text: `Jesse Capecelatro, PhD, is Assistant Professor of Mechanical Engineering and Aerospace Engineering at University of Michigan.`,
      video: "https://youtu.be/oTjkbPoOqB0"
    },
    {
      title: "Supercomputers",
      text: `Computational fluid dynamics would not be possible without supercomputers. Capecelatro’s research group depends on the Great Lakes high-performance computing cluster, provided by the Advanced Research Computing (ARC), a division of Information and Technology Services at University of Michigan.`,
      video: "https://youtu.be/suJsK36KRJY"
    },
    {
      title: "Fluidized bed reactor simulation",
      text: `One area of Capecelatro’s work is in the physics of turbulent multiphase flows inside fluidized bed reactors. These flow simulations at the particle scale allow innovations in renewable energy technologies to go from lab to industrial use.`,
      video: "https://youtu.be/VzUF_tePRX8"
    },
    {
      title: "Fluid dynamics of a cough",
      text: `Understanding the flow of tiny particles and aerosols of a cough is key to mitigating the spread of COVID-19.`,
      video: "https://youtu.be/vFcpWObpPhg"
    },
    {
      title: "Plume Surface Interaction",
      text: `Since 2016, Capecelatro has been working with NASA to develop predictive simulation capabilities of plume surface interactions. These multiphase flow simulations will help design spacecraft that may one day be able to take off from another planet, allowing for return missions.\nIt’s one step forward towards being able to have reliable predictive simulation on planets such as Mars.`,
      video: "https://youtu.be/uJzMSw-aS9c"
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
      title: "Fluids are all around us",
      text: `99% of the observable Universe exists in a *fluid state*—liquids and gases. *Computational fluid dynamics* is the branch of fluid mechanics that simulates fluid motion using mathematical models. With the help of supercomputers, scientists solve complex equations that describe fluid motion and the forces they exert. Fluid dynamics is used in weather prediction, combustion engine designs, renewable energy innovations, and planning for better spacecraft landings on another planet.`,
      image: {
        source: "/images/poster-greatlakes2.jpeg",
        caption: `U-M researchers use the Great Lakes cluster to calculate complex computations that would otherwise take a very long time to solve.\n*Courtesy of U-M ITS Advanced Research Computing.*`,
        desc: `U-M researchers use the Great Lakes cluster to calculate complex computations that would otherwise take a very long time to solve.\n*Courtesy of U-M ITS Advanced Research Computing.*`
      }
    },
    {
      title: "Visual simulations",
      text: `Fluids can transport contaminants and disease. At the onset of the COVID-19 pandemic, researchers used large-scale fluid dynamics simulations to model how many aerosol particles a sick passenger expels and how they travel through the interior of a U-M blue bus. The lab started with a set of physics-based equations of aerosol dispersion then wrote the computer code, using the resulting supercomputer models to overhaul bus routes and reduce possible exposure to the virus.`,
      image: {
        source: "/images/poster-micro-macro.png",
        caption: `(a) A high-resolution simulation of a realistic cough showing the turbulent flow features shortly after the cough occurred. Droplets and aerosols are shown as blue dots.\n(b) Model showing the concentration of aerosols in different parts of a Michigan blue bus.\n*Courtesy of Capecelatro Research Group and Zhihang Zhang.*`,
        desc: `(a) A high-resolution simulation of a realistic cough showing the turbulent flow features shortly after the cough occurred. Droplets and aerosols are shown as blue dots.\n(b) Model showing the concentration of aerosols in different parts of a Michigan blue bus.\n*Courtesy of Capecelatro Research Group and Zhihang Zhang.*`
      }
    }
  ],
  // Additional credit if needed
  credits: [
  //  {
  //    text: "Courtesy of U-M ITS Advanced Research Computing."
  //  },
  //  {
  //    text: "Courtesy of Capecelatro Research Group and Zhihang Zhang."
  //  }
  ]
};
