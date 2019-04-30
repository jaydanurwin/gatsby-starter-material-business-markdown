import React from "react"
import { graphql, Link } from "gatsby"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"
import Layout from "../components/Layout"

import WorkCardGrid from "../components/work-card-grid"

import MDCReactRoundButton from "../components/mdc-react/MDCReactRoundButton"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/undraw-hero-image.svg"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {
    
    return (
      <Layout>
        <SEO title="Home"/>
        <MetaLinks />
        <section className="anoun-home--section1">
          <h1>
            Hi, we're <span className="anoun-title">ANOUN</span>
          </h1>
          <img src={heroImage} alt="anoun-hero" />
          <Link to="/contact">
            <MDCReactRoundButton classNames="anoun-hero__button">
              Contact Us
            </MDCReactRoundButton>
          </Link>
        </section>
        <section className="anoun-home--section2">
          <h2>We like to call ourselves a business business</h2>
          <h2>We don't just do web design</h2>
          <h2>We don't just do marketing</h2>
          <h2>
            We help <strong>build</strong> your business
          </h2>
        </section>
        <section className="anoun-home--section3">
          <h2>Our Work</h2>
          <WorkCardGrid />
        </section>
      </Layout>
    )
  }
}

export default IndexPage
