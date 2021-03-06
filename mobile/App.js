/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StatusBar, YellowBox} from 'react-native';
import Routes from './src/routes';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Functions as object',
  'Possible Unhandled',
]);
function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}

export default App;
