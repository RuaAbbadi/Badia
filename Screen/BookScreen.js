import React,{Component} from 'react'; 
import { StyleSheet, Text, View , TouchableOpacity} from "react-native"; 
import { Feather } from '@expo/vector-icons';



export default class  BookScreen extends Component {
    render(){
        const  pressBack=()=>{
          this.props.navigation.navigate('Space');
         }

return (

<View style={styles.container}>
<Feather name="arrow-left" size={24} color="#94c529" style={{marginTop:50,marginRight:320,marginBottom :50}}  onPress={()=>pressBack()} />

<Text style={styles.Text1}> Book Now  </Text>
 <Text style={styles.Text2}>Co-working space 1</Text>
 <Text style={styles.Text3}>Total : 60$</Text>



<View style={{marginTop :90,flex:1}}>
<TouchableOpacity
      style={{
      borderWidth:1,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:50,
      marginRight:260,

    }}
>
</TouchableOpacity>

<TouchableOpacity
      style={{
      borderWidth:1,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:50,
      marginRight:260,
      marginTop :10

    }}
>
</TouchableOpacity>

<TouchableOpacity
      style={{
      borderWidth:1,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:50,
      marginRight:260,
      marginTop :10

    }}
>
</TouchableOpacity>

</View>

</View>

);


}
}

const styles = StyleSheet.create({
  
container: {
       flex:1,
       backgroundColor: '#fff',
        alignItems: 'center',
         justifyContent :'center',
         
   },
    

Text1 :{ 
    marginRight :200,
    fontSize:25, 
 
}, 


Text2 :{      
    marginRight :90,
    marginTop:10,
    fontSize :25,
    color:'#9acd32',

}, 
Text3 :{      
    marginRight :200,
    marginTop:10,
    fontSize :25,
    color:'#9acd32',

}, 

    });
