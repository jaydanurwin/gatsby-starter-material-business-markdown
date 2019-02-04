import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/meta/SEO'
import MetaLinks from '../components/meta/MetaLinks'
import Layout from '../components/Layout.js'

// Styles
import '../styles/app.scss'

const Post = ({ data: { prismicPost } }) => {
    const { data } = prismicPost
    return (
        <Layout>
            <MetaLinks />
            <SEO />
            <h1>{data.title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </Layout>
    )
}

export default Post

export const pageQuery = graphql`
    query PostBySlug($uid: String!) {
        prismicPost(uid: { eq: $uid }) {
            uid
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
