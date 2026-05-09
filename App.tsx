import 'react-native-get-random-values'
import 'react-native-gesture-handler'

import { useEffect } from 'react'

import { Rotas } from '@app/navegacao/rotas'
import { inicializarBanco } from '@core/banco/inicializar-banco'

export default function App() {
  useEffect(() => {
    inicializarBanco()
  }, [])

  return <Rotas />
}
