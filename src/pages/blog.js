import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/BlogLayout"
import SEO from "../components/meta/SEO"

import Card, { CardPrimaryContent }from "@material/react-card"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Posts by <span className="anoun-title">ANOUN</span>
        </h1>
        <section className="page-main__section">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={node.fields.slug}>
              <Card
                className="mdc-card--clickable anoun-blog-card"
                key={node.fields.slug}
              >
                <h2>{title}</h2>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      node.frontmatter.description || node.excerpt,
                  }}
                />
              </Card>
            </Link>
          )
        })}
        </section>
      </BlogLayout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
