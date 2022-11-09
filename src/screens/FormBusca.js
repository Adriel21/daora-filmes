import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

const FormBusca = () => {
  // const inputFilme = (event) => setFilme(event.target.value);

  const [filme, setFilme] = useState("");
  const titulo = filme == '' ? 'Ops!' : 'Você procurou por:';
  const resultado = filme == '' ? 'Você deve digitar o nome de um filme' : filme;
  console.log(filme);

  return (
    
      <SafeAreaView style={estilos.container}>
          <Text style={estilos.titulo}>Start Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?</Text>
          <Text style={estilos.subtitulo}>Localize um fime que você viu ou gostaria de ver!</Text>
          <View style={estilos.caixa}>
            <Ionicons name="film" size={46} color="black" style={estilos.icon}/>
            <TextInput style={estilos.input} placeholder="Filme..." onChangeText={setFilme}></TextInput>
          </View>
          <Button title='Procurar' style={estilos.botao} onPress={() => Alert.alert(titulo, resultado)}/>
      </SafeAreaView>
    
  )
}

export default FormBusca

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 16,
    marginTop: 10,
  },
  caixa: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
 
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    // flex: 0.90,
  },
  botao: {
    backgroundColor: "#5456a6",
    height: 25,
  },
})