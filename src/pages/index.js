import React from "react";
import footerProfile from "../../static/images/footer-profile.png";
import instagramOutlineLightTheme from "../../static/images/instagram-logo-outline--lightTheme.svg";
import idahoOutlineLightTheme from "../../static/images/idaho-outline--lightTheme.svg";
import {
    Body1,
    Body2,
    Button,
    Caption,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    Headline6,
    Overline,
    Subtitle1,
    Subtitle2,
} from '@material/react-typography';

// Styles
import "../styles/app.scss";

export default () => (
    <section className="anoun-hero-section">
        <Headline3>
            Hello, we're <span className="anoun-title">ANOUN</span>.
        </Headline3>
        <Headline4>We believe this.</Headline4>
        <Body1>
            We believe design is in everything. Whether it's a person, place,
            thing or idea. We believe design should be done right from the
            largest to the smallest detail. No if's, and's, or <span role="img" aria-label="butts">🍑</span>'s  about it. We don't cut corners and we don't ship anything half
            baked or incomplete.
        </Body1>
        <Headline4>
            Made in{" "}
            <img
                src={idahoOutlineLightTheme}
                width="24px"
                height="auto"
                id="idahoImage"
                alt="idaho-state-vector-outline-svg"
            />
        </Headline4>
        <Body1>
            Although I currently call Nampa, Idaho home I can meet anywhere in
            Boise or Meridian (as long as the coffee{" "}
            <span role="img" aria-label="coffee">
                ☕️
            </span>
            is good). If none of those places are near you no problem! Shoot me
            a text, email, or message me on Instagram and we can set up a time
            for a video call!
        </Body1>


        <div class="anoun-footer-container">
            <img
                src={footerProfile}
                class="anoun-footer-profile__img"
                width="75px"
                alt="ANOUN-founder-profile"
            />
            <Headline5 id="footer-name">Jaydan Urwin</Headline5>
            <Body1>
                founder of <span class="anoun-title">ANOUN</span>
            </Body1>

            <Body1 class="mdc-typography--body">(208) 807-9333</Body1>

            <Body1 class="mdc-typography--body">jaydan.urwin@gmail.com</Body1>

            <Body1 class="mdc-typography--body">
                Instagram
                <img
                    src={instagramOutlineLightTheme}
                    id="igLogo"
                    width="14px"
                    alt="instagram-logo-vector-svg"
                />
            </Body1>
        </div>
    </section>
);
