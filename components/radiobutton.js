import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ value, selected, onPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
      <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 2, borderColor: selected ? '#2f98ba' : '#bbb', alignItems: 'center', justifyContent: 'center' }}>
        {selected && <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#2f98ba' }} />}
      </View>
      <Text style={{ marginLeft: 8, color: '#333', fontSize: 16 }}>{value}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton