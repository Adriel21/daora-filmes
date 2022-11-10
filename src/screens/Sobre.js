import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';
import logoAPI from "../../assets/images/logo-tmdb.png";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}> 
      <Text style={estilos.titulo}>Sobre o app <Text style={estilos.nomeApp}>MoratoFlix</Text></Text>
      <Text style={estilos.text}>O NOME DO SEU APP é um aplicativo com a finalidade de permitir a busca por informações sobre filmes existentes na base de dados pública disponibilizada pelo site The Movie Database (TMDb).</Text>
      <View style={estilos.viewTmdb}>
        <Pressable onPress={() => {Linking.openURL('https://www.themoviedb.org/')}}>
          <Image source={logoAPI} />
        </Pressable>
      </View>
      <Text style={estilos.text}>Ao localizar um filme, o usuário pode visualizar informações como título, data de lançamento, nota média de avaliação e uma breve descrição sobre o filme e, caso queira, salvar estas informações em uma lista no próprio aplicativo para visualização posterior</Text>
      <Text style={estilos.text}>O aplicativo poderá receber novos recursos conforme o feedback e demanda dos usuários.</Text>
      <Text style={estilos.text}><Text style={estilos.nomeApp}>MoratoFlix</Text> &copy; 2022</Text>
    </SafeAreaView>
  )
}

export default Sobre

const estilos = StyleSheet.create({
    container: {
        // Garantindo que está ocupando todo o espaço da tela
        flex: 1,
        padding: 8,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 8,
    }, 
    text: {
        marginVertical: 8,
    },
    nomeApp: { color: "#5456a6", fontWeight: "bold"
  },
  viewTmdb: {
    alignItems: "center",
    marginVertical: 8,
  }
});