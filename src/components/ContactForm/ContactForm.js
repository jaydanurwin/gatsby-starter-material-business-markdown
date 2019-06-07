import React from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
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
      <form
        action="https://submit-form.com/Ef-rBn5SOH9VcX_ynAt4F"
        target="_self"
        className="anoun-contact__form"
      >
        {/* <!-- Prevent spam without a captcha --> */}
        <input
          type="checkbox"
          name="_honeypot"
          tabindex="-1"
          autocomplete="off"
          hidden
        />
        <TextField
          label="Full Name"
          leadingIcon={<MaterialIcon icon="person" />}
        >
          <Input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
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
          trailingIcon={<MaterialIcon icon="send" />}
          onClick={() => console.log("clicked!")}
        >
          send
        </Button>
      </form>
    )
  }
}

export default ContactForm

