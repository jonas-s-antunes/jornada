import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native'

export function TelaTreinamentos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Treinamentos
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,

    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
  },
})
