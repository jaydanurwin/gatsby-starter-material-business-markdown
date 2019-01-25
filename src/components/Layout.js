import React from "react";
import MetaData from "./meta/index.js";

// Styles
import styles from "../styles/components/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <MetaData />
          {/* The main header section on top of the screen */}
          <header>
              <nav>
              </nav>
          </header>

          <main className={styles.siteMain}>
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
          {/* The footer at the very bottom of the screen */}
          <footer>
          </footer>
    </>
  );
};

export default Layout;
