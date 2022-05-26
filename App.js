import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import TodosScreen from './screens/Todos';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabelPosition: 'beside-icon',
              tabBarIcon: (focused, color, size) => {
                return <Text></Text>;
              },
              headerTitleAlign: 'center',
            }}
          />
          <Tabs.Screen
            name="Todos"
            component={TodosScreen}
            options={{
              tabBarLabelPosition: 'beside-icon',
              tabBarIcon: (focused, color, size) => {
                return <Text></Text>;
              },
              headerTitleAlign: 'center',
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
