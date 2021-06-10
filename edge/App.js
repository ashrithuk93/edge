import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import UserScreen from './src/screens/UserScreen';
import TrackScreen from './src/screens/TrackScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';

const bottomTabNavigator = createBottomTabNavigator({
  User: UserScreen,
  Track: TrackScreen
});

const App = createAppContainer(bottomTabNavigator);

export default () => {
  return (
    <LocationProvider>
      <App />
    </LocationProvider>
  );
};