import React from 'react';
import PropTypes from 'prop-types';
import { ButtonView, ButtonTitle } from './Button.style';

const Button = ({ children, width, color }) => {
  return (
    <ButtonView width={width} color={color}>
      <ButtonTitle>{children}</ButtonTitle>
    </ButtonView>
  );
};

Button.defaultProps = {
  width: undefined,
  color: undefined,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
