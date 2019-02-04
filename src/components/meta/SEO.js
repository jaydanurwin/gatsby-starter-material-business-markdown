import React from 'react'
import Helmet from 'react-helmet'
import config from '../../utils/website.js'

const SEO = () => {
    const title = config.title
    const description = config.description
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
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}

export default SEO
