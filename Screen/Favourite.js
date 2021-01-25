import React from 'react'; 
import { StyleSheet, Text, View , TouchableOpacity} from "react-native"; 
import {Ionicons} from '@expo/vector-icons';


const Favourite =()=>{

    return (

    <View style={styles.container}>
    <TouchableOpacity
      style={{
      borderWidth:4,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:65,
      height:65,
      backgroundColor:'#fff',
      borderRadius:50,
      marginRight :250

    }}
>

     </TouchableOpacity> 

     <View>
     <Text style={styles.Text1}> Favourite </Text> 
    </View>

    <View>
    <TouchableOpacity
      style={{
      borderWidth:4,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:300,
      height:160,
      backgroundColor:'#fff',
      borderRadius:30,
      marginTop :80,
      alignItems:'center'



    }}
>    
<Ionicons  name ="heart-circle" size={40} color={'#9acd32'} style={{ marginTop :-20,marginRight:230}}/>
<Text style={{ color:'#9acd32' ,fontSize :15,marginLeft:100}}>Co-Working space 1</Text>

<View style={{marginLeft:100,marginTop:60}}>

</View>
 </TouchableOpacity> 




 <TouchableOpacity
      style={{
      borderWidth:4,
      borderColor:'#9acd32',
      alignItems:'center',
      justifyContent:'center',
      width:300,
      height:160,
      backgroundColor:'#fff',
      borderRadius:30,
      marginTop :15,
      alignItems:'center'

    }}
>    
<Ionicons  name ="heart-circle" size={40} color={'#9acd32'} style={{ marginTop :-20,marginRight:230}}/>
<Text style={{ color:'#9acd32' ,fontSize :15,marginLeft:100}}>Co-Working space 2</Text>

<View style={{marginLeft:100,marginTop:60}}>

</View>
 </TouchableOpacity> 

 
    




 </View>
    



</View>


    );
}

export default Favourite;
const styles = StyleSheet.create(
  
    { container: {
       backgroundColor: '#fff',
        alignItems: 'center',
         justifyContent :'center',
         flex:1
         
        
   },
   Text1 :{ 
    marginLeft :150,
    fontSize:28, 
 
}, 
    
    });