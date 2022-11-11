import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardFilmes = ({filme}) => {
    const {title, poster_path} = filme;

  return (
    <View>
        <Text> {title} </Text>
        <Image style={estilos.image} source={{uri: `https://image.tmdb.org/t/p/original/${poster_path}`}}/>
    </View>
  )
}

export default CardFilmes

const estilos = StyleSheet.create({
    image: {
        height: 500,
        width: 300,

    },
   
})