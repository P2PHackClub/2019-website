/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require('./data/siteConfig')
const [github,twitter,linkedin]  = config.userLinks
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "P2P Hack Club", // Site title.
    author:config.userName,
    Email:config.userEmail,
    githubUsername: github.username,
    twitterUsername:twitter.username,
    linkedInUsername:linkedin.username,
    defaultTitle: config.siteTitle,
    defaultDescription: config.siteDescription,
    siteUrl: config.siteUrl,
    defaultImage: config.siteLogo,
  },
  plugins:[
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      }},
      {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-draft',
    {
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[
          'gatsby-remark-relative-images','gatsby-remark-prismjs',"gatsby-remark-copy-linked-files",
          {
            resolve:`gatsby-remark-images`,
            options:{
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,

  ]
}
