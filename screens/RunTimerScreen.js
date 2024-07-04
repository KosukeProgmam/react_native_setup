import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsContext } from '../contexts/SettingsData'; 

const RunTimerStart = () => {
  const { 
    OnYourMark_interval, 
    GetSet_interval, 
    isVibrationEnabled, 
    isAudioEnabled, 
    isRandomEnabled 
  } = useContext(SettingsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Settings Context:</Text>
      <Text style={styles.content}>
        isVibrationEnabled: {isVibrationEnabled.toString()}
      </Text>
      <Text style={styles.content}>
        isAudioEnabled: {isAudioEnabled.toString()}
      </Text>
      <Text style={styles.content}>
        isRandomEnabled: {isRandomEnabled.toString()}
      </Text>
      <Text style={styles.content}>
        On Your Mark to Get Set Interval: {OnYourMark_interval} sec
      </Text>
      <Text style={styles.content}>
        Get Set to Go Interval: {GetSet_interval} sec
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default RunTimerStart;
