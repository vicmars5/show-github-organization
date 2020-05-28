import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'

const Repository = ({ name, description, contributorsCount, starsCount, url }) => (
  <section className="bg-white my-4 rounded p-3 border border-gray-500">
    <a href={url}>
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <p className="">{description}</p>
      <p className="text-sm pt-3">
        Contributors: {contributorsCount}
				{' '}
        Stars: {starsCount}
      </p>
    </a>
  </section>
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  contributorsCount: PropTypes.number.isRequired,
  starsCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

Repository.defaultProps = {
  name: '',
  description: '',
  contributorsCount: 0,
  starsCount: 0,
  url: '#',
}

export default Repository
