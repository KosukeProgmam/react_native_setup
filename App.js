// Import the necessary libraries and components
import React from 'react';
import AppNavigator from './navigation/AppNavigator'; // Import the HomeScreen component from the screens folder
import { SettingsProvider } from './contexts/SettingsData'; // Import SettingsProvider

// Define the main App component
// This is a functional component that renders the HomeScreen component
export default function App() {
    return (
      // Wrap the navigator inside NavigationContainer to manage the navigation tree
      <SettingsProvider>
        <AppNavigator />
      </SettingsProvider>
      
    );
};
  