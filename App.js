import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, radioButton, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Styles } from './styles/Styles';

const App = () => { 

const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [sex, setSukupuoli] = useState('male');
const [result, setResult] = useState(0);


  const alcometer = () => {

    const pitoisuus = 0;
    const litres = bottles * 0.33;
    const gram = litres * 8 * 4.5;
    const burning = weight / 10;
    const remaining = gram - (burning * time);

    if (sex === 'male'){
      content= remaining / (weight * 0.7);
    }
    else {
      content= remaining / (weight * 0.6);
    }
    setResult(content);
    
    if (content > 0){
      setResult(content)
    } else {
      setResult(0)
    }
  }

  

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Alcometer</Text>
      <View>
        <Text style={Styles.label}>Weight : </Text>
          <input id='weight'
          type='number'
          value ={weight}
          onChange={e=> setWeight(e.target.value)}/>

        <TextInput style={Styles.textInput}/>
        <Text style={Styles.label}>Bottles :</Text>
          <input id='bottles'
          type='number'
          value={bottles}
          onChange={e=> setBottles(e.target.value)}/>

        <TextInput style={Styles.textInput}/>
        <Text style={Styles.label}>Time :</Text>
          <input id='time'
          type='number'
          value={time}
          onChange={e=> setTime(e.target.value)}/>

        <TextInput style={Styles.textInput}/>
        <View style={Styles.radioButtonContainer}>
          <TouchableOpacity onPress={() => {}} style={Styles.radioButton}>
         <View style={Styles.radioButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.radioButtonText}>Female</Text>
          </TouchableOpacity>

          
         </View>
        
        <View style={Styles.button}/>
        <TouchableOpacity onPress = {() => alcometer()}>
          <Text style={Styles.button}>SUBMIT</Text>
        </TouchableOpacity>
        <label>Result :</label> <br></br>
        <output>{result.toFixed(1)}</output>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;