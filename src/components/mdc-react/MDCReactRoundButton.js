import React from "react"
import Button from "@material/react-button"

import "../../styles/app.scss"

const MDCReactRoundButton = ({ children }) => {
  return (
    <div>
      <Button
        raised
        className="mdc-button--round"
        onClick={() => console.log("clicked!")}
      >
        {children}
      </Button>
    </div>
  )
}

export default MDCReactRoundButton
