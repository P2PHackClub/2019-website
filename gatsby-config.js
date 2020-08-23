/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `P2P Hack Club`,
        description: `A club at Peak to Peak Charter school, where we build hardware and software projects! whose Fearless Leader is Naitik Sinha`,
        url: `https://p2p.hackclub.com`,
        author: `James Kerrane`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
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
                name: `missions`,
                path: `${__dirname}/content/missions/`,
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
        `gatsby-plugin-slug`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `P2P Hack Club`,
                short_name: `P2P Hack Club`,
                start_url: `/`,
                background_color: `#7FD0D8`,
                theme_color: `#7FD0D8`,
                display: `minimal-ui`,
                icon: `content/assets/favicon.ico`, // This path is relative to the root of the site.
            },
        },
    ],
}