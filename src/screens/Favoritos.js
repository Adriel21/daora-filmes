import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Image, Pressable } from 'react-native'
import EmptyListMessage from '../components/EmptyListMessage';
import Separator from '../components/Separator';

const Favoritos = () => {

  const navigation = useNavigation()
 
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const leiaMais = () => {
    setFilme
    const [filme, setFilme] = useState([]);

    navigation.navigate('Detalhes', {filme});
  }

  useEffect( () => {
    
    async function carregarFavoritos() {
      try {
       const dados =  await AsyncStorage.getItem("@favoritos")
       const filmes = JSON.parse(dados);
       if(dados != null) {
        setListaFavoritos(filmes)
       }
      //  console.log(dados)
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message)
      }
    }
    
    carregarFavoritos();
  }, [])

  console.log(listaFavoritos)

  const excluirFavoritos = async () =>{
    await AsyncStorage.removeItem("@favoritos");
    navigation.navigate("Favoritos")

    return;
  }
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
      <Text>Quantidade: {listaFavoritos.length}</Text>
      <Button title="Excluir favoritos" onPress={excluirFavoritos}/>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={listaFavoritos}
          // ListEmptyComponent={EmptyListMessage}
          // ItemSeparatorComponent={Separator}
          renderItem={({item}) => {
            return (
                <View style={estilos.card}>
                  <Image style={estilos.image} resizeMode="cover" source={{uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}/>
                  <View style={estilos.corpo}>
                    <Text style={estilos.titulo}>{item.title}</Text>
                    <Pressable style={estilos.botao} onPress={(leiaMais)}>
                      <Text style={estilos.textoBotao}> <Ionicons name="book" size={12} color="#5451a6" /> Leia mais</Text>
                    </Pressable>
                  </View>
                </View>
            )
        }}
        keyExtractor={item => item.id}
        />
       
        
       
      </View>
    </SafeAreaView>
  )
}

export default Favoritos

const estilos = StyleSheet.create({
  safeContainer: {flex: 1 },
  container: {
    padding: 8,
    flex: 1,
  },
  image: {
    height: 150,
    width: 100,
},
titulo:{
  backgroundColor: "#5451a6",
  color: "white",
  fontSize: 16,
  paddingVertical: 8,
  textAlign: "center"
},
card:{
  marginVertical: 4,
  flexDirection: "row",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
  justifyContent: "center",
  // alignItems: "center"
},
corpo: {
  flex: 2,
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