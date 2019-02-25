import React from 'react'
import Helmet from 'react-helmet'
import config from '../../utils/website.js'

const SEO = () => {
    const title = config.title
    const description = config.description
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content="https://anoun.design/images/anoun-share-image.png"
                />
            </Helmet>
        </>
    )
}

export default SEO
