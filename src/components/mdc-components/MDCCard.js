import React from "react"

// Styles
import "./mdcCard.scss"

const MDCCard = ({ children }) => {
  return (
    <>
      <div className="mdc-card">{children}</div>
    </>
  )
}

export default MDCCard
