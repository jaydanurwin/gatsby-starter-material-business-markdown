import React from "react"
import { graphql, Link } from "gatsby"

const Index = ({ data: { prismicHomepage } }) => (
    <React.Fragment>
        <h1>{prismicHomepage.data.title.text}</h1>
        <div
            dangerouslySetInnerHTML={{ __html: prismicHomepage.data.content.html }}
        />
    </React.Fragment>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
