import React from 'react';
import PropTypes from 'prop-types'
import * as ReactFeather from 'react-feather'
import classnames from 'classnames';
import { startCase, camelCase } from 'lodash'


const Icon = ({ type, className, children, ...icon }) => {
  const IconType = ReactFeather[type]

  return (
    <span className={classnames('icon', className)}>
      <IconType { ...icon } />
      {children}
    </span>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
