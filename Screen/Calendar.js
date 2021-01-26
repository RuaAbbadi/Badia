import React ,{Component} from 'react';
import { StyleSheet,  View,Text , ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RNMonthly from "react-native-monthly";



export default class Calender  extends Component { 
  render(){
    const pressBack=()=>{
      this.props.navigation.navigate('Space');
     }
     
  return (
   
    
     <View style={styles.container}>

        <Feather name="arrow-left" size={24} color="#94c529" style={{marginTop:50,marginLeft:30}}  onPress={()=>pressBack()} />

        <View style={{alignContent:'center',marginLeft:60,marginTop:30,marginRight:60}}>
             <Text style={{fontSize:26}}>When do you want To visit us?</Text>
        </View>
        

       <ScrollView>
        <View style={{alignItems :'flex-start',marginTop:15,margin:15}}>

         <Text style={{fontSize:15,marginLeft:20}}>December</Text>
        <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
        itemContainerStyle={{}}
        style={{marginTop:10}}
          />


        <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>January</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>


        
      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>February</Text>
       <RNMonthly 
        numberOfDays={28} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>


            
      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>March</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>



            
      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>April</Text>
       <RNMonthly 
        numberOfDays={30} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>

      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>May</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>



     <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>June</Text>
       <RNMonthly 
        numberOfDays={30} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>


     <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>July</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>


       <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>August</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>

        <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>September</Text>
       <RNMonthly 
        numberOfDays={30} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>



      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>October</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>

          
      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>November</Text>
       <RNMonthly 
        numberOfDays={30} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>




      <Text style={{fontSize:15,marginLeft:20, marginTop:10}}>December</Text>
       <RNMonthly 
        numberOfDays={31} 
        activeDays={[12, 24]} 
        activeBackgroundColor="black"
        inactiveBackgroundColor="#94c529"
          style={{marginTop:10}}/>





        </View>


       


        </ScrollView>
        

  
    </View>
  ); 

}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  height:'100%',
    },
    Calender:{
      margin:80,
      alignItems:'center'
    }
});