import React from 'react'
import { css } from 'react-emotion'
import { width, largeDown, smallOnly } from '../shared/styles'
import productHuntLogo from '../images/product-hunt-logo.png'

const linkProductHunt = "https://www.producthunt.com/posts/gdpr-form"

class CtaBanner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            show: false
        })
        localStorage.setItem('hideBanner', true);
    }

    componentDidMount() {
        const hideBanner = localStorage.getItem('hideBanner')
        if (!hideBanner) {
            this.setState({
                show: true
            })
        }
    }

    render() {
        const { show } = this.state;
        if (!show) {
            return false;
        }
        return(
            <div>
                <div className={ctaBannerContainer}>
                    <div className={ctaBannerContentWrapper}>
                        <div className={productHuntLogoContainer}>
                            <a href={linkProductHunt} rel="nofollow" target="_blank">
                                <img src={productHuntLogo} alt="Product Hunt" />
                            </a>
                        </div>
                        <p>
                            <span>We're live on Product Hunt with GDPR Form.</span> An easy way to manage data subject access requests. Let us know your feedback.
                        </p>
                        <a href={linkProductHunt} rel="nofollow" target="_blank" className="buttonSignUpProductHunt">Visit Product Hunt!</a>
                        <div className={buttonCloseContainer} onClick={this.handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                    fill="#fff"
                                />
                            </svg>
                        </div>
                        </div>
                </div>
                <div className={mastHeadPusher} />
            </div>
        )
    }
}

export default CtaBanner;

const ctaBannerContainer = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #0A236E;
    z-index: 25;
`

const ctaBannerContentWrapper = css`
    position: relative;
    width: ${width};
    margin: auto;
    line-height: 1.6;
    
    p {
        display: inline-block;
        padding-left: 100px;
        margin: 16px 0;
        color: #fff;
        font-size: 14px;
        span {
            font-size: 16px;
            font-weight: 700;
            margin-right: 5px;
        }
        
        a {
            color: #fff;
        }
    }
    
    .buttonSignUpProductHunt {
        display: inline-block;
        margin-left: 20px;
        color: #fff;
        text-decoration: none;
        background-color: #d95334;
        padding: 6px 20px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 700;
    }
    
    @media ${largeDown} {    
        text-align: center;
            
        p {
            display: block;
            padding-left: 10px;
            padding-right: 60px;
            text-align: center;
        }
        
        .buttonSignUpProductHunt {
            margin-left: 0;
            margin-bottom: 20px;
        }
    }
`

const productHuntLogoContainer = css`
    position: absolute;
    top: 5px;
    left: 0;
    img {
        width: 78px;
    }
    
    @media ${largeDown} {
        display: none;
    }
`

const buttonCloseContainer = css`
    position: absolute;
    top: 50%;
    right: 0;
    display: inline-block;
    line-height: 1;
    transform: translateY(-50%);
    opacity: .8;
    cursor: pointer;
    
    :hover {
        opacity: 1;
    }
    
    @media ${largeDown} {
        top: 20px;
        right: 20px;
        transform: none;
    }
`

const mastHeadPusher = css`
    padding-top: 40px;
    
    @media ${largeDown} {
        padding-top: 120px;
    }
    
    @media ${smallOnly} {
        padding-top: 140px;
    }
`
