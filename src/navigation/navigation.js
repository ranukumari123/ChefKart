import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SelectDishes from '../screens/SelectDishes';
import IngredientsDetail from '../screens/IngredientsDetail';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen
          name="SelectDishes"
          options={{ headerShown: false }}
          component={SelectDishes}
        />

        <Stack.Screen
          name="IngredientsDetail"
          options={{ headerShown: false }}
          component={IngredientsDetail}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
