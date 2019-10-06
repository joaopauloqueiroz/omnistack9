import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8;
  text-align: left !important;
  margin-top: 30;
`;

export const Input = styled.TextInput`
  border-width: 1;
  border-color: #ddd;
  padding-horizontal: 20;
  font-size: 16;
  color: #444;
  height: 44;
  margin-bottom: 20;
  border-radius: 2;
  width: 100%;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.bgColor};
  height: 42;
  justify-content: center;
  align-items: center;
  border-radius: 2;
  margin-top: ${props => props.top || 0};
`;
