import React from "react";
import footerProfile from "../images/footer-profile.png";
import instagramOutlineLightTheme from "../../static/images/icons/instagram-logo-outline--lightTheme.svg";

// Styles
import styles from "../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.anounFooterContainer}>
        <img
          src={footerProfile}
          className={styles.anounFooterProfile}
          width="75px"
          alt="ANOUN-founder-profile"
        />
        <h4>Jaydan Urwin</h4>
        <p>
          founder of <b>ANOUN</b>
        </p>

        <p>(208) 807-9333</p>

        <p>jaydan.urwin@gmail.com</p>

        <p>
          Instagram{" "}
          <img
            src={instagramOutlineLightTheme}
            id="igLogo"
            width="14px"
            alt="instagram-logo-vector-svg"
          />
        </p>
      </div>
    </>
  );
};

export default Footer;
