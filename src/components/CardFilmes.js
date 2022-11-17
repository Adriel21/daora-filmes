// Importe o AsyncStorage do expo. Não use o do ReactNative padrão
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CardFilmes = ({filme}) => {
    const {title, poster_path} = filme;


// hook do navigation para permitir navegação  acessando recursos do React Navigation (Sem Props)
  const navigation = useNavigation()
  const leiaMais = () => {

    navigation.navigate('Detalhes', {filme});
  }

  const salvar = async () => {
    // return Alert.alert("Favoritos", "Salvando...")

    // Etapas para o uso do AsyncStorage

    // 1) Carregamento do Storage do aparele do aparelho (se houver, caso contrário retorna null)
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos")
    // 2) Havendo storage prévio, transformamos os dados de filme em objeto e os guardamos numa lista (array)
    let listaDeFilmes = JSON.parse(filmesFavoritos)
    // console.log(listaDeFilmes)

    // 3) Se a lista não for indefinada, vamos iniciá-la com um array vazio
    if(!listaDeFilmes){
      listaDeFilmes = [];
    }

    // 4) Adicionamos os dados do filme na lista (array)
    listaDeFilmes.push(filme)
    // 5) Finalmente, salvamos no storage dos dispositivos
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));

    Alert.alert("Favoritos", "Filme salvo com sucesso!")
    // console.log(listaDeFilmes)
  }

  return (
    
      <View style={estilos.card}>
          <Image style={estilos.image}  resizeMode="cover" source={{uri: `https://image.tmdb.org/t/p/original/${poster_path}`}}/>
        <View style={estilos.corpo}>
          <Text style={estilos.titulo}> {title} </Text>
          <View style={estilos.botoes}>
            <Pressable style={estilos.botao} onPress={(leiaMais)}>
              <Text style={estilos.textoBotao}> <Ionicons name="book" size={12} color="#5451a6" /> Leia mais</Text>
            </Pressable>
            <Pressable style={estilos.botao} onPress={salvar}>
              <Text style={estilos.textoBotao}><Ionicons name="add-circle" size={12} color="#5451a6" /> Salvar</Text>
            </Pressable>
        </View>
          <View></View>
        </View>
    </View>
  )
}

export default CardFilmes

const estilos = StyleSheet.create({
    card: {
      marginVertical: 4,
      flexDirection: "row",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      justifyContent: "center",
      // alignItems: "center"
    },
    image: {
        height: 150,
        width: 100,
       

    },
    corpo: {
      flex: 2,
    },
    titulo:{
      backgroundColor: "#5451a6",
      color: "white",
      fontSize: 16,
      paddingVertical: 8,
      textAlign: "center"
    },
    botoes: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 8,
    },
    botao: {
      padding: 12,
      borderWidth: 1,
      borderColor: "#5451a6"
    },
    textoBotao: {
      color: "#5451a6",
      fontSize: 12,
      textTransform: "uppercase",
      textAlign: "center",
      fontWeight: "semibold",
      justifyContent: "center"
    }
   
   
})