/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          'https://v2-api.sheety.co/5fc10cba7d7993c3e6e780a56f916533/learned/sheet'
        ]
      }
    }
  ]
}
