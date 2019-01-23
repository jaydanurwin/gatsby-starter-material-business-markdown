import React from "react";
import footerProfile from "../../static/images/footer-profile.png";
import instagramOutlineLightTheme from "../../static/images/instagram-logo-outline--lightTheme.svg";
import idahoOutlineLightTheme from "../../static/images/idaho-outline--lightTheme.svg";

// Styles
import "../styles/app.css";

export default () => (
    <section className="anoun-hero-section">
        <h3>
            Hello, we're <span className="anoun-title">ANOUN</span>.
        </h3>
        <h4>We believe this.</h4>
        <p>
            We believe design is in everything. Whether it's a person, place,
            thing or idea. We believe design should be done right from the
            largest to the smallest detail. No if's, and's, or <span role="img" aria-label="butts">🍑</span>'s  about it. We don't cut corners and we don't ship anything half
            baked or incomplete.
        </p>
        <h4>
            Made in{" "}
            <img
                src={idahoOutlineLightTheme}
                width="24px"
                height="auto"
                id="idahoImage"
                alt="idaho-state-vector-outline-svg"
            />
        </h4>
        <p>
            Although I currently call Nampa, Idaho home I can meet anywhere in
            Boise or Meridian (as long as the coffee{" "}
            <span role="img" aria-label="coffee">
                ☕️
            </span>
            is good). If none of those places are near you no problem! Shoot me
            a text, email, or message me on Instagram and we can set up a time
            for a video call!
        </p>
        <div class="anoun-footer-container">
            <img
                src={footerProfile}
                class="anoun-footer-profile__img"
                width="75px"
                alt="ANOUN-founder-profile"
            />
            <h5 id="footer-name">Jaydan Urwin</h5>
            <p>
                founder of <span class="anoun-title">ANOUN</span>
            </p>

            <p class="mdc-typography--body">(208) 807-9333</p>

            <p class="mdc-typography--body">jaydan.urwin@gmail.com</p>

            <p class="mdc-typography--body">
                Instagram
                <img
                    src={instagramOutlineLightTheme}
                    id="igLogo"
                    width="14px"
                    alt="instagram-logo-vector-svg"
                />
            </p>
        </div>
    </section>
);
