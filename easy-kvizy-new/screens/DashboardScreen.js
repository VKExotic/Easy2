import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hlavní obrazovka</Text>
      <Button
        title="Přidat výsledky"
        onPress={() => navigation.navigate('AddResultsSubmenu')}
      />
      <Button
        title="Spravovat týmy"
        onPress={() => navigation.navigate('Teams')}
      />
      <Button
        title="Zobrazit žebříček"
        onPress={() => navigation.navigate('Leaderboard')}
      />
      <Button
        title="Zobrazit historii"
        onPress={() => navigation.navigate('History')}
      />
      <Button
        title="Nastavení"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default DashboardScreen;
