import React from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import BlogLayout from "../components/BlogLayout"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"


// Styles
import "../styles/app.scss"

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      phone: "",
      message: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <BlogLayout>
        <MetaLinks />
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>

        <section className="page-main__section contact-page-main__section">
          <div className="anoun-contact-links__section">
            <div>
              <h3>Call/Text</h3>
              <a
                href="tel:+12088079333"
                target="_blank"
                rel="noopener noreferrer"
              >
                (208) 807-9333
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a
                href="mailto:hello@anoun.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@anoun.design
              </a>
            </div>
            <div>
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/anoun.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                @anoun.design
              </a>
            </div>
          </div>
          <h3>or just shoot us an email here!</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="anoun-contact__form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              label="Email"
              leadingIcon={<MaterialIcon icon="email" />}
            >
              <Input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                required
              />
            </TextField>
            <TextField
              label="Phone"
              leadingIcon={<MaterialIcon icon="phone" />}
            >
              <Input
                value={this.state.phone}
                name="phone"
                onChange={this.handleInputChange}
                required
              />
            </TextField>
            <TextField label="Message">
              <Input
                value={this.state.message}
                name="message"
                onChange={this.handleInputChange}
                required
              />
            </TextField>
            <Button
              type="submit"
              raised
              onClick={() => console.log("clicked!")}
            >
              send
            </Button>
          </form>
        </section>
      </BlogLayout>
    )
  }
}

export default About
