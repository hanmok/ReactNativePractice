import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World22222!</Text>
      <Text style={{margin: 16, borderWidth: 1, borderColor: 'blue', padding: 5}}> Hi!! </Text>
      <Text style={styles.dummyText}>Hello</Text>
      <Button title='Tap me!'/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {margin: 16, 
      padding: 16,
      borderWidth: 2,
      borderColor: 'red'}
});
