import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter'
// import Footer from '../components/Footer'
import { steps } from '../data.js'
import meta from '../shared/meta.js'

const Li = props => (
  <li className="seed" style={{ position: 'absolute', left: 0, top: props.top }}>
    <div className="header">
      <div className="check">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <g fill="none" fill-rule="evenodd" stroke-width="3" transform="translate(2 2)">
            <path stroke="#9012FE" d="M6 11.402l2.874 2.934L16.06 7"></path>
            <circle cx="11" cy="11" r="11"></circle>
          </g>
        </svg>
      </div>
      <div className="expend-bar">
        <p>{props.title}</p>
        <span className="category">{props.role}</span>
      </div>
      <div className="btn">
        <img src="/images/arrow-bottom.svg" alt="" className="arrow" />
      </div>
    </div>
    <div className="body">
      <p>{props.description}<br/><br/>Read more:</p>
      <ul>
        {props.links.map(l => <li><a href={l} target="_blank">{l}</a></li>)}
      </ul>
    </div>
  </li>
)

const Section = props => (
  <div className="scrollspy" id={[props.id]}>
    <h2>{props.title}</h2>
    <ul className="checklist" style={{ position: 'relative', height: props.items.length * 70 }}>
      { props.items.map((l, index) => <Li {...l} top={index * 70} />)}
    </ul>
  </div>
)

const IndexPage = () => (
  <div>
    <div className='wrapper'>
      <div className='columns'>
        <Sidebar />
        <div className="col-9">
          <h1>The GDPR Checklist</h1>
          <p className="description">Achieving GDPR Compliance shouldn't feel like a struggle. 
          This is a basic checklist you can use to harden your GDPR compliancy. Select if you are a data processor 
          (explain) or data controllor (explain) and use the checkpoints to improve your compliancy. 
          This list is far from a legal exhaustive document, it merely tries to help you overcome the struggle.
          <br/><br/>Feel free to <a href="https://github.com/GDPRTracker/checklist" target="_blank">contribute directly</a> on GitHub!</p>
          <div className="filter-bar">
            <h3>ROLE</h3>
            <ul className="selected-three">
              <li className="seed">Data Controller</li>
              <li className="seriesa">Data Processor</li>
            </ul>
          </div>
          { steps.map(s => <Section {...s} />)}
          <Newsletter />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
