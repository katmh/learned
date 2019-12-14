/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = (props, {data}) => (
    <StaticQuery
        query={graphql`
        {
            site {
                siteMetadata {
                    title
                    url
                    description
                }
            }
          }
        `}
        render={data => {
            return (
                <Helmet>
                    <meta charset="utf-8" />
                    <title>{data.site.siteMetadata.title}{props.pageContext ? ' | ' + props.pageContext.frontmatter.title : ''}</title>
                    <link rel="canonical" href={data.site.siteMetadata.url} />
                    <link rel="icon" type="image/ico" href="favicon.ico" />
                    <meta name="description" content={data.site.siteMetadata.description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

                    <meta property="og:title" content={data.site.siteMetadata.title}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="favicon.ico"/>
                    <meta property="og:url" content={data.site.siteMetadata.url} />
                    <meta property="og:description" content={data.site.siteMetadata.description}/>

                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content={data.site.siteMetadata.title} />
                    <meta name="twitter:description" content={data.site.siteMetadata.description} />
                    <meta name="twitter:image:src" content="favicon.ico"/>
                </Helmet>
            )
        }}
    />
)

export default SEO