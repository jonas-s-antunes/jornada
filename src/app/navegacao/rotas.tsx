import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TelaHome } from '@modules/home/telas/TelaHome'

const Stack = createNativeStackNavigator()

export function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={TelaHome}
          options={{
            title: 'Jornada',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
