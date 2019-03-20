import React from "react"

// Styles
import "./mdcCardClickable.scss"

const MDCCard = ({ children }) => {
  return (
    <>
      <div class="mdc-card mdc-card--clickable">{children}</div>
    </>
  )
}

export default MDCCard
