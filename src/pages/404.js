import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import MetaLinks from '../components/meta/MetaLinks'
import SEO from '../components/meta/SEO'
import '../components/MDCButton'
import MDCButton from '../components/MDCButton';

// Styles
import '../styles/app.scss'

const NotFoundPage = () => (
    <Layout>
        <MetaLinks />
        <SEO />
        <h1>Uh...this is awkward</h1>
        <p>
            Uh oh! It looks like the place you were looking for is no longer
            here or there's a typo. Please check the URL for mistakes and try
            again.{' '}<span role="img" aria-label="wink">😉</span>
        </p>
        <Link to="/">
            <MDCButton>
                <i class="material-icons anoun-404-button--back" style={{marginRight:`2px`}}>arrow_back</i>
                Go Back Home
            </MDCButton>
        </Link>
    </Layout>
)

export default NotFoundPage
