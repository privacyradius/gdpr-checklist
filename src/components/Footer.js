import React from 'react'

import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled, { css } from 'react-emotion'
import Img from 'gatsby-image'

import willem from '../images/makers/willem.jpg'

const Makers = Styled('div')`
  display: flex;
  justify-content: space-around
  @media (max-width: 768px) {
    flex-direction: column
  }
`

const Container = Styled('div')`
  max-width: 1200px;
  margin: 0 auto;
`

const Maker = ({name, img, bio, twitter, linkedin, producthunt}) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ color: 'white', textTransform: 'none', textAlign: 'center' }}>{name}</h2>
    { img !== undefined ? <Img resolutions={img.resolutions} style={{ maxWidth: '100px', borderRadius: '50px', margin: '0 auto' }} /> : '' }
    <p style={{ color: 'white', marginTop: '10px',  marginBottom: '10px', textAlign: 'center', lineHeight: '1.5em' }}>{bio}</p>
    <div className='socials' style={{ display: 'flex' }}>
      {twitter !== undefined ? <a href={twitter} target='_blank'>
        <TwitterIcon id='ph' color='#FFF' size={20} />
      </a>: ''}
      <a href={linkedin} target='_blank'>
        <LinkedinIcon id='ph' color='#FFF' size={20} />
      </a>
      <a href={producthunt} target='_blank'>
        <ProductHuntIcon id='ph' color='#FFF' size={20} />
      </a>
    </div>
  </div>
)


const Footer = props => (
  <footer id='footer'>
    <p className='description' style={{ fontSize: '1em' }}>
      <a href='https://www.iubenda.com/privacy-policy/52432713'>Privacy Policy</a> | <a href="https://gdpr-checklist.gdprform.io">Exercise your rights</a>
    </p>

    <span>Makers:</span>
    <div className="gradient">
      <h5>About GDPR Checklist</h5>
      <div className="subtitle">GDPR Checklist is made by a small team from Belgium 🇧🇪 to help businesses navigate the GDPR landscape.
      The project is inspired by <a href="https://cto-security-checklist.sqreen.io/">The SaaS CTO Security Checklist</a> created by <a href="https://www.sqreen.io">Sqreen.io</a></div>

      <Makers>
        <Maker
            key='gertjan'
            name='Gertjan De Wilde'
            img={props.gertjan}
            bio={[
              "Co-founder ",
              <a key="apideck" href='https://www.apideck.com' target='_blank'>Apideck</a>,
              ', ', <a key="beatswitch" href='https://www.beatswitch.com' target='_blank'>Beatswitch</a>,
              ' & ', <a key="pr" href='https://www.privacyradius.com' target='_blank'>Privacy Radius</a>,
              ]}
            linkedin='https://www.linkedin.com/in/gertjandewilde/'
            twitter='https://twitter.com/gertjanwilde'
            producthunt='https://www.producthunt.com/@gertjanwilde'
            />
          <Maker
            key='willem'
            name='Willem Delbare'
            img={props.willem}
            bio={[
              "Co-founder ",
              <a key="knowles" href='https://www.knowlex.be' target='_blank'>Knowlex</a>,
              ', ', <a key="officient" href='https://www.officient.io' target='_blank'>Officient</a>,
              ', ', <a key="futureproofed" href='http://www.futureproofed.com/' target='_blank'>Futureproofed</a>,
              ', ', <a key="pr" href='https://www.privacyradius.com' target='_blank'>Privacy Radius</a>,
              ' & ', <a key="teamleader" href='https://www.teamleader.eu' target='_blank'>Teamleader</a>,
              ]}
            linkedin='https://www.linkedin.com/in/willemdelbare/'
            producthunt='https://www.producthunt.com/@WillemDB'
            />
          <Maker
            key='johan'
            name='Johan De Keulenaer'
            img={props.johan}
            bio={[
              "Co-founder ",
              <a key="pr" href='https://www.privacyradius.com' target='_blank'>Privacy Radius</a>,
              ', ', <a key="beatswitch" href='https://www.beatswitch.com' target='_blank'>Beatswitch</a>,
              ' & ', <a key="wunderman" href='https://www.wunderman.com' target='_blank'>CSD Wunderman</a>,
              ]}
            linkedin='https://www.linkedin.com/in/johandekeulenaer'
            twitter='https://twitter.com/ActiveLife '
            producthunt='https://www.producthunt.com/@johandekeulenaer'
            />
        </Makers>
    </div>
  </footer>
)

export default Footer
