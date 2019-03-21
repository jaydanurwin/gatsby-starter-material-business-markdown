import React from "react"
import Layout from "../components/Layout"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

// Styles
import "../styles/app.scss"

const Blog = () => (
    <Layout>
        <MetaLinks />
        <SEO />
    </Layout>
)

export default Blog