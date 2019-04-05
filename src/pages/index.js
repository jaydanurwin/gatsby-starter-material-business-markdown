import React from "react"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"
import Layout from "../components/layout"

import WorkCardGrid from "../components/work-card-grid"

import MDCRoundButton from "../components/mdc-components/MDCRoundButton"

import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"

// Styles
import "../styles/app.scss"

class BlogIndex extends React.Component {
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
            <MDCRoundButton>
              <i className="material-icons mdc-button__icon" aria-hidden="true">
                call
              </i>
              Call
            </MDCRoundButton>
          </a>
          <a href="sms:+12088079333">
            <MDCRoundButton>
              <i className="material-icons mdc-button__icon" aria-hidden="true">
                message
              </i>
              Text
            </MDCRoundButton>
          </a>
          <a href="mailto:hello@anoun.design?subject=Let's build something great!">
            <MDCRoundButton>
              <i className="material-icons mdc-button__icon" aria-hidden="true">
                email
              </i>
              Email
            </MDCRoundButton>
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
        <div class="anoun-work__container">
          {/* Leana Urwin Card */}
          <a
            href="https://leanaurwin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDCCardClickable>
              <img
                class="mdc-card__media anoun-work-responsive__img"
                src={leanaImage}
                alt="Leana Urwin Website Screenshot"
              />
              <div class="anoun-work-card-content__container">
                <h4>Leana Urwin</h4>
                <p>Branding, Web Design</p>
                <p>
                  visit site<i class="material-icons">launch</i>
                </p>
              </div>
            </MDCCardClickable>
          </a>
          {/* McFate's Card */}
          <a
            href="https://mcfatesheatingandcooling.com"
            target="_blank"
            rel="noopener noreferrer"
            className="anoun-work-link"
          >
            <MDCCardClickable>
              <img
                class="mdc-card__media anoun-work-responsive__img"
                src={mcfatesImage}
                alt="McFate's Heating & Cooling"
              />
              <div class="anoun-work-card-content__container">
                <h4>McFate's Heating & Cooling</h4>
                <p>Branding, Web Design</p>
                <p>
                  visit site<i class="material-icons">launch</i>
                </p>
              </div>
            </MDCCardClickable>
          </a>
          {/* TUF Card */}
          <a
            href="https://tufflooring.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDCCardClickable>
              <img
                class="mdc-card__media anoun-work-responsive__img"
                src={tufImage}
                alt="TUF Flooring"
              />
              <div class="anoun-work-card-content__container">
                <h4>TUF Flooring</h4>
                <p>Web Design</p>
                <p>
                  visit site <i class="material-icons">launch</i>
                </p>
              </div>
            </MDCCardClickable>
          </a>
          {/* Moto One Card */}
          <a
            href="https://motoonektm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDCCardClickable>
              <img
                class="mdc-card__media anoun-work-responsive__img"
                src={motooneImage}
                alt="Moto One KTM"
              />
              <div class="anoun-work-card-content__container">
                <h4>Moto One KTM</h4>
                <p>Web Design</p>
                <p>
                  visit site<i class="material-icons">launch</i>
                </p>
              </div>
            </MDCCardClickable>
          </a>
        </div>
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
