import React from 'react'

const Newsletter = props => (
  <div className="newsletter">
    <h4>Stay up to date with major changes in the list</h4>
    <div className="subtitle">Get notified about major updates to the list:</div>
    <form className="contact-form" action="https://www.getdrip.com/forms/840769526/submissions" method="post">
      <fieldset>
        <input type="email" name="fields[email]" placeholder="Email address" required="" />
        <input type="text" name="fields[name]" placeholder="Name" required="" />
        <input type="text" name="fields[company]" placeholder="Company" required="" />
      </fieldset>
      <span className="text"></span>
      <button className="submit-button" name="submit" data-drip-attribute="sign-up-button" value="Submit">
        Submit
      </button>
    </form>
  </div>
)

export default Newsletter