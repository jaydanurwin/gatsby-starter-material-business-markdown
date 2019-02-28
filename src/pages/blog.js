// import React from 'react'
// import { graphql } from 'gatsby'
// import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
// import SEO from '../components/seo'
// import Layout from '../components/layout'

// export const query = graphql`
//   query BlogPageQuery {
//     posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             asset {
//               _id
//             }
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

// const BlogPage = props => {
//   const { data, errors } = props

//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     )
//   }

//   const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

//   return (
//     <Layout>
//       <SEO title='Blog' />
//       <h1>Posts</h1>
//       {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
//     </Layout>
//   )
// }

// export default BlogPage
