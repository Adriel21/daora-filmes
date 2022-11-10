import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import api from '../services/api';

// Route é uma prop particular do navigation
const Resultados = ( {route} ) => {
    // Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filmes) enviados para esta tela Resultados
    const { filme } = route.params;
    // console.log(filme);
    
    const [resultados, setResultados] = useState([]);

    useEffect(() => {  
        async function buscarFilmes(){
            try {
                // Trecho passado no api.get é o endpoint de busca
                const resposta = await api.get("/search/movie", {
                    params: {
                        api_key: "ddfeddc4bf5c898516057c948fd51b6a",
                        language: "pt-BR",
                        query: filme,
                        include_adult: false,
                    },
                });

                // O data é um parâmetro do próprio data
                setResultados(resposta.data.results);

            } catch (error) {
                console.log("Deu ruim na busca da API:  " + error.message);
            }

            
        }
        buscarFilmes();
    }, [])
    // Segundo parâmetro, array de dependências
    console.log(resultados)

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      {/* <Text>Você buscou por: {resultados.poster_path}</Text> */}
      {resultados.map(({id, poster_path, original_title}) => (
        <View>
            <Text>{original_title}</Text>
            <Image source={poster_path}/>
        </View>
      ))}
      <Image source={resultados.poster_path}/>
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