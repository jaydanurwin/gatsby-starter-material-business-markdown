import React from 'react'
import instagramOutlineLightTheme from '../images/icons/instagram-logo-outline--lightTheme.svg'

// Styles
import './footer.scss'
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <>
            <div className="footerProfileContainer">
                <a
                    href="https://www.instagram.com/anoun.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram{' '}
                    <img
                        src={instagramOutlineLightTheme}
                        id="igLogo"
                        width="14px"
                        alt="instagram-logo-vector-svg"
                    />
                </a>{' '}
                • <Link to="/about">About</Link>
            </div>
        </>
    )
}

export default Footer
