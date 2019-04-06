import React from "react"
import Button from "@material/react-button"

import "../../styles/app.scss"

const MDCReactButton = ({ children }) => {
  return (
    <>
      <div>
        <Button raised onClick={() => console.log("clicked!")}>
          {children}
        </Button>
      </div>
    </>
  )
}

export default MDCReactButton
