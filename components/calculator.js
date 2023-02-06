import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function alcometer({}){
    const img = require('../assets/favicon.png');
    return(
      <View>
        <button onClick={alcometer}>Calculate</button>
      </View>
    );
  }

