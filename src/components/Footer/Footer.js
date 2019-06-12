import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../../images/icons/instagram-round-white-24px.svg"
import youtubeIcon from "../../images/icons/youtube-icon-24px.svg"
import githubIcon from "../../images/icons/github-icon-24px.svg"

import footerLogo from "../../images/ANOUN-footer-logo.png"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <nav className={styles.footerNav}>
          {/* LOGO */}
          <Link to="/">
            <img
              src={footerLogo}
              width="100px"
              alt="ANOUN-logo"
              className={styles.footerLogo}
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.footerNav2}>
          <a
            href="https://www.instagram.com/anoun.company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              className={styles.footerIcon}
              width="18px"
              alt="instagram-social-link"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCr6HXKDblu-_gxDxCZMbRoQ?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtubeIcon}
              className={styles.footerIcon}
              width="24px"
              alt="youtube-social-link"
            />
          </a>
          <a
            href="https://github.com/anoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              className={styles.footerIcon}
              width="24px"
              alt="github-social-link"
            />
          </a>
        </nav>
      </footer>
    )
  }
}

export default Footer
