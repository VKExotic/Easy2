import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Obrazovka nastavení</Text>
      <Button
        title="Zpět na hlavní obrazovku"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SettingsScreen;
