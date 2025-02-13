import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BlogList from '../screens/BlogList';
import BlogDetail from '../screens/BlogDetails';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BlogList"
      component={BlogList}
      options={{title: 'Blogs'}}
    />
    <Stack.Screen
      name="BlogDetail"
      component={BlogDetail}
      options={{title: 'Blog Detail'}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
