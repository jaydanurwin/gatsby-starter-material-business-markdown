import React from "react"
import Layout from "../components/Layout"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

// Styles
import "../styles/app.scss"

const About = () => (
  <Layout>
    <MetaLinks />
    <SEO title="About" />
    <h3>
      Why <span class="anoun-title">ANOUN</span>?
    </h3>
    <p>
      We believe that design is in everything whether it's a person, place,
      thing, or idea. Some things are absolutely designed better than others and
      the funny thing is if you notice the design of something it's probably not
      designed that well. Have you ever pulled on a door that you're supposed to
      push? We are in the business of making bold products and experiences that
      are designed so perfectly and so intentionally that you never have to ask
      for a user manual.
    </p>
    <h3>Who are you?</h3>
    <p>
      My name is Jaydan Urwin and no I didn't spell it wrong that's really how
      you spell my name. I'm a born and raised Idahoan. I am married to the
      beautiful, one and only Leana Urwin. Over the last 6 years I have learned
      brand design, web design, UI design, and graphic design and I've been
      freelancing out these skills for some time which I've really enjoyed. But
      I've always had this feeling that Boise and the Treasure Valley needs a
      really great design and content creation agency. So here we are!
    </p>
    <h3>What do you do?</h3>
    <p>
      It's funny to answer this question because there's not really a concrete
      answer since design is in everything. Our hope is eventually to help
      businesses design the perfect solution to any question they are facing.
      The best answer is that right now our services include:
    </p>
    <ul>
      <li>Web Design</li>
      <li>Client Side Web Development</li>
      <li>Android App Design</li>
      <li>iOS App Design</li>
    </ul>
    <h3>Where are you?</h3>
    <p>
      We're wherever you need us to be, that's the joy of living in the year
      2018! Although I currently call Nampa, Idaho home I can meet anywhere in
      Boise or Meridian (as long as the coffee is good). If none of those places
      are near you no problem! Shoot me a text, email, or message me on
      Instagram and we'll set up a time for a video call!
    </p>
    <h3>Are you hiring?</h3>
    <p>
      Currently we are a one man show but the plan is that it won't stay that
      way forever so if you yourself are interested or you know someone who
      would be drop us a line!
      <br />
      <br />
      "Nothing great was ever accomplished alone."
    </p>
  </Layout>
)

export default About
