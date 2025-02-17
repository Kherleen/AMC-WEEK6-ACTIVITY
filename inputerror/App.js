import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Text } from 'react-native';
import 


const HandleTextInput = () => {
 const [text,setText] = useState('')

 const handleSubmit = () =>{
   Aler.alert ('Submitted Text:', text)
 }




return (
  <View style = {styles.container}> 
    <TextInput 
    style={styles.input}
    placeholder = "Press Enter after typing...."
    onChangeText = {(value) => setText(value)}
    returnKeyType="done"
    onSubmitEditing={handleSubmit}
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
