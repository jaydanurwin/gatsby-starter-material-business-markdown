import React from 'react'

// Styles
import './mdcRoundButton.scss'

const MDCRoundButton = ({ children }) => {
    return (
        <>
            <button className="mdc-button mdc-button--raised roundButton">
                {children}
            </button>
        </>
    )
}

export default MDCRoundButton

