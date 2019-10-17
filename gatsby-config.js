/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `P2P Hack Club`,
    description: `A student run middle-school club at Peak to Peak Charter school where we build amazing things.`,
    author: `thatrobotdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `src`,
    path: `${__dirname}/src/`,
  },
},
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images/`,
  },
},
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: `${__dirname}/src/missions/`,
  },
},
{
  resolve: `gatsby-transformer-remark`,
  options: {
    // CommonMark mode (default: true)
    commonmark: true,
    // Footnotes mode (default: true)
    footnotes: true,
    // Pedantic mode (default: true)
    pedantic: true,
    // GitHub Flavored Markdown mode (default: true)
    gfm: true,
    // Plugins configs
    plugins: [],
  },
},
`gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
  },
},
// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.dev/offline
// `gatsby-plugin-offline`,
  ],
}
