import React,{Component} from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity, } from "react-native"; 
import { Divider } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';



export default class ProfileScreen extends Component {
  render(){
    const  pressBack=()=>{
      this.props.navigation.navigate('TabScreen');
     }
     
return (
 
<View style={styles.container}> 
<Feather name="arrow-left" size={24} color="#94c529" style={{marginTop:80,marginRight:300}}  onPress={()=>pressBack()} />
<Text  style={styles.Text1}> Profile </Text>
<View style ={{flex:1,flexDirection:'row',justifyContent:'center',marginTop :50,}}>
      <TouchableOpacity
       style={{
       borderWidth:4,
       borderColor:'#9acd32',
       alignItems:'center',
       justifyContent:'center',
       width:200,
       height:200,
       backgroundColor:'#fff',
       borderRadius:100,
       margin :10
     }}
 >
    </TouchableOpacity>
</View>


<View style={{flex:1 ,alignItems:'center'}}>
    <Text style={styles.Text2}> Ru'a Abbadi </Text>
</View>

<View style={{marginTop:350}}>
<Text style={{fontSize:18}}> Email</Text>

<View>
<Divider style={{borderColor:'#9acd32',marginTop:25,borderWidth:1 }}  ></Divider>
</View>

<View>
<Text  style={{fontSize:18,marginRight:260,marginTop:50 }}>Phone</Text>
</View>

<View>
<Divider style={{borderColor:'#9acd32',marginTop:25,borderWidth:1 }}  ></Divider>
</View>


</View>






</View>



)

}
}

const styles = StyleSheet.create ({
  
container: {
            
              backgroundColor: '#fff',
               alignItems: 'center',
                justifyContent :'center',
    },
Text1 :{ 
              marginTop :50, 
              marginRight :250,
              fontSize:25, 
             
           
         }, 

Text2 :{
    marginTop :250, 
    fontSize:25, 
  justifyContent:'center'
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
    marginTop: 330,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    
  },



        });