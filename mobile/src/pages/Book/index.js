import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import api from '../../services';
import {Container, Input, Label, Text, Button} from './styles';

const index = ({navigation}) => {
  const id = navigation.getParam('id');
  const [date, setDate] = useState('');

  async function handleSybmit() {
    const user_id = await AsyncStorage.getItem('user');
    try {
      await api.post(
        `/spots/${id}/bookings`,
        {
          date,
        },
        {
          headers: {user_id},
        },
      );

      Alert.alert('Solicitação de reserva enviada');

      navigation.navigate('List');
    } catch (error) {}
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <Container>
      <Label>DATA DE INTERESSE *</Label>
      <Input
        placeholder="Qual data você quer reservar"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <Button bgColor={'#f05a5b'} onPress={() => handleSybmit()}>
        <Text>Solicitar reserva</Text>
      </Button>

      <Button bgColor={'#ccc'} top={10} onPress={handleCancel}>
        <Text>Cancelar</Text>
      </Button>
    </Container>
  );
};

export default index;
