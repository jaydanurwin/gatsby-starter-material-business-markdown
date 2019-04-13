import React from "react"
import { Link } from "gatsby"
import Header from "./Header"

// import instagramIcon from "../images/icons/instagram-round-white-24px.svg"

import styles from "./layout.module.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.siteContainer}>
        <Header />
        <div className={styles.siteMain}>{children}</div>
        <footer className={styles.siteFooter}>
          {/* <a
            href="https://www.instagram.com/anoun.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram{" "}
            <img
              src={instagramIcon}
              id="igLogo"
              width="14px"
              alt="instagram-logo-vector-svg"
            />
          </a>*/}
          <Link to="/">Home</Link>
          {" • "} <Link to="/blog">Blog</Link> {"• "}
          <Link to="/about">About</Link>
          {/* <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div> */}
        </footer>
      </div>
    )
  }
}

export default Layout
