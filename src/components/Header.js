import React from 'react'
import Link from 'gatsby-link'
import { colors } from '../shared/styles'

const Header = () => (
  <div
    style={{
      background: colors.blue,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.6rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          The GDPR Compliance Checklist
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
