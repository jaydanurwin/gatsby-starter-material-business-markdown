import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../images/icons/instagram-round-white-24px.svg"
import youtubeIcon from "../images/icons/youtube-icon-24px.svg"

import footerLogo from "../images/ANOUN-footer-logo.png"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <nav>
          {/* LOGO */}
          <Link to="/">
            <img
              src={footerLogo}
              width="100px"
              alt="ANOUN-logo"
              style={{ marginBottom: `8px` }}
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="https://www.instagram.com/anoun.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              className={styles.footerIcon}
              width="18px"
              alt="instagram-logo-vector-svg"
            />{" "}
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCr6HXKDblu-_gxDxCZMbRoQ?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtubeIcon}
              className={styles.footerIcon}
              width="18px"
              alt="instagram-logo-vector-svg"
            />{" "}
            YouTube
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
