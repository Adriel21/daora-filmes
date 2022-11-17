import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import apiKey from '../../apiKey';
import CardFilmes from '../components/CardFilmes';
import Loading from '../components/Loading';
import api from '../services/api';
import EmptyListMessage from '../components/EmptyListMessage';
import Separator from '../components/Separator';
// import VideoPlayer from 'react-native-video-player';

const Resultados = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try{
                // const resposta = await fetch("https://appanimeplus.tk/play-api.php?episodios=433311", {
                //     method: "GET",
                //     headers: {
                //         "Content-type": "text/plain"
                //     }
                // }
                // })

                const resposta = await fetch("https://appanimeplus.tk/play-api.php?episodios=433311")

                const dados = await resposta.text();
                // setProducts(dados);
                console.log(dados);
            } catch (error) {
                console.log("Deu ruim! " + error.message);
            }
        }

        getProducts();
    }, [])




  return (
    <SafeAreaView style={estilos.container}>
      {products.map(({ id, title}) => (
        // A função só pode retornar uma coisa
        
                <View key={id}>
                
                    <View><Text>{title}</Text></View>
                    
                </View>
        
    ))}
       
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