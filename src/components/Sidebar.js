import React from 'react'
import { steps } from '../data.js'
import logo from '../images/logo.svg'
import { url } from '../shared/meta'
import Scrollspy from 'react-scrollspy'

const Sidebar = props => (
  <div className="fixed">
    <a href="/">
      <img src={logo} alt="GDPR Checklist" className="logo" />
    </a>
    <nav>
      <ul>
        <Scrollspy items={['your-data', 'accountability-management', 'new-rights', 'consent', 'follow-up', 'special-cases']} currentClassName="is-current">
          { steps.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </Scrollspy>
      </ul>
    </nav>
    <div className="social">
      <h4>Share on</h4>

      <ul>
        <li>
          <a href={'https://twitter.com/intent/tweet?text=The%20GDPR%20Checklist&amp;url=' + url }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fillRule="evenodd" d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href={"https://www.facebook.com/sharer/sharer.php?u=" + url }>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="25">
              <path fillRule="evenodd" d="M11.63 8.095H7.67V5.5c0-.974.646-1.2 1.1-1.2h2.797V.014L7.717 0C3.443 0 2.47 3.195 2.47 5.24v2.855H0v4.414h2.47V25h5.2V12.51h3.507l.454-4.415"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A//gdprchecklist.io&amp;title=The%20GDPR%20Checklist">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
              <path fillRule="evenodd" d="M21.128 20.927h-3.764v-6.04c0-1.516-.544-2.552-1.907-2.552-1.04 0-1.66.698-1.932 1.373-.1.24-.123.578-.123.915v6.304H9.637s.05-10.23 0-11.288h3.765v1.596c.5-.77 1.395-1.864 3.393-1.864 2.476 0 4.333 1.614 4.333 5.082v6.472zM5.672 8.097h-.025c-1.263 0-2.08-.867-2.08-1.95 0-1.107.843-1.95 2.13-1.95 1.288 0 2.08.843 2.106 1.95 0 1.083-.818 1.95-2.13 1.95zM3.79 20.927h3.764V9.64H3.79v11.287zM23.08 0H1.84C.825 0 0 .802 0 1.79v21.42C0 24.196.824 25 1.84 25h21.24c1.018 0 1.843-.803 1.843-1.79V1.79c0-.988-.825-1.79-1.842-1.79z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div className='newsletter-sidebar'>
      <a href="http://eepurl.com/duyFHH" className="submit-button" style={{ marginTop: '10px' }}>Newsletter</a>
    </div>
  </div>
)

export default Sidebar