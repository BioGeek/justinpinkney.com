module.exports = {
  siteMetadata: {
    title: `Justin Pinkney`,
    author: {
      name: `Justin Pinkney`,
      summary: `making things`
    },
    description: `Justin Pinkney's home on the web`,
    siteUrl: `https://www.justinpinkney.com/`,
    social: {
      twitter: `buntworthy`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    `gatsby-remark-images`, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            }
          },
          `gatsby-remark-images-grid`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              maxWidth: 800,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: require.resolve('./plugins/gatsby-remark-wiki-link'),
            options: {
              hrefTemplate: (permalink) => `../${permalink}`,
              pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-56611154-3`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Pinkney's home`,
        short_name: `justinpinkney`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-catch-links`,
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-plugin-react-leaflet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
