import React from 'react'
import footerProfile from '../images/footer-profile.png'
import instagramOutlineLightTheme from '../images/icons/instagram-logo-outline--lightTheme.svg'

// Styles
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={styles.footerProfileContainer}>
                <img
                    src={footerProfile}
                    className={styles.footerProfileImage}
                    width="75px"
                    alt="ANOUN-founder-profile"
                />
                <h5>Jaydan Urwin</h5>
                <h5>
                    founder of <b>ANOUN</b>
                </h5>
            </div>
            <div className={styles.footerLinkContainer}>
                <a
                    href="tel:+12088079333"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>(208) 807-9333</p>
                </a>
                <a
                    href="mailto:jaydan.urwin@gmail.com?subject=Let's build something great!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>jaydan.urwin@gmail.com</p>
                </a>
                <a
                    href="https://www.instagram.com/anoun.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>
                        Instagram{' '}
                        <img
                            src={instagramOutlineLightTheme}
                            id="igLogo"
                            width="14px"
                            alt="instagram-logo-vector-svg"
                        />
                    </p>
                </a>
            </div>
        </>
    )
}

export default Footer
