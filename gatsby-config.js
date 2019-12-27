module.exports = {
  siteMetadata: {
    title: `learned - Kat Huang`,
    url: `https://katmh.com/learned`,
    description: `chronicling something I've learned each day`
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          'https://v2-api.sheety.co/yeety/learned/sheet'
        ]
      }
    }
  ]
}
