import { NavigationContainer } from '@react-navigation/native'

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { TelaHome } from '@modules/home/telas/TelaHome'

import { TelaTreinamentos } from '@modules/treinamentos/telas/TelaTreinamentos'

const Stack =
  createNativeStackNavigator()

export function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TelaHome}
          options={{
            title: 'Jornada',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="treinamentos"
          component={TelaTreinamentos}
          options={{
            title: 'Treinamentos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
