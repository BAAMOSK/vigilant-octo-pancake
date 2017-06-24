import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './bananas';
import Greeting from './Greeting';
export default class App extends React.Component {
  render() {
    return (
	    <View>
        <Text>Hello World!</Text>
<Greeting></Greeting>	    
	    <Text>My Name is Tee!</Text>
	    <Bananas />
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
