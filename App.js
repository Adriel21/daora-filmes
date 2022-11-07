import { useFonts } from "expo-font";
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from "react-native";
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
          {/* <Button title="Buscar Filmes" /> */}
          <Pressable style={estilos.botaoInicial}>
            <Text style={estilos.textoBotao}>Buscar Filmes</Text>
          </Pressable>
          {/* <Button title="Favoritos" /> */}
          <Pressable style={estilos.botaoInicial}>
            <Text style={estilos.textoBotao}>Favoritos</Text>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          {/* <Button title="Privacidade" />
          <Button title="Sobre" /> */}
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textRodape}>Privacidade</Text>
          </Pressable >
            
          <Pressable>
            <Text style={estilos.textRodape}>Sobre</Text>
          </Pressable>
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
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#5451a6",
    paddingHorizontal: 20,
  },
  textRodape: {
    color: "white",
  },
});