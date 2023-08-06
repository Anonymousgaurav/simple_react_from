/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import AppStyles from './styles/AppStyles';



const App = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [display,setDisplay] = useState(false)


  const resetFormData =() =>  {
    setDisplay(false)
    setEmail("")
    setName("")
    setPassword("")
  }

  return (
    <View>
      <Text style={{fontSize : 30,marginBottom : 40}}> Simple Form In React Native</Text>

      <TextInput
      style={AppStyles.externalStyle}
      placeholder=' Enter Username'
      onChangeText={(userName) => setName(userName)}
      value= {name}/>

<TextInput
      style={AppStyles.externalStyle}
      placeholder=' Enter Password'
      onChangeText={(userPassword) => setPassword(userPassword)}
secureTextEntry = {true}
      value= {password}/>

  
<TextInput
      style={AppStyles.externalStyle}
      placeholder=' Enter Email'
      value= {email}
      onChangeText={(userEmail) => setEmail(userEmail)}

      />


<View style={{marginBottom : 10,marginHorizontal : 20,marginTop : 30}}>
  <Button color = {"green"}
  title='Print Data'
onPress={() => setDisplay(true)}
  />
  </View>

  <View style= {{marginBottom : 10,marginHorizontal : 20,marginTop : 20}}>
  <Button color = {"black"}
  title='Reset Data'
onPress={() => resetFormData()}
  />
  </View>



  <View style={{marginBottom : 10}}>
    {
      display ? 
      <View>
        <Text> Username is : {name}</Text>
        <Text> Password is : {password}</Text>
        <Text> Email is : {email}</Text>

        </View> : null
    }
  </View>


    </View>
    );
    

}


export default App;
