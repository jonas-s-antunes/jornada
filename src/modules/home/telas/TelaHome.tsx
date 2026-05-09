import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { CardModulo } from '../componentes/CardModulo'

export function TelaHome() {
  const navigation =
    useNavigation<NativeStackNavigationProp<any>>()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Text style={styles.titulo}>
          Jornada
        </Text>

        <Text style={styles.subtitulo}>
          Seus módulos
        </Text>

        <View style={styles.modulos}>
          <CardModulo
            titulo="Treinamentos"
            descricao="Controle de vencimentos e renovações"
            icone="school-outline"
            onPress={() =>
              navigation.navigate(
                'treinamentos'
              )
            }
          />

          <CardModulo
            titulo="Ponto"
            descricao="Em breve"
            icone="time-outline"
            onPress={() => {}}
          />

          <CardModulo
            titulo="Certificações"
            descricao="Em breve"
            icone="ribbon-outline"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f5f7fb',
  },

  content: {
    padding: 24,
  },

  titulo: {
    fontSize: 34,
    fontWeight: '800',
  },

  subtitulo: {
    marginTop: 8,
    marginBottom: 24,

    fontSize: 16,

    opacity: 0.7,
  },

  modulos: {
    marginTop: 8,
  },
})
