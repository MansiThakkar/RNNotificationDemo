
import React, { Component } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import { LocalNotification,ScheduledLocalNotification } from './LocalPushController'
import PushNotification from './PushNotification';


const App = () => {
  const handleButtonPress = () => {
    LocalNotification()
  }
  const handleScheduleNotification = () => {
    ScheduledLocalNotification()
  }

  return (
    <View style={styles.container}>
    <Text>Press a button to trigger the notification</Text>
    <View style={{ marginTop: 20 }}>
      <Button title={'Local Push Notification'} onPress={handleButtonPress} 
      />
    </View>
    <View style={{ marginTop: 20 }}>
      <Button
        title={'Scheduled Local Push Notification'}
        onPress={handleScheduleNotification}
      />
    </View>
    <PushNotification/>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})

export default App
