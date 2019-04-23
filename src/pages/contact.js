import React from "react"
import BlogLayout from "../components/BlogLayout"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

// Styles
import "../styles/app.scss"

const About = () => (
  <BlogLayout>
    <MetaLinks />
    <SEO title="Contact Us" />
    <h1>
      Contact Us
    </h1>
    <section className="page-main__section" />
  </BlogLayout>
)

export default About
