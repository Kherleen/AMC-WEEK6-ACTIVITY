import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Text } from 'react-native';


const Information = () => {
 const [fname,setfname] = useState('')
 const [lname,setLname] = useState('')
 const [age,setAge] = useState('')
 const [emailaddress,setEmail] = useState('')
 const [password,setPassword] = useState('')

const [text,setText] = useState('')
 const handleSubmit = () =>{
   Aler.aler ('Submitted Text:', text)
 }



return (
  <View style = {styles.container}> 

  <TextInput 
    onChangeText = {(value) => setText(value)}
    onSubmitEditing={handleSubmit}
    secureTextEntry ={true}
    />
    <TextInput 
    style={styles.input}
    placeholder = "Enter your first name"
    onChangeText = {(text) => setfname(text)}
    returnKeyType="done"
    />
   <TextInput 
    style={styles.input}
    placeholder = "Enter your last name"
    onChangeText = {(text) => setLname(text)}
    returnKeyType="done"

    />
    <TextInput 
    style={styles.input}
    placeholder = "Enter your Age"
    onChangeText = {(value) => setAge(value)}
    keyboardType="phone-pad"

    />
    <TextInput 
    style={styles.input}
    placeholder = "Enter Email"
    onChangeText = {(text) => setEmail(text)}
    returnKeyType="done"
    />
     <TextInput 
    style={styles.input}
    placeholder = "Enter Password..."
    secureTextEntry={true}
    onChangeText = {(value) => setPassword (value)}
    />
    <Text style = {styles.displayText}> Password Length: {password.length}
    
     </Text>

    <TextInput 
    onChangeText = {(value) => setText(value)}
    secureTextEntry ={true}
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
    width:'200',
    borderColor:'gray',
    paddingColor: 10,
    borderRadius:5,
  },

displayText: {
  margineTop: 20,
  fontSize: 10,
}
});


export default Information;
