import React from 'react'

// Styles
import './mdcButton.scss'

const MDCButton = ({ children }) => {
    return (
        <>
            <button className="mdc-button mdc-button--raised">
                {children}
            </button>
        </>
    )
}

export default MDCButton
