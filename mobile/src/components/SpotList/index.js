import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import api from '../../services';
import {
  Container,
  Text,
  ListItem,
  Image,
  Button,
  Company,
  Price,
  TextButton,
} from './styles';

function SpotList({tech, navigation}) {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function loadSpots() {
      try {
        const response = await api.get('/spots', {
          params: {tech},
        });
        setSpots(response.data);
      } catch (error) {}
    }
    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate('Book', {id});
  }
  return (
    <Container>
      <Text>
        Empresas que usam <Text bold={'bold'}>{tech}</Text>
      </Text>
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => String(spot._id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ListItem>
            <Image source={{uri: item.thumbnail_url}} />
            <Company size={24} horizontal={0}>
              {item.company}
            </Company>
            <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
            <Button onPress={() => handleNavigate(item._id)}>
              <TextButton>RESERVAR</TextButton>
            </Button>
          </ListItem>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
});

export default withNavigation(SpotList);
