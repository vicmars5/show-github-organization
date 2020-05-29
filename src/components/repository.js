import React from 'react'
import PropTypes from 'prop-types'

import IconStar from '../molecules/icon-star';
import IconGroup from '../molecules/icon-group';
import '../css/index.css'

const Repository = ({ name, description, contributorsCount, starsCount, url }) => (
  <article className="bg-white my-4 rounded p-3 border border-gray-400">
    <a href={url} className="text-color-link">
      <h2 className="text-lg font-bold">{name}</h2>
    </a>
    <p className="">{description}</p>
    <p className="text-base pt-3">
      <span className="pr-2">
        <IconStar className="h-4 inline-block pb-1" /> {starsCount}
      </span>
      <span className="pr-2">
        <IconGroup className="h-4 inline-block pb-1" /> {contributorsCount}
      </span>
    </p>
  </article>
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
