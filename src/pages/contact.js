import React from "react"
import TextField, { HelperText, Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import BlogLayout from "../components/BlogLayout"
import MetaLinks from "../components/meta/MetaLinks"
import SEO from "../components/meta/SEO"

// Styles
import "../styles/app.scss"

class About extends React.Component {
  

  render() {
    return (
      <BlogLayout>
        <MetaLinks />
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>
        <section className="page-main__section">
          <form
            action="https://submit-form.com/70c780b8-ef9a-4c36-ac70-bb4544542c1f"
            target="_self"
          >
            {/* <!-- Prevent spam without a captcha --> */}
            <input
              type="checkbox"
              name="_honeypot"
              style={{ display: `none` }}
              tabindex="-1"
              autocomplete="off"
            />
            <TextField
              label="Dog"
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => this.setState({ value: "" })}
              trailingIcon={<MaterialIcon role="button" icon="delete" />}
            >
              <Input
                value={this.state.value}
                onChange={e =>
                  this.setState({ value: e.currentTarget.value })
                }
              />
            </TextField>
            <TextField
              label="Dog"
              helperText={<HelperText>Help Me!</HelperText>}
              onTrailingIconSelect={() => this.setState({ value: "" })}
              trailingIcon={<MaterialIcon role="button" icon="delete" />}
            >
              <Input
                value={this.state.value}
                onChange={e =>
                  this.setState({ value: e.currentTarget.value })
                }
              />
            </TextField>
          </form>
        </section>
      </BlogLayout>
    )
  }
}

export default About
