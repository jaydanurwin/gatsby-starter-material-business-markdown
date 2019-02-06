import React from 'react'
import Helmet from 'react-helmet'

const MetaLinks = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <meta
                    http-equiv="X-UA-Compatible"
                    content="IE=edge,chrome=1"
                />
                {/* added refresh meta suggested by Lighthouse */}
                <meta http-equiv="refresh" />
                <meta name="theme-color" content="#503732" />
                {/* Performance tip: hint to the browser to start the handshake for the fonts site */}
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossorigin
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Helmet>
        </>
    )
}

export default MetaLinks
