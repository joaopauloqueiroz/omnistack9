import React, {useState, useEffect} from 'react';
import logo from '../../assets/logo.png';
import {KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services';

import {Container, Image, Label, Form, Input, Button, Text} from './styles';

const index = ({navigation}) => {
  const [email, setEmal] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List');
      }
    });
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.post('/sessions', {email});
      const {_id} = response.data;
      await AsyncStorage.setItem('user', _id);
      await AsyncStorage.setItem('techs', techs);
      navigation.navigate('List');
    } catch (error) {}
  }

  return (
    <Container>
      {/* <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding"> */}
      <Image source={logo} />
      <Form>
        <Label>SEU E-MAIL *</Label>
        <Input
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType={'email-address'}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmal}
        />

        <Label>TECNOLOGAS *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={handleSubmit}>
          <Text>LOGIN</Text>
        </Button>
      </Form>
      {/* </KeyboardAvoidingView> */}
    </Container>
  );
};

export default index;
