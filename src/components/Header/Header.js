import { Link } from "gatsby"
import React, { Component } from "react"

import styles from "./header.module.scss"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li>
        <Link to={props.to} activeClassName={styles.activeLink}>
          {props.children}
        </Link>
      </li>
    )
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul>
            <ListLink to={`/`}>home</ListLink>
            <ListLink to={`/blog/`}>blog</ListLink>
            <ListLink to={`/contact/`}>contact</ListLink>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
