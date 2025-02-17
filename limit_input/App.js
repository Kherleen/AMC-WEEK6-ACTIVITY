import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Text } from 'react-native';

const MaxElngthExample = () => {
 const [username,setUsername] = useState('')


return (
  <View style = {styles.container}> 
    <TextInput 
    style={styles.input}
    placeholder = "Enter Username"
    maxLength = {10}
    onChangeText = {(value) => setUsername(value)}
    />
   <Text style={styles.displaysText}> Remaining: {10 - username.lenght} </Text>
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

displayText:{
  margineTop: 10,
  fontSize: 10,
}
});


export default MaxElngthExample;
