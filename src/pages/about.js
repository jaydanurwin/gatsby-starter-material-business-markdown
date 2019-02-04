import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
// Styles
import '../styles/app.scss'

const About = ({ data: { prismicAboutpage } }) => (
    <Layout>
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
