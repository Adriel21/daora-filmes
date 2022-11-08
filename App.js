
import Home from "./src/screens/Home";
import FormBusca from "./src/screens/FormBusca";
// Usar o StatusBar do react-native
import { StatusBar } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import Sobre from "./src/screens/Sobre";
const App = () => {
 

  return (  
    <>
        {/* Opções para o barStyle: dark-content, light-content ou default */}
        <StatusBar barStyle={"light-content"}/>
        <Sobre />
    </>
    
  );
};

export default App;

