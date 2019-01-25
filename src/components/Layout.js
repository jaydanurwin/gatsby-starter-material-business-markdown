import React from "react";
import MetaData from "./meta/index.js";

// Styles
import styles from "../styles/components/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
    <MetaData />
          {/* The main header section on top of the screen */}
          <header className="site-head">
              <nav>
              </nav>
          </header>

          <main className={styles.siteMain}>
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
          </footer>
    </>
  );
};

export default Layout;
