import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30;
  flex: 1;
  align-self: stretch;
  padding-right: 15;
`;

export const Text = styled.Text`
  font-size: ${props => props.size || 20};
  color: ${props => props.color || '#444'};
  text-align: ${props => props.align || 'left'};
  padding-horizontal: ${props => props.horizontal || 20};
  margin-bottom: 15;
  font-weight: ${props => props.bold || 'normal'};
`;

export const Company = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 15;
  color: #999;
`;

export const ListItem = styled.View`
  padding-right: 15;
`;

export const Image = styled.Image.attrs({
  source: props => props.source,
})`
  width: 200;
  height: 120;
  resize-mode: cover;
  border-radius: 2;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f05a5b;
  height: 32;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
