import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonView, ButtonTitle } from './Button.style';

const Button = ({ children, onClick, width, color }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <ButtonView width={width} color={color}>
        <ButtonTitle>{children}</ButtonTitle>
      </ButtonView>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  width: undefined,
  color: undefined,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
