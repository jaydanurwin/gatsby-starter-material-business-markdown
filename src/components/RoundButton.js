import React from 'react'

// Styles
import './roundButton.scss'

const RoundButton = ({ children }) => {
    return (
        <>
            <button className="mdc-button mdc-button--outlined">
                {children}
            </button>
        </>
    )
}

export default RoundButton
