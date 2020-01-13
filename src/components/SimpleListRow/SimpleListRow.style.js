import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  border-bottom-color: #ededed;
  border-bottom-width: 1px;
`;

export const RowImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  background-color: #5fc98e;
  ${({ src }) => src && `src: ${src};`};
`;

export const RowTitleText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${({ color }) => (color && color) || 'black'};
`;

export const RowDescText = styled.Text`
  margin-top: 4px;
  font-size: 14;
  color: ${({ color }) => (color && color) || 'black'};
`;

export const RowTitleBox = styled.View`
  padding-left: 10px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const RowBottomBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RowBottomLeftText = styled.Text`
  font-size: 12;
  font-weight: bold;
  color: ${({ color }) => (color && color) || 'gray'};
`;

export const RowBottomRightText = styled.Text`
  font-size: 10;
  color: ${({ color }) => (color && color) || 'gray'};
`;
