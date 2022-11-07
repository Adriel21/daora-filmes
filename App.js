import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'

const App = () => {
  return (
  
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>App</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title='Buscar Filmes'/>
        <Button title='Favoritos'/>
      </View>

      <View style={estilos.viewRodape}>
        <Button title='Privacidade'/>
        <Button title='Sobre'/>
      </View>

    </SafeAreaView>
  )
}

export default App

const estilos = StyleSheet.create({
  container: {
    // o flex trabalha por intermédio de frações, ex: flex: 1 vale 1/6 da tela
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "stretch",
    backgroundColor: 'orange',
    width: '80%',
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: 'red',
    width: '80%',
  },
  
});
