import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

interface Props {
  titulo: string
  descricao: string
  icone: keyof typeof Ionicons.glyphMap

  onPress: () => void
}

export function CardModulo({
  titulo,
  descricao,
  icone,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.iconeContainer}>
        <Ionicons
          name={icone}
          size={28}
        />
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>
          {titulo}
        </Text>

        <Text style={styles.descricao}>
          {descricao}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    borderRadius: 18,

    padding: 18,

    marginBottom: 16,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  iconeContainer: {
    width: 54,
    height: 54,

    borderRadius: 14,

    backgroundColor: '#f3f4f6',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 16,
  },

  conteudo: {
    flex: 1,
  },

  titulo: {
    fontSize: 18,
    fontWeight: '700',
  },

  descricao: {
    marginTop: 4,

    fontSize: 14,

    opacity: 0.7,
  },
})
