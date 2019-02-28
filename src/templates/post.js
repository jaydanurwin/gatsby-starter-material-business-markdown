import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'

const Post = ({ data: { prismicPost } }) => {
    const { data } = prismicPost
    return (
        <Layout>
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