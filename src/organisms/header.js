import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ name, description, avatarUrl, url }) => (
  <header className="border-b border-gray-400 bg-white p-3">
    <div className="container mx-auto py-4 flex">
      <img
        className="w-20 h-20 mr-2"
        src={`${avatarUrl}&s=200`}
        alt={name}
      />
      <div>
        <a href={url} className="text-color-link">
          <h1 className="font-bold text-xl">
            {name}
          </h1>
        </a>
        <p>{description}</p>
      </div>
    </div>
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
