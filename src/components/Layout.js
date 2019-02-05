import React from 'react'
import Footer from '../components/Footer.js'
// Styles
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            {/* The main header section on top of the screen */}
            <header>
                <nav />
            </header>

            <main className={styles.siteMain}>
                {/* All the main content gets inserted here, index.js, post.js */}
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
