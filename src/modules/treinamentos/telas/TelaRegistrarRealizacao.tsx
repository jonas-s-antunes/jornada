import {
  useState,
} from 'react'

import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native'

import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import {
  v4 as uuid,
} from 'uuid'

import {
  treinamentoRepositorio,
} from '../repositorios/treinamento-repositorio'

import {
  calcularVencimento,
} from '../servicos/calcular-vencimento'

export function TelaRegistrarRealizacao() {
  const route =
    useRoute<RouteProp<any>>()

  const navigation =
    useNavigation<NativeStackNavigationProp<any>>()

  const treinamentoId =
    route.params?.treinamentoId

  const [
    dataRealizacao,
    setDataRealizacao,
  ] =
    useState(
      new Date()
        .toISOString()
        .split('T')[0]
    )

  async function salvar() {
    const treinamento =
      await treinamentoRepositorio.buscarPorId(
        treinamentoId
      )

    if (!treinamento) {
      return
    }

    const data =
      new Date(dataRealizacao)

    const vencimento =
      calcularVencimento(
        data,
        treinamento.validade_dias
      )

    await treinamentoRepositorio.registrarRealizacao(
      {
        id: uuid(),

        treinamento_id:
          treinamentoId,

        realizado_em:
          data.toISOString(),

        vence_em:
          vencimento.toISOString(),
      }
    )

    Alert.alert(
      'Realização registrada'
    )

    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>
        Data de realização
      </Text>

      <TextInput
        style={styles.input}
        value={dataRealizacao}
        onChangeText={
          setDataRealizacao
        }
        placeholder="2025-05-10"
      />

      <Pressable
        style={styles.botao}
        onPress={salvar}
      >
        <Text
          style={styles.botaoTexto}
        >
          Salvar
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 24,

    backgroundColor: '#f5f7fb',
  },

  label: {
    marginBottom: 8,

    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',

    borderRadius: 14,

    padding: 16,
  },

  botao: {
    height: 54,

    borderRadius: 14,

    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 24,
  },

  botaoTexto: {
    color: '#fff',

    fontWeight: '700',
  },
})
