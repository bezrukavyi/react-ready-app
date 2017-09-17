import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Alert = ({ type, className, children, ...rest }) =>
  <div className={classnames(`alert alert-${type}`, className)} role='alert'>
    {Children.map(children, (child) =>
      <div>{child}</div>
    )}
  </div>

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
}

export default Alert;
