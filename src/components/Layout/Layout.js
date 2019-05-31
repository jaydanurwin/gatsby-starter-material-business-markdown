import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MetaLinks from "../MetaLinks"

import styles from "./layout.module.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.siteContainer}>
        <MetaLinks />
        <Header />
        <div className={styles.siteMain}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
