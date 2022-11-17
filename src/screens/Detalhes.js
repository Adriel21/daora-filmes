import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import formataData from '../utils/funcoes';

// Prop de route para acesso aos dados Trafegados entre a navegação entre as telas/rotas
const Detalhes = ( {route} ) => {
    
    console.log(route);
    // Extraindo dos parametros da rota os dados do objeto filme
    const { filme } = route.params;
   //  console.log(filme.backdrop_path)
    // Poderiamos realizar o processo usando o hook useRoute. Nesse caso, não seria necessário passar a route como parâmetro da função
    // const route = useRoute();

  return (
    <SafeAreaView style={estilos.Safecontainer}>
        {/* O ios não pega padding quando aplicado no SafeAreaView. Nesse caso, aplicamos dentro de uma View*/}
      <View style={estilos.container}>
            {filme.backdrop_path !== null && 
            <ImageBackground style={estilos.imagem} source={{uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}}>
                <View style={estilos.overlay}>
                    <Text style={estilos.titulo}>{filme.title}</Text>
                </View>
            </ImageBackground> }
            {filme.backdrop_path == null && 
            <ImageBackground style={estilos.imagemVazia} source={{uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}}>
                <View style={estilos.overlay}>
                    <Text style={estilos.titulo}>{filme.title}</Text>
                </View>
            </ImageBackground> }
            


            <View style={estilos.conteudo}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={estilos.detalhes}>Avaliação: {filme.vote_average} | Lançamento: {formataData(filme.release_date)}</Text>
                    <Text style={estilos.descricao}>{filme.overview || "Sem descrição"}</Text>
                </ScrollView>
            </View>
      </View>
       <View style={estilos.overlay}></View>
    </SafeAreaView>
  )
}

export default Detalhes

const estilos = StyleSheet.create({
     Safecontainer: {
        flex: 1,
     },
     container: {
        flex: 1,
        // padding: 8,
        position: "relative",
    
     },
     imagem: {
        flexDirection: "row",
        height: 350,
        width: "100%",
     },
     imagemVazia: {
        backgroundColor: "black",
     },
     conteudo: {
        flex: 1, //Necessário para o scrollview funcionar
        padding: 16,
     },
     descricao: {
        fontSize: 16,
        lineHeight: 23,
        marginVertical: 8,
     },
     detalhes: {
        color: "#5451a6",
     },
     titulo: {
        color: "white",
        textAlign: "center",
        padding: 16,
        fontSize: 20,
        fontWeight: "bold"
        
        
     },
     overlay:{  
        backgroundColor: "rgba(0,0,0, 0.7)",
        color: "white",
        textAlign: "center",
        padding: 16,
        width: "100%",
        justifyContent: "center"
     }

    //  overlay: {
    //     flex: 1,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     opacity: 1,
    //     backgroundColor: 'black',
    //     width: "100%"
    //  }
})