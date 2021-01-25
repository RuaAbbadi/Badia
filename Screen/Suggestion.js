import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList,ScrollView,Dimensions} from 'react-native';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
export default function Suggestion ({navigation}) {  
  const m = [ 1,2,3,4 ];
  const m1 = [ 'All','Categories 1','Categories 2' ];
  const {width}=Dimensions.get('window');

  function navigateToProfile() {
    navigation.navigate("ProfileScreen");
}
function pressSpace() {
  navigation.navigate("Space");
}
  return (
   
  <View style={styles. container}>
    
    <View style={{flexDirection:'row',marginTop:10,}}> 
     <View style={{margin:15}}>
         <Feather name="align-left" size={30} color="#94c529"  />
       </View>
      <TouchableOpacity onPress={()=>navigateToProfile()}>
       <View style={{margin:15,marginLeft:width-130,width:44,height:44,borderRadius:30,borderWidth:3,borderColor:"#94c529" }}    >
      
       </View>
       </TouchableOpacity>
</View>
     


    <View style={styles.HeaderView}>
          <Text style={styles.Headertext1}>Suggestion</Text>
    </View>
    <ScrollView>

    <FlatList
    data={m}  
    showsHorizontalScrollIndicator={false}
     horizontal={true} 
     renderItem={({item})=>(
    <View style={styles.Form}>
    <View style={styles.second}> 
                <View style={{paddingRight:10,paddingLeft:5,flexDirection:'row',justifyContent:'space-between'}}>
                </View>
                </View>
    </View> 
     )}
/>

<FlatList
    data={m1}  
    showsHorizontalScrollIndicator={false}
     horizontal={true} 
     renderItem={({item})=>(
                <View style={styles.Text}>
                  <TouchableOpacity  > 
                  <Text style={{fontSize:15,color:'#94c529'}}>{item}</Text>
                  </TouchableOpacity>
                </View>
     )}
/>
<View style={{marginBottom:70}}>
<FlatList
    data={m}  
     renderItem={({item})=>(
      <TouchableOpacity style={styles.Form1} onPress={()=>pressSpace()}>

      <View style={{ flexDirection:'row-reverse'}}  >
            <TouchableOpacity style={styles.loveicon}>
            <Ionicons name="heart" size={10} color="white" style={{padding:6}} />
            </TouchableOpacity>
       </View>
                
       <View style={{ flexDirection:'row'}}  >
            <Text style={styles.Title}>Co-working space 1</Text>
        </View>
  
         <View style={{ flexDirection:'row'}}  >
            <Stars default={3} count={5} half={true}  starSize={50}
                     fullStar={<Fontisto name={'star'} style={[styles.myStarStyle]}/>}
                     emptyStar={<Feather name={'star'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Fontisto name={'star-half'} style={[styles.myStarStyle]}/>}/>
          </View>              
      </TouchableOpacity> 
     )}
/>

</View>
</ScrollView>
  </View>
  ); 

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom:70,
    },
    HeaderView:{
    margin:15,
    marginTop:10,
    color:'black',
    fontSize:19,
    },
    Headertext1:{
    color:'black',
    fontSize:26,
    },
    Headertext2:{
    marginBottom:20,
    color:'#94c529',
    fontSize:23,
    },
    Form:{
      margin:15,
      borderRadius:35,
      padding:15,
      paddingTop:15,
      paddingBottom:25, 
      backgroundColor:'white',
      shadowColor: "#000",
      borderColor:'#94c529',
      borderWidth:3,
      shadowOffset: {	width: 0,	height: 5},
      shadowOpacity: 0.28,
      shadowRadius: 5.00,
      elevation: 4,
      marginBottom:10,
      height:180,
      width:180,
    }, 
    Title:{
      marginTop:30,
         height:35,
         fontSize:23,
         color:'#94c529'
        
       },
      Text:{
        paddingRight:20,
        paddingLeft:5,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        marginLeft:50,
      },
      Form1:{
        margin:15,
        borderRadius:29,
        padding:15,
        paddingTop:10,
        paddingBottom:25, 
        backgroundColor:'white',
        shadowColor: "#000",
        borderColor:'#94c529',
        borderWidth:3,
        shadowOffset: {	width: 0,	height: 5},
        shadowOpacity: 0.28,
        shadowRadius: 5.00,
        elevation: 4,
        marginBottom:10,
        height:125,
    },
    Title:{
      marginTop:30,
         height:35,
         fontSize:23,
         color:'#94c529'
        
       },
      loveicon:{
        backgroundColor:'#94c529',
        borderRadius:25,

      },
      second:{
        marginTop:15,
      },
      myStarStyle: {
        color: '#94c529',
        backgroundColor: 'transparent',
        padding:1,
      },
      myEmptyStarStyle: {
        color: '#94c529',
        padding:1,
      }
});