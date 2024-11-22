import React from 'react';
import { View, Text, Button } from 'react-native';

const TeamsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Správa týmů</Text>
      <Button
        title="Přidat tým"
        onPress={() => {
          // Logic for adding a new team can go here
        }}
      />
      <Button
        title="Zpět na hlavní obrazovku"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TeamsScreen;
