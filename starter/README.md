# gatsby-advanced-blog-starter
A pre-built tech-blog with advanced features 
## Getting Started
If you are new to gatsby and willing to start a tech-blog site immediately. This could be a great place to start from scratch focusing only content.

## Installation
Install this starter (assuming [gatsby]('https://gatsbyjs.org) is installed and updated) bu running your CLI:
```sh
gatsby new your_project_name gatsby-advanced-blog-starter
npm run develop # or gatsby-develop # or yarn develop 
```
Alternatively:
- For yarn package manager
- For npm 
```bash
npm install # or yarn install
npm run develop (for development) # or yarn develop
npm build (for production ready) # or yarn build
```
Go to `localhost:8000`
## Customization
- Put your markdown files in `/content/posts` and images in `content/images`
## Features
- Posts and pages in markdown
    - interactive code highlighting
    - embed Youtube videos
    - Embed tweets
- tags
- Sorting by dates
- sass compiled
- lazy loading image with support for blur-up effect
    - dynamically image generation on the basis of bandwidth
- code scheme (starring [New Moon](https://taniarascia.github.io/new-moon))
    - [Website Theme](www.taniarascia.com)
## Configuration
Edit `/data/site-config.js`.
```js
const config = {
    siteTitle: "GatbyJs", // Site title.
    siteShortDesc: "Gatsby adanced starter blog", // short description
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://www.example.com", // Domain of your website without pathPrefix.
    siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
    postDefaultCategoryID: "Tech", // Default category for posts.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "Aman Kumar", // Username to display in the author segment.
    userEmail: "aman29271@gmail.com", // Email used for RSS feed's author segment
    userLocation: "India", // User location to display in the author segment.
    userAvatar: "", // User avatar to display in the author segment.
    userDescription:
      "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "github",
        username: "aman29271",
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
  }
```
## Author
- Aman Kumar
## License
- MIT
