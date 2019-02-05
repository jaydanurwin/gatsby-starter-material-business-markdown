import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import MetaLinks from '../components/meta/MetaLinks'
import SEO from '../components/meta/SEO'

// Styles
import '../styles/app.scss'

const About = ({ data: { prismicAboutpage } }) => (
    
    <Layout>
        <MetaLinks />
        <SEO />
        <h1>{prismicAboutpage.data.title.text}</h1>
        <div
            dangerouslySetInnerHTML={{
                __html: prismicAboutpage.data.content.html
            }}
        />
    </Layout>
)

export default About

export const pageQuery = graphql`
    query {
        prismicAboutpage {
            data {
                title {
                    text
                }
                content {
                    html
                }
            }
        }
    }
`
