import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

const Button = ({ className, as: Component, navbar, ...rest }) =>
  <Component className={classnames('btn', { 'navbar-btn': navbar }, className)} {...rest}/>

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
  navbar: PropTypes.bool.isRequired,
}

Button.defaultProps = {
  as: 'button',
  navbar: false,
}

export default Button
