import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter'
// import Footer from '../components/Footer'
import { steps } from '../data.js'
import meta from '../shared/meta.js'
import Arrow from '../images/arrow-bottom.svg'

class Li extends React.Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isExpended: true
    }
  }

  handleExpend = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpended: !prevState.isExpended
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isChecked: !prevState.isChecked
    }))
  }

  render () {
    return (
      <li className={`seed ${this.state.isExpended ? 'expend' : ''}`} style={{ position: 'absolute', left: 0, top: this.props.top }}>
        <div className="header">
          <div className={`check ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="evenodd" strokeWidth="3" transform="translate(2 2)">
                <path stroke="#9012FE" d="M6 11.402l2.874 2.934L16.06 7"></path>
                <circle cx="11" cy="11" r="11"></circle>
              </g>
            </svg>
          </div>
          <div className={`expend-bar ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleExpend}>
            <p>{this.props.title}</p>
            <span className="category">{this.props.role}</span>
          </div>
          <div className="btn">
            <img src={Arrow} alt="" className="arrow" onClick={this.handleExpend} />
          </div>
        </div>
        <div className="body">
          <p>{this.props.description}<br/><br/>Read more:</p>
          <ul>
            {this.props.links.map(l => <li><a href={l} target="_blank">{l}</a></li>)}
          </ul>
        </div>
      </li>
    )
  }
}

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
