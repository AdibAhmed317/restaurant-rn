import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SearchScreen from './src/screens/SearchScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName='Search' >
          <Stack.Screen
            name='Search'
            component={SearchScreen}
            options={{title: 'Buesiness Search',headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})
