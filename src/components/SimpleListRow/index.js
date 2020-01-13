import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  RowImage,
  RowTitleBox,
  RowTitleText,
  RowDescText,
  RowBottomBox,
  RowBottomLeftText,
  RowBottomRightText,
} from './SimpleListRow.style';

const SimpleListRow = ({
  title,
  desc,
  image,
  bottomLeftText,
  bottomRightText,
  titleColor,
  descColor,
  bottomLeftTextColor,
  bottomRightTextColor,
}) => {
  return (
    <Container>
      <RowImage src={image} />
      <RowTitleBox>
        <View>
          <RowTitleText color={titleColor}>{title}</RowTitleText>
          <RowDescText color={descColor}>{desc}</RowDescText>
        </View>
        <RowBottomBox>
          <RowBottomLeftText color={bottomLeftTextColor}>
            {bottomLeftText}
          </RowBottomLeftText>
          <RowBottomRightText color={bottomRightTextColor}>
            {bottomRightText}
          </RowBottomRightText>
        </RowBottomBox>
      </RowTitleBox>
    </Container>
  );
};

SimpleListRow.defaultProps = {
  image: undefined,
  bottomLeftText: undefined,
  bottomRightText: undefined,
  titleColor: undefined,
  descColor: undefined,
  bottomLeftTextColor: undefined,
  bottomRightTextColor: undefined,
};

SimpleListRow.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string,
  bottomLeftText: PropTypes.string,
  bottomRightText: PropTypes.string,
  titleColor: PropTypes.string,
  descColor: PropTypes.string,
  bottomLeftTextColor: PropTypes.string,
  bottomRightTextColor: PropTypes.string,
};

export default SimpleListRow;
