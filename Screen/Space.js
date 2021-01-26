import 'react-native-gesture-handler';
import React,{Component } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,Dimensions,FlatList,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";
const {width}=Dimensions.get('window');
const height= width; 
const images =[

  'https://images.pexels.com/photos/1104365/pexels-photo-1104365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
  'https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

]
const m=[
  {name:'1',key:'1'},
  {name:'2',key:'2'},
  {name:'3',key:'3'},
  {name:'3',key:'4'},
  {name:'3',key:'5'},
  
  ];

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
      <View style={{margin:40,width:30,height:30,borderRadius:30,backgroundColor:'white',alignItems:'center',position:'absolute',zIndex:3, }} 
       >
      <Feather name="arrow-left" size={20} color='#94c529'   style={{paddingTop:5,paddingRight:1}}  onPress={()=>pressBack()}  />
      </View>
      </View>
 
        <ScrollView
         pagingEnabled
          horizontal 
         onScroll={this.change}
          showsHorizontalScrollIndicator={false}>
       {
         images.map((image,index)=>
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
           images.map((i,k)=>
           <Text  key={k} style={k==this.state.active?styles.dotActivetext:styles.dottext}>⬤</Text>
           )
         }
         
       </View>

      </View>
      <View style={styles.infoview}>
      <View style={{ flexDirection:'row-reverse',marginTop:-35,marginLeft:35}}  >
            <TouchableOpacity style={styles.loveicon}>
            <Ionicons name="heart" size={28} color="white" style={{padding:20}} />
            </TouchableOpacity>
       </View>
<View style={styles.info} >

<Text style={{fontSize:23,color:'#94c529'}}> Co-working space 1</Text>

<Text style={{fontSize:13,color:'#94c529', marginLeft:10}}>This Is Co-working space 1 </Text>

<View style={{flexDirection:'column',marginTop:20}}>

<View style={{flexDirection:'row'}}>
<Text style={{color:'#94c529',fontSize:14}} >Available</Text>

<TouchableOpacity style={styles.Avaiable} onPress={() => this.RBSheet.open()}>
  <Text style={{fontSize:14,padding:5}} >10:00-14:00</Text>
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
{/* Pick Time */}
<View  style={{margin:5}}>
<FlatList
 data={m}  
 numColumns={3}
 showsHorizontalScrollIndicator={false}
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