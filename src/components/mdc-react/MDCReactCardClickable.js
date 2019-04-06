import React from "react"
import Card from "@material/react-card"

import "../../styles/app.scss"

const MDCReactCardClickable = ({ children }) => {
  return <Card className="mdc-card--clickable">{children}</Card>
}

export default MDCReactCardClickable
