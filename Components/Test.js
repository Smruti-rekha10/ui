import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Test = () => {
  const [name,setName]=useState()
  handleText = text => {
   setName(text)
  };

  return (
    <View>
      <TextInput
        style={{
          height: 50,
          borderColor: 'red',
          borderWidth: 3,
          margin: 10,
          fontSize: 35,
        }}
        onChangeText={text => handleText(text)}
        placeholder="Enter Name"
        value={name}
      />
      <Text style={{fontSize: 32, color: 'green'}}>
        Your name is :{name}
      </Text>
    </View>
  );
};
export default Test;