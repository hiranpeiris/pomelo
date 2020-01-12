import styled from 'styled-components/native';

export const PageView = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => (bgColor && bgColor) || 'white'};
  padding-top: ${({ paddingTop }) => (paddingTop && paddingTop) || '0px'};
  padding-bottom: ${({ paddingBottom }) =>
    (paddingBottom && paddingBottom) || '0px'};
  padding-left: ${({ paddingLeft }) => (paddingLeft && paddingLeft) || '0px'};
  padding-right: ${({ paddingRight }) =>
    (paddingRight && paddingRight) || '0px'};
`;
