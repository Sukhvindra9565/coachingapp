import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  const myName = "Sukhvindra"
  goToProfile = ()=>{
    navigation.navigate("Profile",{myName:`${myName}`});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
<Button
  onPress={goToProfile}
  title="Go to profile"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
