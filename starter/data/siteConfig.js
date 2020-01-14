const config = {
    siteShortDesc: "Gatsby advanced starter blog",
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://www.example.com", // Domain of your website without pathPrefix.
    siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
    postDefaultCategoryID: "Tech", // Default category for posts.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "P2P Hack Clubbbb", // Username to display in the author segment.
    userEmail: "aman29271@gmail.com", // Email used for RSS feed's author segment
    userLocation: "India", // User location to display in the author segment.
    userAvatar: "", // User avatar to display in the author segment.
    userDescription:
      "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "github",
        username: "aman29271/gatsby-advanced-blog-starter",
      },
      {
        label: "twitter",
        username: "Aman1291aman",
      },
     {
          label: "linkedIn",
          username: "aman29271",
      }
    ],
    copyright: "Copyright © 2019. Advanced User", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "#e0e0e0" // Used for setting manifest background color.
  };
  // Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
config.siteRss = `/${config.siteRss}`;

module.exports = config;

  