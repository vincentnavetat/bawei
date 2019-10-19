import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: "1rem",
    }}
  >
    <h1 style={{
      margin: 0
    }}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul style={{
        display: "flex",
        flex: 1,
        marginLeft: 0,
      }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
          >
            <Link to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
