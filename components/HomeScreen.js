// Import necessary modules from React and React Native libraries
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the HomeScreen component as the default export
export default function HomeScreen({ navigation }) {
  return (
    // Use View as a container for the components
    <View>
      {/* Display the text "Home Screen" */}
      <Text>Home Screen</Text>
      {/* Add a button that navigates to the Settings screen when pressed */}
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

// Define styles for the components (currently empty)
const styles = StyleSheet.create({
  // Add your styles here
});
