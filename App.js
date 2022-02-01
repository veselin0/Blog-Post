import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet } from 'react-native';
import { BlogProvider} from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Index">
          <Stack.Screen name="Index" component={IndexScreen} options={{title: 'Blogs'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
