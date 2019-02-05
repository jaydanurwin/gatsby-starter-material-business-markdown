import React from 'react'
import Footer from '../components/Footer.js'
// Styles
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>
            <main className="siteMain">
                {/* All the main content gets inserted here, index.js, post.js */}
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
