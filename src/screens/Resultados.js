import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

// Route é uma prop particular do navigation
const Resultados = ( {route} ) => {
    // Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filmes) enviados para esta tela Resultados
    const { filme } = route.params;
    console.log(filme);
    
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
    </SafeAreaView>
  )
}

export default Resultados

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});