import React from "react"
import { graphql } from "gatsby"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"
import Layout from "../components/Layout"

import WorkCardGrid from "../components/work-card-grid"

// import MDCReactRoundButton from "../components/mdc-react/MDCReactRoundButton"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/undraw-hero-image.svg"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <MetaLinks />
        <section className="anoun-home--section1">
          <h1>
            Hi, we're <span className="anoun-title">ANOUN</span>
          </h1>
          <img src={heroImage} alt="anoun-hero-image" />
        </section>
        <section className="anoun-home--section2">
          <h2>We like to call ourselves a business business</h2>
          <h2>We don't just do web design</h2>
          <h2>We don't just do marketing</h2>
          <h2>We help <strong>build</strong> your business</h2>
        </section>
        <section>
          <WorkCardGrid />
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
