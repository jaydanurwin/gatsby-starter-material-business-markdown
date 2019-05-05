import React from "react"
import { Link } from "gatsby"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"
import Layout from "../components/Layout"

import Button from "@material/react-button"
import CardGrid from "../components/cardGrid"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/undraw-hero-image.svg"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Home" />
        <MetaLinks />
        <section className="anoun-home--section1">
          <h3>Hi, welcome to Gatsby Starter #1</h3>
          <h3>
            by <span className="anoun-title">ANOUN</span>
          </h3>
          <img src={heroImage} alt="anoun-hero" />
          <Link to="/contact">
            <Button raised className="mdc-button--round">
              Contact Us
            </Button>
          </Link>
        </section>
        <section className="anoun-home--section2">
          <h2>This is the power statement section</h2>
          <h2>Say something that stands out</h2>
          <h2>Say something visitors will remember</h2>
          <h2>
            Say something <strong>bold</strong> about your brand
          </h2>
        </section>
        <section className="anoun-home--section3">
          <h2>A Grid of Cards</h2>
          <p><em>use this for your work/projects</em></p>
          <CardGrid />
        </section>
      </Layout>
    )
  }
}

export default IndexPage
