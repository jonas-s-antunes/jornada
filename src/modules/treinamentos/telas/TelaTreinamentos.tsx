import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import {
  useEffect,
} from 'react'

import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import {
  useNavigation,
} from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'

import { CardTreinamento } from '../componentes/CardTreinamento'

import { useTreinamentosStore } from '../estado/treinamentos-store'

export function TelaTreinamentos() {
  const navigation =
    useNavigation<NativeStackNavigationProp<any>>()

  const treinamentos =
    useTreinamentosStore(
      state => state.treinamentos
    )

  const carregarTreinamentos =
    useTreinamentosStore(
      state => state.carregarTreinamentos
    )

  useEffect(() => {
    carregarTreinamentos()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Treinamentos
        </Text>

        <Pressable
          style={styles.botaoAdicionar}
          onPress={() =>
            navigation.navigate(
              'novo-treinamento'
            )
          }
        >
          <Ionicons
            name="add"
            size={22}
            color="#fff"
          />
        </Pressable>
      </View>

      <FlatList
        data={treinamentos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CardTreinamento
            treinamento={item}
          />
        )}
        contentContainerStyle={
          styles.lista
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f5f7fb',
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,

    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
  },

  botaoAdicionar: {
    width: 48,
    height: 48,

    borderRadius: 14,

    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',
  },

  lista: {
    padding: 24,
  },
})
