import 'react-native-gesture-handler';
import React,{Component } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,Dimensions,FlatList,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";
const {width}=Dimensions.get('window');
const height= width; 
const customImg = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];
const m=[1,2,3,4,5];

  export default class WorkingSpace extends Component {
    constructor(props){
        super(props)
        this.state={
          active:0,
        }
    }
 
    

   change=({nativeEvent})=>{
    const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
       if (slide !== this.state.active){
     this.setState({active:slide});
     
      }
    }
    render(){
      const  PressCalender=()=>{
        this.props.navigation.navigate("Calendar");
       }
       const  BookNow=()=>{
        this.props.navigation.navigate("BookScreen");
       }
      const  pressBack=()=>{
        this.props.navigation.navigate("TabScreen");
       }
    return (
      
    <View style={{flexDirection:'row'}}>
      <View>
      <View >
      <View style={{margin:20,width:30,height:30,borderRadius:30,backgroundColor:'white',alignItems:'center',position:'absolute',zIndex:3, }} 
       >
      <Feather name="arrow-left" size={20} color='#94c529'   style={{paddingTop:3,paddingRight:1}}  onPress={()=>pressBack()}  />
      </View>
      </View>
  {/*Back Icon */}
 
        {/* Image Slider*/}
        <ScrollView
         pagingEnabled
          horizontal 
         onScroll={this.change}
          showsHorizontalScrollIndicator={false}>
       {
         customImg.map((image,index)=>
         <Image
         key={index}
         source={{uri:image}}
         style={{width,height:450}}
         ></Image>
         )

       }
       </ScrollView>
       <View style={styles.dot}>
         {
           customImg.map((i,k)=>
           <Text  key={k} style={k==this.state.active?styles.dotActivetext:styles.dottext}>⬤</Text>
           )
         }
         
       </View>

      </View>
       {/*Info view */}
      <View style={styles.infoview}>
 {/* Love Icon */}
      <View style={{ flexDirection:'row-reverse',marginTop:-35,marginLeft:35}}  >
            <TouchableOpacity style={styles.loveicon}>
            <Ionicons name="heart" size={28} color="white" style={{padding:20}} />
            </TouchableOpacity>
       </View>
<View style={styles.info} >

<Text style={{fontSize:23,color:'#94c529'}}> Co-working space 1</Text>

<Text style={{fontSize:13,color:'#94c529'}}>This Is asdjkas;dlfjsd;lfjkf;lkasjfl;ksjf sdfkljasdflkjs
adflksajdflksajdfasdf sdlfkjasdlfkjskldfjsdlkfjaslfdk</Text>

<View style={{flexDirection:'column',marginTop:20}}>

<View style={{flexDirection:'row'}}>
<Text style={{color:'#94c529',fontSize:14,fontWeight:'10'}} >Available</Text>

<TouchableOpacity style={styles.Avaiable} onPress={() => this.RBSheet.open()}>
  <Text style={{fontSize:14, fontWeight:'10',padding:5}} >10:00-14:00</Text>
</TouchableOpacity>



  <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={330}
          openDuration={250}
          customStyles={{
            container: {
              borderTopEndRadius:40,
              borderTopStartRadius:40,
             
            }, 
          }}
        >
          {/*RBSheet Component */}
        <View style={{margin:30}}>
<Text style={{margin:5,fontSize:26}}>Time</Text>
{/** Pick Time */}
<View  style={{margin:5}}>
<FlatList
 data={m}  
 showsHorizontalScrollIndicator={false}
 numColumns={3}
  renderItem={({item})=>(
<TouchableOpacity style={{backgroundColor:'#94c529',borderRadius:17,width:80,alignItems:'center',margin:5}}>
  <Text style={{fontSize:12,color:'white',padding:8}}>11:00 AM</Text>
</TouchableOpacity>
  )}/>
</View>

{/** Enter Time */}
<TouchableOpacity style={{alignItems:'center',margin:5}}>
  <TextInput style={{fontSize:59}}>07:00</TextInput>
</TouchableOpacity>

<View style={{alignItems:'center',margin:5}}>
<TouchableOpacity style={{width:126,backgroundColor:'#94c529',borderRadius:28,alignItems:'center',margin:5}}>
  <Text style={{fontSize:14,color:'white',padding:20,paddingTop:10,paddingBottom:10}}>Set Time</Text>
</TouchableOpacity>
</View>
        </View>

        </RBSheet>
        <TouchableOpacity style={styles.Avaiable}  onPress={()=>PressCalender()}>
  <Text style={{fontSize:14,fontWeight:'10',padding:5}} >Mon-Sat</Text>
  </TouchableOpacity>
</View>

<View style={{flexDirection:'row',marginTop:10}}>
<Text style={{color:'#94c529',fontSize:14,fontWeight:'10'}}>Duration</Text>
<Text style={{color:'#94c529',fontSize:14,fontWeight:'10',marginLeft:30}}>Duration</Text>
<Text style={{color:'#94c529',fontSize:14,fontWeight:'10',marginLeft:60}}>Price: 20$</Text>
</View>

<View style={{flexDirection:'row',marginTop:30}}>
  <Text style={{color:'#94c529',fontSize:23,fontWeight:'10'}}>Total : 60$ </Text>
 {/* Button */}
  <TouchableOpacity style={{backgroundColor:'#94c529',borderRadius:28,marginLeft:90}}  onPress={()=>BookNow()}>
    <Text style={{color:'white',fontSize:14,padding:10,paddingLeft:30,paddingRight:30}}>Book Now</Text>
  </TouchableOpacity>

</View>

</View>
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
    dot:{
        flexDirection:'row',
        position:'absolute',
        bottom:75,
        alignSelf:'center',
    },
    dottext:{
     color:'#555',
     margin:5,
    fontSize:(width/30),
    },
    dotActivetext:{
      color:'white',
      margin:5,
      fontSize:(width/30),
 
     },
infoview:{
  position:'absolute',
  backgroundColor:'white',
  zIndex:2,
  width,
  height:415,
  marginTop:(height-35),
  borderTopEndRadius:40,
  borderTopStartRadius:40,
     },
     loveicon:{
      backgroundColor:'#94c529',
      borderRadius:35,

    },
    info:{
      margin:40,
    },
    Avaiable:{
    borderRadius:16,
    marginLeft:30,
    backgroundColor:'#94c529',
    opacity:0.3,
    alignItems:'center',
    }
  });