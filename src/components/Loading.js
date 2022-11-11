import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'


const Loading = () => {
  return (
    <View style={estilos.loading}>
      <ActivityIndicator size="large" color="5451a6"/>
    </View>
  )
}

export default Loading;

const estilos = StyleSheet.create({
    loading: {
        justifyContent: "center",
        flex: 1,
    }
});


