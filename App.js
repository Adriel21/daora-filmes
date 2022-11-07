import { useFonts } from "expo-font";
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import logo from './assets/images/logo.png';

const App = () => {
  // Para importar novas fontes, é necessário utilizar a biblioteca expo-font e o hook useFonts da biblioteca
  const [fonteCarregada] = useFonts({
    "monoton-regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // Danto tempo para o arquivo carregar o título do app
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image style={estilos.logo} source={logo}/>
          <Text style={estilos.tituloApp}>MoratoFlix</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    // width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
      width: 128,
      height: 128,
  },
  tituloApp: {
    fontSize: 36,
    fontFamily: "monoton-regular",
    color: "#5451a6",
    // fontWeight: "bold",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});