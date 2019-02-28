import React from 'react'

// Styles
import './mdcRoundButton.scss'

const MDCRoundButton = ({ children }) => {
    return (
        <>
            <button className="mdc-button mdc-button--raised roundButton">
                {/* <i
                    class="material-icons mdc-button__icon"
                    aria-hidden="true"
                >
                
                </i> */}
                {/* <span class="mdc-button__label"></span> */}
                {children}
            </button>
        </>
    )
}

export default MDCRoundButton

