// Usar o StatusBar do react-native
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import FormBusca from "./src/screens/FormBusca";
import Favoritos from "./src/screens/Favoritos";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";

const App = () => {
  // Oficializando através de uma contante o gerenciador de navegação Stack (pilha de telas)
 const Stack = createNativeStackNavigator();

  return (  
    <>
        {/* Opções para o barStyle: dark-content, light-content ou default */}
        <StatusBar barStyle={"light-content"}/>

        {/* O NavigationContainer deve envolve todas as telas navegáveis do nosso App */}
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerStyle: {
                backgroundColor: "#5451a6",
               },
               headerTintColor: "white",
              }}>
                <Stack.Screen 
                component={Home} 
                name="Home"
                options={{
                  headerShown: false,
                }} 
                />
                <Stack.Screen 
                component={FormBusca} 
                name="FormBusca" 
                options={{
                  title: "Buscar Filmes",
                }}/>
                <Stack.Screen component={Favoritos} name="Favoritos" />
                <Stack.Screen component={Privacidade} name="Privacidade" />
                <Stack.Screen component={Sobre} name="Sobre" />
                <Stack.Screen component={Resultados} name="Resultados" />
                <Stack.Screen component={Detalhes} name="Detalhes" />


            </Stack.Navigator>
        </NavigationContainer>
    </>
    
  );
};

export default App;

