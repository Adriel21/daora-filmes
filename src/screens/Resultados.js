import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import apiKey from '../../apiKey';
import api from '../services/api';

// Route é uma prop particular do navigation
const Resultados = ( {route} ) => {
    // Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filmes) enviados para esta tela Resultados
    const { filme } = route.params;
    // console.log(filme);
    
    const [resultados, setResultados] = useState([]);

    // useEffect: hook do React que executa operações no momento em que o componente (neste caso, Resultado) é renderizado
    useEffect(() => {  
        // Assim que entramos em Resultado, é executado a função async buscarFilmes que por sua vez através do axios executa a consulta a API baseada no filme que foi digitado
        async function buscarFilmes(){
            try {
                // Trecho passado no api.get é o endpoint de busca

                // Aguardando a resposta da consulta get ao endpoint "search/movie" da api. Observe que este endpoint precisa de parâmetros para a execução correta de consulta. Estes parâmetros DEVEM ter o mesmo nome indicado na documentação do endpoint/url
                const resposta = await api.get("/search/movie", {
                    params: {
                        api_key: apiKey,
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