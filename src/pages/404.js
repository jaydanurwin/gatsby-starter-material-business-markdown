import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../components/BlogLayout"

import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

import Button from "@material/react-button"

// Styles
import "../styles/app.scss"

const NotFoundPage = () => (
  <BlogLayout>
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
      <Button raised>Go Back Home</Button>
    </Link>
  </BlogLayout>
)

export default NotFoundPage
