module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://callum-jones19.github.io/`,
    // Your Name
    name: 'Callum Jones',
    // Main Site Title
    title: `Callum Jones | SENG/LAWS Student @ UNSW`,
    // Description that goes under your name in main bio
    description: `Bachelor of Laws - LLB / Bachelor of Engineering (Software) - BE (Hons)`,
    // Optional: Twitter account handle
    // author: `@mark`,
    // Optional: Github account URL
    github: `https://github.com/callum-jones19`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/callum-jones-4823a31aa/`,
    // Content of the About Me section
    about: `Distinction average (80 WAM), 4th year Software Engineering/Law student. I'm passionate about learning new skills and applying them to provide the best possible product for clients, and pushing myself to try things beyond what I am familiar with.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'COMP6841 - FreeBSD Rootkit',
        description:
          'Researched and wrote an operational kernel-level rootkit for FreeBSD in C, meticulously documented entire research process, difficulties, and solutions. Received 100%.',
        link: 'https://github.com/callum-jones19/COMP6841_SA',
      },
      {
        name: 'COMP2511 - Java Dungeon Crawler',
        description:
          'Designed game backend with a focus on strong OOP principles and programmatic design patterns. Received 96%.',
        link: 'https://github.com/callum-jones19/comp2511-dungeon-crawler',
      },
      {
        name: 'COMP1531 - Messaging Service Backend',
        description:
          'Coded complete Python backend with a focus on DRY principles, encapsulation, and minimisation of design smells. Placed 12th on Honour Role',
        link: 'https://github.com/callum-jones19/cs1531-messenger-backend',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
