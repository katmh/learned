import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => (
    <div>
        {data.allRestApi5Fc10Cba7D7993C3E6E780A56F916533LearnedSheet.nodes[0].sheet.map((sheet) => (
            <p>{sheet.lesson ? sheet.date + ': ' + sheet.lesson : ''}</p>
        ))}
    </div>
)

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