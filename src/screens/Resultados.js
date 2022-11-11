import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import apiKey from '../../apiKey';
import Loading from '../components/Loading';
import api from '../services/api';


const Resultados = ( {route} ) => {
    
    const { filme } = route.params;
    
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {  
        
        async function buscarFilmes(){
            try {
          
                const resposta = await api.get("/search/movie", {
                    params: {
                        api_key: apiKey,
                        language: "pt-BR",
                        query: filme,
                        include_adult: false,
                    },
                });

                setResultados(resposta.data.results);

                // Permite que criemos um delay na execução do código - simulando um tempo de carregamento lento usando temporizador
                setInterval(() => {
                    setLoading(false);
                }, 3000);


            } catch (error) {
                console.log("Deu ruim na busca da API:  " + error.message);
            }

            
        }
        buscarFilmes();
    }, [])


    if(loading) return <Loading />

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
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
    },
   
});