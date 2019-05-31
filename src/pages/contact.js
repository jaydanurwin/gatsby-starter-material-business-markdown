import React from "react"
import BlogLayout from "../components/BlogLayout/BlogLayout"
import SEO from "../components/SEO/SEO"

import ContactForm from "../components/ContactForm"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  render() {
    return (
      <BlogLayout>
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>
        <section className="page-main__section contact-page-main__section">
          <div className="anoun-contact-links__section">
            <div>
              <h3>Call/Text</h3>
              <a
                href="tel:+12088079333"
                target="_blank"
                rel="noopener noreferrer"
              >
                (208) 807-9333
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a
                href="mailto:hello@anoun.company"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@anoun.company
              </a>
            </div>
            <div>
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/anoun.company"
                target="_blank"
                rel="noopener noreferrer"
              >
                @anoun.company
              </a>
            </div>
          </div>
          <h3>or just shoot us an email here!</h3>
          <ContactForm/> 
        </section>
      </BlogLayout>
    )
  }
}

export default About
