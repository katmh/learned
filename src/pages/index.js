/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({data}) => {
    return (
        <Layout>
            <h1
                sx={{
                    color: 'headingText',
                    my: 4,
                }}
            >
                something I learned on...
            </h1>
            {data.allRestApiYeetyLearnedSheet.nodes[0].sheet.map((sheet) => {
                return (
                    //<p dangerouslySetInnerHTML={{__html: txt}}></p>
                    <article
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: ['1fr', '1fr 3fr'],
                            fontFamily: 'body'
                        }}
                    >
                        <h2
                            dangerouslySetInnerHTML={{__html: (sheet.lesson ? sheet.date : null)}}
                            sx={{
                                color: '#336',
                                margin: '0 1rem 1rem 0',
                            }}
                        ></h2>
                        <p
                            dangerouslySetInnerHTML={{__html: sheet.lesson ? sheet.lesson : null}}
                            sx={{
                                color: '#14132c',
                                lineHeight: '150%',
                                margin: '0 0 1rem',
                            }}
                        ></p>
                    </article>
                )
            })}
            <p
                sx={{
                    color: '#777',
                    mt: 4,
                    'a': {
                        textDecoration: 'none',
                        borderBottom: '1px solid #777',
                        paddingBottom: '2px',
                        transition: '.15s',
                        color: '#777'
                    },
                    'a:hover': {
                        color: '#444',
                        borderBottom: '1px solid #444'
                    }
                }}
            >
                made with ♥ by <a href="https://katmh.com">kat huang</a>
            </p>
        </Layout>
    )
    
}

export const query = graphql`
query MyQuery {
    allRestApiYeetyLearnedSheet {
      nodes {
        sheet {
          date
          lesson
        }
      }
    }
  }  
`

export default IndexPage