import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const Router=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Products"component={Products} options={{
        title:'Dükkan',
        headerStyle:{backgroundColor: '#1CD6CE'},
        headerTitleStyle:{color: 'white'},
        headerTintColor:'white',
      }}/>
      <Stack.Screen name="Detail" component={Detail} options={{
        title:'Detay',
        headerStyle:{backgroundColor: '#1CD6CE'},
        headerTitleStyle:{color: 'white'},
        headerTintColor:'white',
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default Router;
