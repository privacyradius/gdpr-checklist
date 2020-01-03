import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta 
            name="google-site-verification" 
            content="rUNq8lzwm3z15gaVNUa43iEQ-gKP0WJhkb_qko81oTc" 
          />

          {/* Schema.org tags */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "GDPR Checklist",
                  "url": "https://www.gdprchecklist.io",
                  "sameAs": [
                      "https://twitter.com/gdpr_checklist"
                  ]
                } 
            `}} />
          {this.props.headComponents}
          {css}
        

        <script src="https://config.metomic.io/config.js?id=prj:988a7db4-229a-479f-878f-653cbe48c5cb" crossorigin charset="utf-8"></script>
        <script src="https://consent-manager.metomic.io/embed.js" crossorigin charset="utf-8"></script>
        
        <script type="text/x-metomic" data-micropolicy="statistics"  async src="https://www.googletagmanager.com/gtag/js?id=UA-113160447-1"></script>
        <script type="text/x-metomic" data-micropolicy="statistics" dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-113160447-1');
            `}} />

        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        
        </body>
      </html>
    )
  }
}
