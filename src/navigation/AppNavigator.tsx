import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screenのコンポーネント
import { index } from '../screens/index';
import { show } from '../screens/show';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={index}
          options={{
            title: 'Index',
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Show"
          component={show}
          options={{
            title: 'Show',
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
