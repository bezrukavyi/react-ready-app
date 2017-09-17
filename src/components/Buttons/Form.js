import React from 'react';
import PropTypes from 'prop-types'
import LaddaButton, { SLIDE_LEFT } from 'react-ladda';
import classnames from 'classnames';

const FormButton = ({ className, loading, text, ...rest }) =>
  <LaddaButton
    className={classnames('ladda-button', className)}
    loading={loading}
    data-style={SLIDE_LEFT}
    data-spinner-size={30}
    data-spinner-color="#ddd"
    data-spinner-lines={12}
    {...rest}
  >
    { text }
  </LaddaButton>

FormButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

FormButton.defaultProps = {
  loading: false,
}

export default FormButton
