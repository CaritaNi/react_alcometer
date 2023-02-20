import { Button, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import style from '../styles/style';



const Alcometer = () => {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);

  const [resultColor, setResultColor] = useState("green");

    function calculate() {
  
      const litres = bottles * 0.33;
      const initialGrams = litres * 8 * 4.5;
      const burnedGrams = weight / 10 * time;
      const remainingGrams = initialGrams - burnedGrams;
      setResult(remainingGrams.toFixed(2))
    
      let content = 0;
      if (sex === 'male') {
        content = remainingGrams / (weight * 0.7);
      } else {
        content = remainingGrams / (weight * 0.6);
      }
    
      if (content > 0) {
        setResult(content);
      } else {
        setResult(0);
      }
    }

    
    
    return (
    <ScrollView>
    <View style={style.container}>
        <Text style={style.title}>Alcometer</Text>
      <View>
        <Text style={style.label}>Weight : </Text>
          <TextInput style={style.textInput}
          keyboardType='number-pad'
          value ={weight}
          onChangeText= {(text) => setWeight(text)} />
      </View>
      <View>
        <Text style={style.label}>Bottles :</Text>
          <TextInput style={style.textInput}
          id='bottles'
          keyboardType='number-pad'
          value={bottles}
          onChangeText={(text) =>setBottles(text)}/>
      </View>
      <View>
        <Text style={style.label}>Time :</Text>
          <TextInput style={style.textInput}
          id='time'
          keyboardType='number-pad'
          value={time}
          onChangeText={(text) =>setTime(text)}/>
      </View>

      <View style={style.container}>
       <Text style={style.title}>Gender: </Text>
        <TouchableOpacity
          onPress={() => setSex('male')} 
          style={style.genderButton}
          >
          <Text style={style.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSex('female')} 
        style={style.genderButton}
        >
          <Text style={style.genderButtonText}>Female</Text>
        </TouchableOpacity>
      </View>
        
      
        <View style={style.button}>
        <TouchableOpacity onPress = {() => calculate()} style={style.button}>
          <Text style={style.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.label}>Result : {result.toFixed(2)}</Text> 
    </View>
    </ScrollView>
    );
  }

  export default Alcometer;
