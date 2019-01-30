import React from "react";
import Layout from "../components/Layout.js";
import Footer from "../components/Footer.js";
import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg";

// Styles
import "../styles/app.scss";

export default () => (
  <Layout>
    <h1>
      Hello, we're <b className="anoun-title">ANOUN</b>.
    </h1>
    <h3>We believe this.</h3>
    <p>
      We believe design is in everything. Whether it's a person, place, thing or
      idea. We believe design should be done right from the largest to the
      smallest detail. No if's, and's, or{" "}
      <span role="img" aria-label="butts">
        🍑
      </span>
      's about it. We don't cut corners and we don't ship anything half baked or
      incomplete.
    </p>
    <h3>
      Made in{" "}
      <img
        src={idahoOutlineLightTheme}
        width="24px"
        height="auto"
        id="idahoImage"
        alt="idaho-state-vector-outline-svg"
      />
    </h3>
    <p>
      Although I currently call Nampa, Idaho home I can meet anywhere in Boise
      or Meridian (as long as the coffee{" "}
      <span role="img" aria-label="coffee">
        ☕️
      </span>
      is good). If none of those places are near you no problem! Shoot me a
      text, email, or message me on Instagram and we can set up a time for a
      video call!
    </p>
    <Footer></Footer>
  </Layout>
  
);
