import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MetaLinks from "./MetaLinks"

import styles from "./blogLayout.module.scss"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.siteContainer}>
        <MetaLinks/>
        <Header />
        <div className={styles.siteMain}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default BlogLayout
