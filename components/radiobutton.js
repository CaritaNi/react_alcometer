import { View, Text, Pressable } from 'react-native';
import React,{useState} from 'react';
import Styles from '../styles/Styles';

export default function Radiobutton({options, onPress, style, borderColor}) {
    const[value, setValue]= useState(null);

    function handlePress(selected){
        setValue(selected);
        onPress(selected);
       
    }
    return (
    <>
      {
        options.map((item, index)=>(
            <View key={index} style={[Styles.radioButtonContainer]}>
                <Text style={Styles.label}>{item.label}</Text>
                <Pressable style={[Styles.circle,borderColor]} onPress={()=> handlePress(item.value)}>
                  {value=== item.value && <View style={[Styles.checkedCircle,style]}></View> }
                </Pressable>
            </View>
            ) 
        )
      }
    </>
  );
}