import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
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



  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>

    {/* Expressão if evaluate/renderização condicional que pode ser utilizada dentro do JSX - Apenas */}
    {/* Se loading for  TRUE, renderize  <Loading />*/}
      { loading && <Loading />}

      <ScrollView>
        <View style={estilos.viewFilmes}>
            {/* Se loading for false, renderize o resultado de map */}
        {!loading &&
      resultados.map(({id, poster_path, title}) => (

            <View key={id}>
                <Text> {title} </Text>
                <Image style={estilos.image} source={{uri: `https://image.tmdb.org/t/p/original/${poster_path}`}}/>
            </View>

      ))}
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Resultados

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    viewFilmes: {

    },
    image: {
        height: 100,
        width: 100,
        textAlign: "center",
    },
   
});