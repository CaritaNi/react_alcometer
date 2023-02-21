import React, { useState } from 'react';
import { Button, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style from '../styles/style';

const Alcometer = () => {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [sex, setSex] = useState('male');
  const [result, setResult] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [resultColor, setResultColor] = useState('green');

  const gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  function calculate() {
    const litres = bottles * 0.33;
    const gram = litres * 8 * 4.5;
    const burning = weight / 10;
    const remaining = gram - burning * time;
    let content = null;

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

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ScrollView
    contentContainerStyle={[
      style.container,
      isDarkMode ? style.darkContainer : style.lightContainer,
    ]}
    >
      <View style={style.header}>
        <Text style={[style.title, isDarkMode ? style.darkText : style.lightText]}>Alcometer</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={style.switch}
        />
      </View>
      <View>
        <Text style={[style.label, isDarkMode ? style.darkText : style.lightText]}>Weight :</Text>
        <TextInput
          style={style.textInput}
          keyboardType="number-pad"
          value={weight.toString()}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View>
        <Text style={[style.label, isDarkMode ? style.darkText : style.lightText]}>Bottles :</Text>
        <TextInput
          style={style.textInput}
          keyboardType="number-pad"
          value={bottles.toString()}
          onChangeText={(text) => setBottles(text)}
        />
      </View>
      <View>
        <TextInput style={style.textInput} />
        <Text style={[style.label, isDarkMode ? style.darkText : style.lightText]}>Time :</Text>
        <TextInput
          style={style.textInput}
          keyboardType="number-pad"
          value={time.toString()}
          onChangeText={(text) => setTime(text)}
        />
      </View>

      <View style={style.genderContainer}>
        <Text style={[style.label, isDarkMode ? style.darkText : style.lightText]}>Gender</Text>
          {gender.map((option) => (
        <TouchableOpacity 
           key={option.value}
          onPress={() => setSex(option.value)}
        >
        <View style={[style.radioButtonIcon, isDarkMode ? style.radioButtonIconDark : style.radioButtonIcon]} />
          <Text style={[style.radioButtonText, style.radioButtonIconChecked , isDarkMode ? style.darkText : style.lightText]}>{option.label}</Text>
        </TouchableOpacity>
        ))}
      </View>

        <View style={style.button}>
          <TouchableOpacity onPress={() => calculate()}>
            <Text style={style.buttonText}>SUBMIT ♥</Text>
          </TouchableOpacity>
        </View>
        <Text style={[style.label, isDarkMode ? style.darkText : style.lightText]}>Result : {result.toFixed(2)}</Text>
    </ScrollView>
  );
};

export default Alcometer;