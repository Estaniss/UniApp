import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PublicStack, PrivateStack } from './stacks';
import { Routes, Stacks } from './routes';
import * as NavigationActions from './actions';
import Storage from 'scr/services/storage';

const MainStack = createStackNavigator();

export const Navigation: FC = () => {
  const token = Storage.getToken();
  return (
    <NavigationContainer ref={NavigationActions.navigationRef}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isEmpty(token) ? Stacks.PRIVATE : Stacks.PUBLIC}
      >
        <MainStack.Screen name={Stacks.PRIVATE} component={PrivateStack} />
        <MainStack.Screen name={Stacks.PUBLIC} component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export { Routes, Stacks, NavigationActions };
