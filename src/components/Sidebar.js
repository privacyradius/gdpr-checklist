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
      <h4 style={{ marginTop: '20px' }}>Compliance tools</h4>
      <ul>
        <li><a href='https://www.gdprform.io'>GDPR Form</a></li>
        <li><a href='https://gdprtracker.io/'>GDPR Tracker</a></li>
      </ul>
    </nav>
    <div className='newsletter-sidebar'>
      <a href="http://eepurl.com/duyFHH" className="submit-button" style={{ marginTop: '10px' }}>Newsletter</a>
    </div>
  </div>
)

export default Sidebar