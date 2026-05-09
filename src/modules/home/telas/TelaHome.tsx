import { StyleSheet, Text, View } from 'react-native'

export function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jornada</Text>

      <Text style={styles.subtitulo}>
        Plataforma profissional pessoal
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 32,
    fontWeight: '700',
  },

  subtitulo: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.7,
  },
})
