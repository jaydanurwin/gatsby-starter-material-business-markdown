import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../images/icons/instagram-round-white-24px.svg"
import youtubeIcon from "../images/icons/youtube-icon-24px.svg"

import footerLogo from "../images/ANOUN-footer-logo.png"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <div className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div>
            <div>
              {/* LOGO */}
              <Link to="/">
                <img
                  src={footerLogo}
                  width="100px"
                  alt="ANOUN-logo"
                  style={{ marginBottom: `8px` }}
                />
              </Link>
            </div>
            <div className={styles.footerList}>
              {/* SOCIAL */}
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
          </div>
          <div>
            <h3>Pages</h3>
            <div className={styles.footerList}>
              {/* PAGES */}

              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3>Blog</h3>
            <div className={styles.footerList}>
              {/* PAGES */}

              <Link to="/hello-world">Hello World</Link>
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <div className={styles.footerList}>
              {/* PAGES */}

              <p>Web Design</p>
              <p>SEO</p>
              <p>Social Media Marketing</p>
            </div>
          </div>
        </div>

        {/* <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div> */}
      </div>
    )
  }
}

export default Footer
