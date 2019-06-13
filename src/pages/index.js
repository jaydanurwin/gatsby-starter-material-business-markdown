import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

import Button from "@material/react-button"
import WorkCardGrid from "../components/WorkCardGrid/WorkCardGrid"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/undraw-hero-image.svg"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <section className="anoun-home--section1">
          <h1>
            Hi, we're <span className="anoun-title">ANOUN</span>
          </h1>
          <img src={heroImage} alt="anoun-hero" />
          <Link to="/contact">
            <Button raised className="mdc-button--round">
              Contact Us
            </Button>
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
