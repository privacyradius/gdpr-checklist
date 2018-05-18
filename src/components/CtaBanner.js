import React from 'react'
import { css } from 'react-emotion'
import { width, largeDown, smallOnly } from '../shared/styles'
import productHuntLogo from '../images/product-hunt-logo.png'

const linkProductHunt = "https://www.producthunt.com/posts/gdpr-form"

const CtaBanner = () => (
    <div>
        <div className={ctaBannerContainer}>
            <div className={ctaBannerContentWrapper}>
                <div className={productHuntLogoContainer}>
                    <a href={linkProductHunt} rel="nofollow" target="_blank">
                        <img src={productHuntLogo} alt="Product Hunt" />
                    </a>
                </div>
                <p>
                    <span>We're live on Product Hunt with GDPR Form</span> An easy way to manage data subject access requests. Let us know your feedback.
                </p>
                <a href={linkProductHunt} rel="nofollow" target="_blank" className="buttonSignUpProductHunt">Visit Product Hunt!</a>
            </div>
        </div>
        <div className={mastHeadPusher} />
    </div>
)
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
            margin-right: 10px;
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
            padding-right: 10px;
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

const mastHeadPusher = css`
    padding-top: 40px;
    
    @media ${largeDown} {
        padding-top: 120px;
    }
    
    @media ${smallOnly} {
        padding-top: 140px;
    }
`
