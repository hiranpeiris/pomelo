import styled from 'styled-components/native';

export const GrayText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 10};
  font-weight: bold;
  color: gray;
`;

export const BoldText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 10};
  font-weight: bold;
  color: black;
`;

export const ColorText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 10};
  ${({ bold }) => bold && 'font-weight: bold;'};
  color: ${({ color }) => (color && color) || 'black'};
`;

export const VSpacer = styled.View`
  height: ${({ space }) => (space && space) || '5px'};
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
