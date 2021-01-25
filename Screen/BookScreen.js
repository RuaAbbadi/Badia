import React,{Component} from 'react'; 
import { StyleSheet, Text, View , TouchableOpacity} from "react-native"; 



export default class  BookScreen extends Component {
    render(){
        const  pressBack=()=>{
          this.props.navigation.navigate('WorkingSpace');
         }

return (

<View style={styles.container}>
<Text style={styles.Text1}> Book Now  </Text>
 <Text style={styles.Text2}>Co-working space 1</Text>
 <Text style={styles.Text3}>Total : 60$</Text>



<View style={{marginTop :100}}>
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
      marginLeft :260

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
      marginLeft :260,
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
      marginLeft :260,
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
    marginLeft :200,
    fontSize:25, 
 
}, 


Text2 :{      
    marginLeft :90,
    marginTop:10,
    fontSize :25,
    color:'#9acd32',

}, 
Text3 :{      
    marginLeft :200,
    marginTop:10,
    fontSize :25,
    color:'#9acd32',

}, 

    });
