import React from 'react';
import { View, Text, Button } from 'react-native';

const AddResultsSubmenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Podnabídka Přidat výsledky</Text>
      <Button
        title="Skenovat výsledkové listy"
        onPress={() => navigation.navigate('LiveScan')}
      />
      <Button
        title="Přidat ručně"
        onPress={() => navigation.navigate('WizardFlow')}
      />
    </View>
  );
};

export default AddResultsSubmenu;
