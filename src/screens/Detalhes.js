import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

// Prop de route para acesso aos dados Trafegados entre a navegação entre as telas/rotas
const Detalhes = ( {route} ) => {

    // Extraindo dos parametros da rota os dados do objeto filme
    const { filme } = route.params;

    // Poderiamos realizar o processo usando o hook useRoute. Nesse caso, não seria necessário passar a route como parâmetro da função
    // const route = useRoute();

  return (
    <SafeAreaView>
      <Text>{filme.title}</Text>
    </SafeAreaView>
  )
}

export default Detalhes

const estilos = StyleSheet.create({
     
})