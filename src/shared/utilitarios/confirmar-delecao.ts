import { Alert, Platform } from 'react-native'

export function confirmarDelecao(
  titulo: string,
  onConfirmar: () => void
) {
  if (Platform.OS === 'ios') {
    Alert.prompt(
      'Confirmar exclusão',
      `Digite o nome "${titulo}" para confirmar`,
      (texto) => {
        if (texto === titulo) {
          onConfirmar()
        } else {
          Alert.alert('Título incorreto')
        }
      }
    )

    return
  }

  // Android fallback
  Alert.alert(
    'Confirmar exclusão',
    `Deseja deletar "${titulo}"?`,
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Deletar',
        style: 'destructive',
        onPress: onConfirmar,
      },
    ]
  )
}
