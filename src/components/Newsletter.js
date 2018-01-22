import React from 'react'

const Newsletter = props => (
  <div className="newsletter">
    <h4>Stay up to date with major changes in the list</h4>
    <div className="subtitle">Get notified about major updates to the list:</div>
    <form className="contact-form" action="https://www.getdrip.com/forms/66098348/submissions" method="post">
      <input type="hidden" name="fields[segmentId]" data-fields="segmentId" />
      <input type="hidden" name="fields[sqreenUserId]" data-fields="sqreenUserId" />
      <input type="hidden" name="fields[source]" value="The Saas CTO Security Checklist" />
      <input type="hidden" name="fields[medium]" value="Resources" />
      <input type="hidden" name="fields[resource_link]" value="https://s3-eu-west-1.amazonaws.com/sqreen-assets/whitepapers/SaaS+CTO+Security+Checklist.pdf" />
      <fieldset>
        <input type="email" name="fields[email]" placeholder="Email address" required="" />
        <input type="text" name="fields[name]" placeholder="Name" required="" />
        <input type="text" name="fields[company]" placeholder="Company" required="" />
      </fieldset>
      <span className="text"></span>
      <button className="submit-button" name="submit" data-drip-attribute="sign-up-button" value="Submit">
        Submit
      </button>
      <input type="hidden" name="time_zone" value="Europe/Berlin" />
      <input type="hidden" name="url" value="http://localhost:3000/" />
      <input type="hidden" name="page_title" value="The SaaS CTO Security Checklist" />
    </form>
  </div>
)

export default Newsletter