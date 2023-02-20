import { Button, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import style from '../styles/style';
import radioButton from '../components/radioButton';

const Alcometer = () => {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);
  const [resultColor, setResultColor] = useState("green");

  const gender = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ];

  function calculate() {
    const litres = bottles * 0.33;
    const gram = litres * 8 * 4.5;
    const burning = weight / 10;
    const remaining = gram - (burning * time);
    let content = 0;

    if (sex === 'male') {
      content = remaining / (weight * 0.7);
    } else {
      content = remaining / (weight * 0.6);
    }
    setResult(content);
      
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
          <TextInput
            style={style.textInput}
            keyboardType='number-pad'
            value={weight}
            onChangeText={text => setWeight(text)}
          />
        </View>

        <View>
          <Text style={style.label}>Bottles :</Text>
          <TextInput
            style={style.textInput}
            id='bottles'
            keyboardType='number-pad'
            value={bottles}
            onChangeText={text => setBottles(text)}
          />
        </View>

        <View>
          <Text style={style.label}>Time :</Text>
          <TextInput
            style={style.textInput}
            id='time'
            keyboardType='number-pad'
            value={time}
            onChangeText={text => setTime(text)}
          />
        </View>

        <View style={style.container}>
          <Text style={style.title}>Gender</Text>
          {gender.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                style.radioButton,
                sex === item.value ? style.radioButtonIconChecked : {},
              ]}
              onPress={() => setSex(item.value)}
            >
              <View style={style.radioButtonIcon} />
              <Text style={style.radioButtonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={style.button}>
          <TouchableOpacity onPress={() => calculate()}>
            <Text style={style.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.label}>Result : {result.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

export default Alcometer;