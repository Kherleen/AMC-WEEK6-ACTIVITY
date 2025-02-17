import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Text } from 'react-native';

const HandleTextInput = () => {
 const [email,setEmail] = useState('')
 const [phone,setPhone] = useState('')



return (
  <View style = {styles.container}> 
    <TextInput 
    style={styles.input}
    placeholder = "Enter Email...."
    onChangeText = {(text) => setEmail(text)}
    returnKeyType="done"
    />


   <TextInput 
    style={styles.input}
    placeholder = "Enter Phone Number"
    onChangeText = {(text) => setPhone(text)}
    keyboardType="phone-pad"
    />


  </View>
  );
};

const styles = StyleSheet.create({ 
container: {
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  },

  input : {
    height:40,
    borderWidth:1,
    width:'80',
    borderColor:'gray',
    paddingColor: 10,
    borderRadius:5,
  },

displayText: {
  margineTop: 10,
  fontSize: 10,
}
});


export default HandleTextInput;
