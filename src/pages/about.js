import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/BlogLayout/BlogLayout"
import SEO from "../components/SEO/SEO"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { html } = markdownRemark
    return (
      <BlogLayout location={this.props.location}>
        <SEO title="About" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </BlogLayout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      html
    }
  }
`
