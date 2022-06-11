import React, { useEffect, useState } from 'react';
import { Button,Text, View , TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style'

import auth from '@react-native-firebase/auth';
// import { firebase } from '@react-native-firebase/firestore';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

 
const Login = ({navigation}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    function login ( email, password){
      try{
          if((this.state.email =="" && this.state.password =="") ||(this.state.email=="") || (this.state.password=="") ){
              alert('Values does not be empty')
          }
          else {
              if(this.state.password.length < 8){
              alert('Enter at least height caracters as password');
              }else{
                  auth().signInWithEmailAndPassword(email,password)
                  alert('signin succeded')
                  this.props.navigation.navigate("navPages")
              }
          }
      }
      catch(error){
        console.log(error)
          alert(error)
      }
  }

    return (
      
      <View style={styles.container}>
        <ScrollView>

        <View >
          <Text style = {styles.Title}>
            welcome to my application
          </Text>
          <Text style = {styles.SubTitle}>
          login to continue
          </Text>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email"
            keyboardType = "email-address"
            numberOfLines={1} 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password"
            numberOfLines={1}
            secureTextEntry = {true}
            placeholderTextColor="#003f5c"
            onChangeText={password => this.setState({password:password})}/>
        </View>

        <TouchableOpacity style={styles.forgot}
          onPress = {() => Actions.resetPass()}
        >
          <Text style={styles.forgotText} >Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress = {() => this.login(this.state.email,this.state.password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      

        <Button
          title = "Back to main"
          onPress = {() => navigation.navigate('navPages')}
        />

        </ScrollView>
      </View>
      
    ); 
}




export default Login;