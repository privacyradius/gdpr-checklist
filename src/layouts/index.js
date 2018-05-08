import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { url, productName, description, keywords } from '../shared/meta'
import social from '../images/github.png'

import { colors} from '../shared/styles'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <a href="https://github.com/privacyradius/gdpr-checklist" className="github-corner" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill={colors.blue}>
        <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#FFF" />
        <path className="octo-arm" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style={{ 'WebkitTransformOrigin': '130px 106px', 'transformOrigin': '130px 106px' }}/>
        <path className="octo-body" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"/>
      </svg>
    </a>

    <meta prefix="og: http://ogp.me/ns#" property="og:title" content="{Your content}" />
<meta prefix="og: http://ogp.me/ns#" property="og:type" content="{Your content}" />
<meta prefix="og: http://ogp.me/ns#" property="og:image" content="{Your content}" />
<meta prefix="og: http://ogp.me/ns#" property="og:url" content="{Your content}" />

    <Helmet
      title="The GDPR Checklist - A basic checklist you can use to harden your GDPR compliancy"
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'og:url', content: url },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: productName },
        { name: 'og:site_name', content: productName },
        { name: 'og:image', content: social },
        { name: 'og:description', content: description },
        { name: 'og:locale', content: 'en_US' },

        { name: 'og:type', content: 'website', prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:title', content: productName, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:url', content: productName, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:image', content: social, prefix: 'og: http://ogp.me/ns#' },
        { name: 'og:description', content: description, prefix: 'og: http://ogp.me/ns#' },
        
        { name: 'article:author', content: 'GDPRTracker' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@GDPRTracker' },
        { name: 'twitter:creator', content: '@GDPRTracker' },
        { name: 'twitter:url', content: url },
        { name: 'twitter:title', content: productName },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: social }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
