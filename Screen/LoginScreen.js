import React ,{Component}from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native"; 
import {FontAwesome} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';



export default class LoginScreen extends Component {
  render(){
    const  pressHandlerLogin=()=>{
      this.props.navigation.navigate('TabScreen');
     }
     const  pressBack=()=>{
      this.props.navigation.navigate('Home');
     }

return (

    <View style={styles.container}>
    <Text style={styles.Text1}> Login page </Text>
     <Text style={styles.Text2}> Create new account </Text>

     
      

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
   <MaterialCommunityIcons  name ="lock" size={29} color={'#696969'}/>
   <TextInput
             style={styles.inputStyle}
             underlineColorAndroid="#FFFFFF"
             placeholder="Password"
             placeholderTextColor="#696969"
             secureTextEntry={true}
           />
     </View>
     
     <View>
       <TouchableOpacity
     style={{
      borderWidth:1,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:200,
      height:50,
      backgroundColor:'#9acd32',
      borderRadius:50,
      marginTop:50,
    }}
    onPress={()=>pressHandlerLogin()}
       >
    
    <Text style={{color:'#ffffff'}}>Login</Text>
    </TouchableOpacity>
     </View>


     <View style ={{felx :1,flexDirection:'row',justifyContent:'center',marginTop :40 }}>
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
   <FontAwesome name = "facebook"  size={25} color={'#9acd32'}/>
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
<FontAwesome name ="google-plus" size={25} color={'#9acd32'}/>
</TouchableOpacity>
</View>


<View style={{marginTop:50}}>
<TouchableOpacity>
    <Text style={{color:'#9acd32'}}>Forget Your Password?</Text>
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
              marginRight :200,
              fontSize:25, 
              fontWeight:'bold',
           
         }, 
   Text2 :{ 
          
           marginRight:160,
           fontSize :18,
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
    
     SectionStyle: {
       flexDirection: 'row',
       height: 30,
       marginTop: 60,
       marginLeft: 35,
       marginRight: 35,
       margin: 10,
       
     },
   
    
     
           
   });
   
   
   