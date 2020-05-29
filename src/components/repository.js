import React from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'

const IconStar = ({ className }) => (
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
)

const IconGroup = ({ className }) => (
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
)

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
