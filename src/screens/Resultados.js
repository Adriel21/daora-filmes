import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import apiKey from '../../apiKey';
import CardFilmes from '../components/CardFilmes';
import Loading from '../components/Loading';
import api from '../services/api';
import EmptyListMessage from '../components/EmptyListMessage';
import Separator from '../components/Separator';

const Resultados = ( {route} ) => {
    const { filme } = route.params;
    
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {  
        
        async function buscarFilmes(){
            try {
          
                const resposta = await api.get("/alunos/movie", {
                    params: {
                        id: filme,
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

   
      { loading && <Loading />}

    
        <View style={estilos.viewFilmes}>

        {!loading && <FlatList 
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        data={resultados}
        ListEmptyComponent={EmptyListMessage}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => {
            return (
                <CardFilmes filme={item}/>
            )
        }}
        keyExtractor={item => item.id}
        />
        }
       </View>
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
        marginVertical: 8,
    },
   
});