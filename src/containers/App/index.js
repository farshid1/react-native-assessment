import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from 'containers/SignIn';
import {PALETTE, STATUS_BAR_TYPE} from 'utils/constants';

const Stack = createStackNavigator();

export default function App() {
  // Disable Yellow and Red box
  console.disableYellowBox = true;
  console.disableRedBox = true;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: PALETTE.GREY_BACKGROUND,
      }}>
      <StatusBar
        backgroundColor={PALETTE.GREY_BACKGROUND}
        barStyle={STATUS_BAR_TYPE.DARK_CONTENT}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
