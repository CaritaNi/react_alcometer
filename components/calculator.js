import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import Styles from '../styles/Styles';
import Radiobutton from '../components/radiobutton';



export default function Alcometer(){
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);

  const [resultColor, setResultColor] = useState("green");

  const gender=[
    {
      label: 'Male',
      value:'male'
    },
    {
      label: 'Female',
      value:'female'
  }]
  
  
    function calculate() {
  
      const content = 0;
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
          <TextInput style={Styles.textInput}
          keyboardType='numeric'
          value ={weight}
          onChange={e=> setWeight(e.target.value)} />

        <TextInput style={Styles.textInput}/>
        <Text style={Styles.label}>Bottles :</Text>
          <TextInput style={Styles.textInput}
          id='bottles'
          keyboardType='numeric'
          value={bottles}
          onChange={e=> setBottles(e.target.value)}/>

        <TextInput style={Styles.textInput}/>
        <Text style={Styles.label}>Time :</Text>
          <TextInput style={Styles.textInput}
          id='time'
          keyboardType='numeric'
          value={time}
          onChange={e=> setTime(e.target.value)}/>

        <TextInput style={Styles.textInput}/>
       <Text style={Styles.title}>Gender</Text>

      <View style={Styles.radioButtonContainer}>
          <TouchableOpacity onPress={() => {}} style={Styles.radioButton}>
          <Text style={Styles.radioButtonText}>Male</Text>
      <View style={Styles.radioButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
          <Text style={Styles.radioButtonText}>Female</Text>
          </TouchableOpacity>
      </View>
        
      
        <View style={Styles.button}>
        <Button onPress = {() => Alcometer()}>
          <Text style={Styles.text}>SUBMIT</Text>
        </Button>
        <Text style={Styles.label}>Result :</Text> 
        <output>{result.toFixed(1)}</output>
      </View>
    </View>
    </View>
    );
  }

