import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Button,
  Alert
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello</Text>
      <Button title='Click Me' onPress={() => console.log('Clicked')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
