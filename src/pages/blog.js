import React from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/BlogLayout/BlogLayout"
import SEO from "../components/SEO/SEO"

import BlogPostGrid from "../components/BlogPostGrid/BlogPostGrid"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Posts by <span className="anoun-title">ANOUN</span>
        </h1>
        <BlogPostGrid />
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
  }
`
