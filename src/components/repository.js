import React from 'react'
import PropTypes from 'prop-types'

const Repository = ({ name, description, contributorsCount, starsCount, url }) => (
  <section>
    <a href={url}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Contributors: {contributorsCount}
				{' '}
        Stars: {starsCount}
      </p>
    </a>
  </section>
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
