import React,{Component}from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Touchable } from "react-native"; 
import {FontAwesome} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default class RegisterScreen extends Component {
  render(){
    const  pressBack=()=>{
      this.props.navigation.navigate('Home');
     }
     const  pressHandlerppScreen=()=>{
      this.props.navigation.navigate('Suggestion');
     }

    return (
   

    <View style={styles.container}>
    <Feather name="arrow-left" size={24} color="#94c529" style={{marginBottom:40,marginRight:320}}  onPress={()=>pressBack()} />

     <Text style={styles.Text1}> Create New Account </Text>
      <Text style={styles.Text2}> Welcome to our application !</Text>

      
       

      <View style={styles.SectionStyle}>
    <FontAwesome5  name ="user-alt" size={25} color={'#696969'}/>
    <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#FFFFFF"
                placeholder="User name" 
                placeholderTextColor="#696969"
              />

      </View>
         <View style={styles.SectionStyle}>
    <MaterialCommunityIcons  name ="email-open" size={29} color={'#696969'}/>
    <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#FFFFFF"
              placeholder="Email"
              placeholderTextColor="#696969"
              keyboardType="email-address"

            />

      </View>
      <View style={styles.SectionStyle}>
    <MaterialCommunityIcons  name ="lock" size={29} color={'#696969'}/>
    <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#FFFFFF"
              placeholder="Password"
              placeholderTextColor="#696969"
              secureTextEntry={true}
            />

      </View>

         <View style={{alignItems:'center' ,marginTop:20}} >
          <TouchableOpacity style={styles.Button2}
           onPress={()=>pressHandlerppScreen()}
          >
          <Text style={styles.text2}>Signin</Text>
          </TouchableOpacity>
           </View>


      <View style ={{flexDirection:'row',justifyContent:'center',marginTop :60 }}>
      <TouchableOpacity
       style={{
       borderWidth:1,
       borderColor:'#9acd32',
       alignItems:'center',
       justifyContent:'center',
       width:80,
       height:80,
       backgroundColor:'#fff',
       borderRadius:50,
       margin :10
     }}
 >
    <FontAwesome name ="google-plus" size={25} color={'#9acd32'}/>
    </TouchableOpacity>

 <TouchableOpacity
       style={{
       borderWidth:1,
       borderColor:'#9acd32',
       alignItems:'center',
       justifyContent:'center',
       width:80,
       height:80,
       backgroundColor:'#fff',
       borderRadius:50,
       margin :10

     }}
 >
 <FontAwesome name ="twitter" size={25} color={'#9acd32'}/>
 </TouchableOpacity>

 <TouchableOpacity
       style={{
       borderWidth:1,
       borderColor:'#9acd32',
       alignItems:'center',
       justifyContent:'center',
       width:80,
       height:80,
       backgroundColor:'#fff',
       borderRadius:50,
       margin :10

     }}
 >
 <FontAwesome name ="facebook" size={25} color={'#9acd32'}/>
 </TouchableOpacity>
 
</View>

<View style={{marginTop:50}}>
<TouchableOpacity>


  <Text style={{color:'#9acd32'}}>Already have an account?</Text>
  </TouchableOpacity>

 </View>

 
</View>


      

    );
}
}
const styles = StyleSheet.create ({
  
 container: {
         flex:1,
           backgroundColor: '#fff',
            alignItems: 'center',
             justifyContent :'center',
 },
Text1 :{ 
           marginRight :100,
           fontSize:25, 
           fontWeight:'bold',

        
      }, 
Text2 :{ 
       
        marginRight :109,
        fontSize :17,
        color:'#9acd32',
        fontWeight:'bold',

   }, 

   inputStyle: {
    flex: 1,
    color: '#2E8B57', 
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#9acd32',
    borderBottomColor: '#9acd32',
    borderBottomWidth: 1,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 30,
    marginTop: 50,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    
  },

  Button2:{
    margin:15,
    borderRadius:25,
    backgroundColor:'#94c529',
    alignItems:'center',
    justifyContent: 'center',
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
   padding:10,
   marginLeft:70,
   marginRight:70,
   marginTop:20,
  alignItems:'center',
  width:186,
  },
  
        
});



