
import { StyleSheet, Text, View } from 'react-native'

const Separator = () => {
  return (
    <View style={estilos.separator}>
        <View style={estilos.linha}></View>
    </View>
  )
}

export default Separator

const estilos = StyleSheet.create({
    separator: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 16,
    },
    linha: {
        backgroundColor: "#5452a6",
        height: 2,
        width: "80%",
        opacity: 0.5,
    }
})