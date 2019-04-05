import React from "react"

import leanaImage from "../images/leanaurwin.png"
import mcfatesImage from "../images/mcfatesheatingandcooling.png"
import motooneImage from "../images/motoonektm.png"
import tufImage from "../images/tufflooring.png"

import MDCCardClickable from "../components/mdc-components/MDCCardClickable"

// Styles
import "../styles/app.scss"

const WorkCardGrid = () => (
  <div class="anoun-work__container">
    {/* Leana Urwin Card */}
    <a href="https://leanaurwin.com" target="_blank" rel="noopener noreferrer">
      <MDCCardClickable>
        <img
          src={leanaImage}
          class="mdc-card__media anoun-work-responsive__img"
          alt="Leana Urwin Website Screenshot"
        />
        <div class="anoun-work-card-content__container">
          <h4>Leana Urwin</h4>
          <p>Branding, Web Design</p>
          <p>
            visit site<i class="material-icons">launch</i>
          </p>
        </div>
      </MDCCardClickable>
    </a>
    {/* McFate's Card */}
    <a
      href="https://mcfatesheatingandcooling.com"
      target="_blank"
      rel="noopener noreferrer"
      className="anoun-work-link"
    >
      <MDCCardClickable>
        <img
          src={mcfatesImage}
          class="mdc-card__media anoun-work-responsive__img"
          alt="McFate's Heating & Cooling"
        />
        <div class="anoun-work-card-content__container">
          <h4>McFate's Heating & Cooling</h4>
          <p>Branding, Web Design</p>
          <p>
            visit site<i class="material-icons">launch</i>
          </p>
        </div>
      </MDCCardClickable>
    </a>
    {/* TUF Card */}
    <a href="https://tufflooring.com" target="_blank" rel="noopener noreferrer">
      <MDCCardClickable>
        <img
          src={tufImage}
          class="mdc-card__media anoun-work-responsive__img"
          alt="TUF Flooring"
        />
        <div class="anoun-work-card-content__container">
          <h4>TUF Flooring</h4>
          <p>Web Design</p>
          <p>
            visit site <i class="material-icons">launch</i>
          </p>
        </div>
      </MDCCardClickable>
    </a>
    {/* Moto One Card */}
    <a href="https://motoonektm.com" target="_blank" rel="noopener noreferrer">
      <MDCCardClickable>
        <img
          src={motooneImage}
          class="mdc-card__media anoun-work-responsive__img"
          alt="Moto One KTM"
        />
        <div class="anoun-work-card-content__container">
          <h4>Moto One KTM</h4>
          <p>Web Design</p>
          <p>
            visit site<i class="material-icons">launch</i>
          </p>
        </div>
      </MDCCardClickable>
    </a>
  </div>
)

export default WorkCardGrid
