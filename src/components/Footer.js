import React from 'react'

import GithubIcon from 'react-icons/lib/go/mark-github'
import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled, { css } from 'react-emotion'

import willem from '../images/willem.jpg'

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

const Maker = ({name, avatar, bio, twitter, linkedin, producthunt, github}) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ color: 'white', textTransform: 'none', textAlign: 'center' }}>{name}</h2>
    <img src={avatar} style={{ maxWidth: '100px', borderRadius: '50px', margin: '0 auto' }} alt=""/>
    <p style={{ color: 'white', marginTop: '10px',  marginBottom: '10px', textAlign: 'center', lineHeight: '1.5em' }}>{bio}</p>
    <div className='socials' style={{ display: 'flex' }}>
      <a href={twitter}>
        <TwitterIcon id='ph' color='#FFF' size={16} />
      </a>
      <a href={linkedin}>
        <LinkedinIcon id='ph' color='#FFF' size={16} />
      </a>
      <a href={producthunt}>
        <ProductHuntIcon id='ph' color='#FFF' size={16} />
      </a>
    </div>
  </div>
)


const Footer = props => (
  <footer id='footer'>
    <span>Makers:</span>
    <div className="gradient">
      <h5>About GDPR Checklist</h5>
      <div className="subtitle">GDPR Checklist is made by a small team from Belgium 🇧🇪 to help businesses navigate the GDPR landscape. 
      The project is inspired by <a href="https://cto-security-checklist.sqreen.io/">The SaaS CTO Security Checklist</a> created by <a href="https://www.sqreen.io">Sqreen.io</a></div>

      <Makers>
      <Maker  
          name='Gertjan De Wide'
          avatar='https://pbs.twimg.com/profile_images/853360579066691587/FSk-94Bx_400x400.jpg'
          bio='Co-founder Apideck, Beatswitch & Crowdbase'
          linkedin='https://www.linkedin.com/in/gertjandewilde/'
          twitter='https://twitter.com/gertjanwilde'
          producthunt='https://www.producthunt.com/@gertjanwilde'
          />
        <Maker 
          name='Willem Delbare'
          avatar={willem}
          bio='Founder Officient, FutureProofed & Teamleader.'
          linkedin='https://www.linkedin.com/in/'
          twitter='https://twitter.com/'
          producthunt='https://www.producthunt.com/@'
          />
        <Maker 
          name='Johan De Keulenaer'
          avatar='https://pbs.twimg.com/profile_images/766597102491369473/_z7xDcW9_400x400.jpg'
          bio='Co-founder Beatswitch & Next Ventures.'
          linkedin='https://www.linkedin.com/in/johandekeulenaer'
          twitter='https://twitter.com/ActiveLife '
          producthunt='https://www.producthunt.com/@johandekeulenaer'
          />
        </Makers>
    </div>
  </footer>
)

export default Footer