import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  source: props => props.source,
})`
  height: 32;
  resize-mode: contain;
  margin-top: 10;
`;

export const Form = styled.View`
  align-self: stretch;
  padding-horizontal: 30;
  margin-top: 30;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8;
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
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f05a5b;
  height: 42;
  justify-content: center;
  align-items: center;
`;
