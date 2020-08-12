import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import db from './Config'
// or any pure javascript modules available in npm


export default function App()  {
 
  var loginkey=0
  var [nameval,onChangeText]=React.useState('Your Name(0)')
 var [rollval,rollChangeText]=React.useState('1')
  var check=0;
if(rollval<=0||rollval>=200||rollval==="a"||rollval==="b"||rollval==="c"||rollval==="d"||rollval==="e"||rollval==="f"||rollval==="g"||rollval==="h"||rollval==="i"||rollval==="j"||rollval==="k"||rollval==="l"||rollval==="m"||rollval==="o"||rollval==="p"||rollval==="q"||rollval==="r"||rollval==="s"||rollval==="t"||rollval==="u"||rollval==="v"||rollval==="w"||rollval==="x"||rollval==="y"||rollval==="z"||rollval==="A"||rollval==="B"||rollval==="C"||rollval==="D"||rollval==="E"||rollval==="F"||rollval==="g"||rollval==="h"||rollval==="i"||rollval==="j"||rollval==="k"||rollval==="l"||rollval==="m"||rollval==="o"||rollval==="p"||rollval==="q"||rollval==="r"||rollval==="S"||rollval==="T"||rollval==="U"||rollval==="V"||rollval==="W"||rollval==="X"||rollval==="Y"||rollval==="Z"){
window.alert("Please enter a valid number greater than 0 and less than 200")
window.alert("If your number is a single digit number select the entire value then enter your number")
rollval=1
}
if(nameval<0){
  window.alert("Plaese enter a valid name")
  nameval="Your teacher will know you are not entering a valid name Change it!"
}
    
  
  
  return (
   <View>
   <Text style={{fontSize:40,fontWeight:"bold",color:"white",backgroundColor:"black"}}>Attendit StudentRegistry</Text>


   <Text style={{fontSize:20}}>Hi welcome to the student registry! Please fill in your full name and attendance number below in the inputs.


   Then click on login and wait for the teacher </Text>


    <Text style={{fontSize:15,marginTop:30}}>Your Name:</Text>
   <TextInput
   style={{height:40,borderColor:"black",borderWidth:2}}
   placeholder="Your Name"
   onChangeText={text => onChangeText(text)}
      value={nameval}
   />

   <TextInput
    style={{height:40,borderColor:"black",borderWidth:2}}
   
     onChangeText={text => rollChangeText(text)}
      value={rollval}
   />

  <TouchableOpacity  style={{backgroundColor:"white",marginTop:50,marginLeft:65,width:200,height:40,borderRadius:34,borderWidth:3,alignItems:"center"}}onPress={()=>{
       loginkey=Math.floor(Math.random(100,456)*1000)
      check=check+1

    var infoSet=db.ref('Students/Student:'+nameval+'--LoginId:'+''+loginkey+'--RollNumber:'+rollval)
    infoSet.set({
    name:nameval,
    rollnumber:rollval,
    loginid:loginkey
   
 })
    

  }}><Text style={{color:"black",marginBottom:0,fontSize:25,paddingBottom:10}}>Login</Text> </TouchableOpacity>
<View>
  
  </View>
   </View>
  );

}


