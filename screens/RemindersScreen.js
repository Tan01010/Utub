import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RemindersScreen() {
  return (
    <View style={styles.container}>
      <Text>Reminders Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RemindersScreen;
