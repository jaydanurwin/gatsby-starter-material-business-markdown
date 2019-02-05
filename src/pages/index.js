import React from 'react'
import Layout from '../components/Layout.js'
import SEO from '../components/meta/SEO'
import MetaLinks from '../components/meta/MetaLinks'
import RoundButton from '../components/RoundButton'
import idahoOutlineLightTheme from '../images/icons/idaho-outline--lightTheme.svg'

// Styles
import '../styles/app.scss'

export default () => (
    <Layout>
        <MetaLinks />
        <SEO />
        <h1>
            Hello, we're <b>ANOUN</b>.
        </h1>
        <div className="anoun-hero-container--buttons">
            <a href="tel:+12088079333" target="_blank">
                <RoundButton>
                    <i
                        className="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        call
                    </i>
                    Call
                </RoundButton>
            </a>
            <a href="sms:+12088079333" target="_blank">
                <RoundButton>
                    <i
                        className="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        message
                    </i>
                    Text
                </RoundButton>
            </a>
            <a
                href="mailto:jaydan.urwin@gmail.com?subject=Let's build something great!"
                target="_blank"
            >
                <RoundButton>
                    <i
                        className="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        email
                    </i>
                    Email
                </RoundButton>
            </a>
        </div>

        <h2>We believe this.</h2>
        <p>
            We believe design is in everything. Whether it's a person, place,
            thing or idea. We believe design should be done right from the
            largest to the smallest detail. No if's, and's, or{' '}
            <span role="img" aria-label="butts">
                🍑
            </span>
            's about it. We don't cut corners and we don't ship anything half
            baked or incomplete.
        </p>
        <h2>
            Made in{' '}
            <img
                src={idahoOutlineLightTheme}
                width="24px"
                height="auto"
                id="idahoImage"
                alt="idaho-state-vector-outline-svg"
            />
        </h2>
        <p>
            Although I currently call Nampa, Idaho home I can meet anywhere in
            Boise or Meridian (as long as the coffee{' '}
            <span role="img" aria-label="coffee">
                ☕️
            </span>
            is good). If none of those places are near you no problem! Shoot me
            a text, email, or message me on Instagram and we can set up a time
            for a video call!
        </p>
    </Layout>
)
