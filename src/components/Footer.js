import React from 'react'

const Footer = props => (
  <footer>
    <span>A project by:</span>
    <div className="gradient">
      <a href="https://www.sqreen.io/?utm_medium=social-owned&amp;utm_source=securitychecklist&amp;utm_campaign=The%20SaaS%20CTO%20Security%20Checklist" target="_blank" rel="noreferrer noopener" className="logo-ctn">
        <img src="/images/sqreen-logo.svg" alt="Visit Sqreen.io" />
      </a>
      <h5>The easiest way to protect your app and users</h5>
      <div className="subtitle">Start your 14-day free trial and get protected in less than a minute!</div>
      <a href="https://www.sqreen.io/?utm_medium=social-owned&amp;utm_source=securitychecklist&amp;utm_campaign=The%20SaaS%20CTO%20Security%20Checklist" target="_blank" rel="noreferrer noopener">
        <span>www.sqreen.io</span>
      </a>
      <a href="https://twitter.com/SqreenIO" target="_blank" rel="noreferrer noopener">
        <img src="/images/icon-twitter-white.svg" alt="Visit our Twitter" />
        <span>@sqreenIO</span>
      </a>
    </div>
  </footer>
)

export default Footer