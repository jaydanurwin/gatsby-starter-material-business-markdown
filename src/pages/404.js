import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

import MDCReactButton from "../components/mdc-react/MDCReactButton"

// Styles
import "../styles/app.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <MetaLinks />
    <h1>Uh...this is awkward</h1>
    <p>
      Uh oh! It looks like the place you were looking for is no longer here or
      there's a typo. Please check the URL for mistakes and try again.{" "}
      <span role="img" aria-label="wink">
        😉
      </span>
    </p>
    <Link to="/">
      {/* // TODO add back icon */}
      <MDCReactButton>Go Back Home</MDCReactButton>
    </Link>
  </Layout>
)

export default NotFoundPage
