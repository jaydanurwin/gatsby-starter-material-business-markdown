import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MetaLinks from "../MetaLinks/MetaLinks"

import styles from "./centeredLayout.module.scss"

class CenteredLayout extends React.Component {
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

export default CenteredLayout
