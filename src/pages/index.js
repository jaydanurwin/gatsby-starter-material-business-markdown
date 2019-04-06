import React from "react"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"
import Layout from "../components/layout"

import WorkCardGrid from "../components/work-card-grid"

import MDCReactRoundButton from "../components/mdc-react/MDCReactRoundButton"

import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"

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
        <h1>
          Hello, we're <b>ANOUN</b>.
        </h1>
        <div className="anoun-hero-container--buttons">
          <a href="tel:+12088079333">
            <MDCReactRoundButton>
              {/* <i className="material-icons mdc-button__icon" aria-hidden="true">
                call
              </i> */}
              Call
            </MDCReactRoundButton>
          </a>
          <a href="sms:+12088079333">
            <MDCReactRoundButton>
              {/* <i className="material-icons mdc-button__icon" aria-hidden="true">
                message
              </i> */}
              Text
            </MDCReactRoundButton>
          </a>
          <a href="mailto:hello@anoun.design?subject=Let's build something great!">
            <MDCReactRoundButton>
              {/* <i className="material-icons mdc-button__icon" aria-hidden="true">
                email
              </i> */}
              Email
            </MDCReactRoundButton>
          </a>
        </div>
        <h2>We believe this.</h2>
        <p>
          We believe design is in everything. Whether it's a person, place,
          thing or idea. We believe design should be done right from the largest
          to the smallest detail. No if's, and's, or{" "}
          <span role="img" aria-label="butts">
            🍑
          </span>
          's about it. We don't cut corners and we don't ship anything half
          baked or incomplete.
        </p>
        <h2>We made these.</h2>
        <WorkCardGrid />
        <h2>
          Made in{" "}
          <img
            src={idahoOutlineLightTheme}
            width="24px"
            height="auto"
            id="idahoImage"
            alt="idaho-state-vector-outline-svg"
          />
        </h2>
        <p>
          Although I currently call Nampa, Idaho home I can meet anywhere in
          Boise or Meridian (as long as the coffee{" "}
          <span role="img" aria-label="coffee">
            ☕️
          </span>
          is good). If none of those places are near you no problem! Shoot me a
          text, email, or message me on Instagram and we can set up a time for a
          video call!
        </p>
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
