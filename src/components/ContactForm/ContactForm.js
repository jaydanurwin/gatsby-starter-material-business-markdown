import React from "react"
import TextField, {Input} from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import {Snackbar} from '@material/react-snackbar'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      open:false
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch('https://submit-form.com/JOkjn0y8YzUohXij-0wMg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(this.handleSuccess)
      .catch(function(error) {
        console.error(error)
      })
  }

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      open:true
    })
  }
  render() {
    return (
      
      <form
        onSubmit={this.handleSubmit}
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
        <TextField label="Email" leadingIcon={<MaterialIcon icon="email" />}>
          <Input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            required
          />
        </TextField>
        <TextField label="Phone" leadingIcon={<MaterialIcon icon="phone" />}>
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
          onClick={this.onClickSendButton}
        >
          send
        </Button>
        <Snackbar open={this.state.open} message="Sent! We'll get back to you ASAP 😊" actionText="dismiss" />
      </form>
    )
  }
}

export default ContactForm