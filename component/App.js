import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

class HelloWorldApp extends Component{
  render(){
    let pic = {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNGDhXwQLrQhhyaRKJB2KIJlQ3yt6WRjkZSb-GUYZOlhxV3_T"
    }
    return (
      <View>
        <Text style={{color:'red',fontSize:30, fontWeight:'bold', textAlign:'center'} }>Hello world!</Text>
      </View>


      )
  }
}


export default HelloWorldApp;
