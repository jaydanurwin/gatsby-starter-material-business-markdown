import React from 'react'

// Styles
import './mdcRoundButton.scss'

const MDCRoundButton = ({ children }) => {
    return (
        <>
            <button className="mdc-button mdc-button--outlined roundButton">
                {children}
            </button>
        </>
    )
}

export default MDCRoundButton

