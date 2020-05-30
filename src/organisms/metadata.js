import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Metadata = ({ name, description }) => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>{name}</title>
    <meta name='description' content={description} />   
    <meta name='viewport" content="width=device-width, initial-scale=1.0' />
  </Helmet>
)

Metadata.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

Metadata.defaultProps = {
  name: '',
  description: '',
}


export default Metadata
