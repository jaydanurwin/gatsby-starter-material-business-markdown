import React from "react"
import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import ContactForm from "../components/ContactForm/ContactForm"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  render() {
    return (
      <CenteredLayout>
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>
        <section className="page-main__section contact-page-main__section">
          <div className="anoun-contact-links__section">
            <div>
              <h3>Call/Text</h3>
              <a
                href="tel:+12088079333"
              >
                (208) 807-9333
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a
                href="mailto:hello@anoun.company"
              >
                hello@anoun.company
              </a>
            </div>
            <div>
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/anoun.company"
              >
                @anoun.company
              </a>
            </div>
          </div>
          <h3>or just shoot us an email here!</h3>
          <ContactForm />
        </section>
      </CenteredLayout>
    )
  }
}

export default About
