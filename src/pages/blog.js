import React from "react"
import { graphql } from "gatsby"

import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import BlogPostGrid from "../components/BlogPostGrid/BlogPostGrid"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <CenteredLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Blog Posts
        </h1>
        <BlogPostGrid />
      </CenteredLayout>
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
