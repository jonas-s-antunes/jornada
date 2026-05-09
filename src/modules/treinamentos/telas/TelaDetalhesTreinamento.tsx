import {
  useEffect,
  useState,
} from 'react'

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
  treinamentoRepositorio,
} from '../repositorios/treinamento-repositorio'

import {
  RegistroTreinamento,
  Treinamento,
} from '../tipos/treinamento'

import {
  calcularStatusVencimento,
} from '../servicos/calcular-status-vencimento'

export function TelaDetalhesTreinamento() {
  const route =
    useRoute<RouteProp<any>>()

  const navigation =
    useNavigation<NativeStackNavigationProp<any>>()

  const treinamentoId =
    route.params?.treinamentoId

  const [
    treinamento,
    setTreinamento,
  ] =
    useState<Treinamento | null>(
      null
    )

  const [
    ultimaRealizacao,
    setUltimaRealizacao,
  ] =
    useState<RegistroTreinamento | null>(
      null
    )

  async function carregar() {
    const treinamentoBanco =
      await treinamentoRepositorio.buscarPorId(
        treinamentoId
      )

    const ultima =
      await treinamentoRepositorio.buscarUltimaRealizacao(
        treinamentoId
      )

    setTreinamento(
      treinamentoBanco ?? null
    )

    setUltimaRealizacao(
      ultima ?? null
    )
  }

  useEffect(() => {
    carregar()
  }, [])

  const status =
    ultimaRealizacao
      ? calcularStatusVencimento(
          ultimaRealizacao.vence_em
        )
      : null

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={
          styles.content
        }
      >
        <Text style={styles.titulo}>
          {treinamento?.titulo}
        </Text>

        <Text style={styles.validade}>
          Validade:
          {' '}
          {
            treinamento?.validade_dias
          }
          {' '}
          dias
        </Text>

        {ultimaRealizacao ? (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>
              Última realização
            </Text>

            <Text>
              Realizado em:
              {' '}
              {new Date(
                ultimaRealizacao.realizado_em
              ).toLocaleDateString()}
            </Text>

            <Text>
              Vence em:
              {' '}
              {new Date(
                ultimaRealizacao.vence_em
              ).toLocaleDateString()}
            </Text>

            <View
              style={[
                styles.status,
                status?.tipo ===
                  'vencido' &&
                  styles.statusVencido,

                status?.tipo ===
                  'proximo' &&
                  styles.statusProximo,
              ]}
            >
              <Text
                style={
                  styles.statusTexto
                }
              >
                {status?.texto}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.card}>
            <Text>
              Nenhuma realização registrada
            </Text>
          </View>
        )}

        <Pressable
          style={styles.botao}
          onPress={() =>
            navigation.navigate(
              'registrar-realizacao',
              {
                treinamentoId,
              }
            )
          }
        >
          <Text
            style={styles.botaoTexto}
          >
            Registrar realização
          </Text>
        </Pressable>
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
    fontSize: 30,
    fontWeight: '800',
  },

  validade: {
    marginTop: 8,

    fontSize: 16,

    opacity: 0.7,
  },

  card: {
    backgroundColor: '#fff',

    borderRadius: 18,

    padding: 18,

    marginTop: 24,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: '700',

    marginBottom: 16,
  },

  status: {
    marginTop: 18,

    backgroundColor: '#dcfce7',

    paddingVertical: 10,
    paddingHorizontal: 14,

    borderRadius: 12,

    alignSelf: 'flex-start',
  },

  statusProximo: {
    backgroundColor: '#fef3c7',
  },

  statusVencido: {
    backgroundColor: '#fee2e2',
  },

  statusTexto: {
    fontWeight: '700',
  },

  botao: {
    height: 56,

    borderRadius: 16,

    backgroundColor: '#111827',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 24,
  },

  botaoTexto: {
    color: '#fff',

    fontSize: 16,
    fontWeight: '700',
  },
})
