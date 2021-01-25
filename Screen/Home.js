import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
const {width}=Dimensions.get('window');
const height= width *0.55; 
const images =[

  'https://images.pexels.com/photos/1104365/pexels-photo-1104365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
  'https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

]


  export default class AppScreen extends Component {
    constructor(props){
      super(props)
      this.state={
        active:0
      }
  }
 

   change=({nativeEvent})=>{
    const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
       if (slide !== this.state.active){
     this.setState({active:slide});
     
      }
    }
   
    render(){
      const  pressHandlerLogin=()=>{
       this.props.navigation.navigate('LoginScreen');
      }
  
      const pressHandlerSignin=()=>{
        this.props.navigation.navigate('RegisterScreen');  
      }
  
    return (
      <View style={styles.container}>
      <View style={styles.image} >
      <Image 
      style={{width:80 ,height:80}}
      source={require("../image/Logo.jpg")} ></Image>
      </View>

      <View style ={{marginTop:30,width,height}}>
        <ScrollView
         pagingEnabled
          horizontal 
         onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={{width,height}}>
       {
         images.map((image,index)=>
         <Image
         key={index}
         source={{uri:image}}
         style={{width,height,resizeMode:'center'}}
         ></Image>
         )

       }
       </ScrollView>
       <View style={styles.dot}>
         {
           images.map((i,k)=>
           <Text  key={k} style={k==this.state.active?styles.dotActivetext:styles.dottext}>⬤</Text>
           )
         }
         
       </View>
      </View>
<View style={styles.imageTextView}>
  <Text style={styles.imageText1}>Find your Disk Now</Text>
  <Text style={styles.imageText2}> Your Experience Will Be Greet</Text>
</View>
      <View style={{marginBottom:200,alignItems:'center'}}>
      <View >
      <TouchableOpacity
      onPress={()=>pressHandlerLogin()}
        style={styles.Button1}>
        <Text style={styles.text1}>Login</Text>
      </TouchableOpacity>
             </View>

            <View >
             <TouchableOpacity style={styles.Button2}
               onPress={()=>pressHandlerSignin()}
              > 
                  <Text style={styles.text2}>Create an Account</Text>
               </TouchableOpacity>
             </View>

     </View>
  </View>

    );
  }
}
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',

    },
    imageTextView: {
marginTop:20,
fontSize:18,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageText1: {
      fontSize:19,
          color:'#94c529',
          marginTop:30,
          },
          imageText2: {
            fontSize:19,
                color:'#94c529',
                marginBottom:30,
                },
    image:{
      padding:20,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    Button1:{
      margin:15,
      marginTop:10,
      borderRadius:20,
      backgroundColor:'#94c529',
      alignItems:'center',
      justifyContent: 'center',
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
     padding:7,
     marginLeft:70,
     marginRight:70,
     marginTop:20,
     width:186,
    },
    text1:{
      color:'white',
      fontSize:16,
    },
    text2:{
      color:'#94c529',
      fontSize:16,
    },
    Button2:{
      margin:15,
      marginTop:10,
      borderRadius:15,
      backgroundColor:'white',
      borderWidth:1,
      alignItems:"center",
      justifyContent: 'center',
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
     padding:5,
     marginLeft:70,
     marginRight:70,
     borderColor:'#94c529',
     width:186,
    },
    dot:{
      flexDirection:'row',
      position:'absolute',
      bottom:-30,
      alignSelf:'center',
     
    },
    dottext:{
     color:'#999',
     margin:5,
    fontSize:(width/30),


    },
    dotActivetext:{
      color:'#94c529',
      margin:5,
      fontSize:(width/30),
 
     },
  });
  