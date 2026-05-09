import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { Treinamento } from '../tipos/treinamento'

interface Props {
  treinamento: Treinamento
}

export function CardTreinamento({
  treinamento,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {treinamento.titulo}
      </Text>

      <Text style={styles.validade}>
        Validade:
        {' '}
        {treinamento.validade_dias}
        {' '}
        dias
      </Text>

      {treinamento.descricao ? (
        <Text style={styles.descricao}>
          {treinamento.descricao}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    borderRadius: 18,

    padding: 18,

    marginBottom: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  titulo: {
    fontSize: 18,
    fontWeight: '700',
  },

  validade: {
    marginTop: 8,

    fontSize: 14,

    opacity: 0.7,
  },

  descricao: {
    marginTop: 12,

    fontSize: 14,
  },
})
