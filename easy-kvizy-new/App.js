import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import AddResultsSubmenu from './screens/AddResultsSubmenu';
import WizardFlowScreen from './screens/WizardFlowScreen';
import LiveScanScreen from './screens/LiveScanScreen';
import TeamsScreen from './screens/TeamsScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddResultsSubmenu" component={AddResultsSubmenu} />
        <Stack.Screen name="WizardFlow" component={WizardFlowScreen} />
        <Stack.Screen name="LiveScan" component={LiveScanScreen} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
