import React, {useState, useEffect} from 'react';
import {ScrollView, Alert} from 'react-native';
import socketio from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../../assets/logo.png';
import SpotList from '../../components/SpotList';

import {Container, Image} from './styles';

const index = () => {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://localhost:3500', {
        query: {user_id},
      });

      socket.on('booking_response', booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`,
        );
      });
    });
  }, []);
  useEffect(() => {
    AsyncStorage.getItem('techs').then(techs => {
      const techsArray = techs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);
  return (
    <Container>
      <Image source={logo} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default index;
