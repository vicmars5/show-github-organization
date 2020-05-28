import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ name, description, avatarUrl, url }) => (
  <header>
    <a href={url}>
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </a>
  </header>
)

Header.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  avatarUrl: PropTypes.string,
  url: PropTypes.string
}

Header.defaultProps = {
  name: '',
  description: '',
  avatarUrl: null,
  url: '#'
}

export default Header
