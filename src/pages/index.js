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
                    fontFamily: 'body',
                    my: 4,
                }}
            >
                something I learned on...
            </h1>
            {data.allRestApi5Fc10Cba7D7993C3E6E780A56F916533LearnedSheet.nodes[0].sheet.map((sheet) => {
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
                            dangerouslySetInnerHTML={{__html: (sheet.lesson ? sheet.date : '')}}
                            sx={{
                                color: '#336',
                                margin: '0 1rem 1rem 0',
                            }}
                        ></h2>
                        <p
                            dangerouslySetInnerHTML={{__html: sheet.lesson}}
                            sx={{
                                color: '#14132c',
                                lineHeight: '150%',
                                margin: '0 0 1rem',
                            }}
                        ></p>
                    </article>
                )
            })}
        </Layout>
    )
    
}

export const query = graphql`
query MyQuery {
    allRestApi5Fc10Cba7D7993C3E6E780A56F916533LearnedSheet {
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