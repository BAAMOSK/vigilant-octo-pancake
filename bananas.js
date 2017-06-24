import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://cdn.pixabay.com/photo/2012/12/15/20/17/kermit-70118_960_720.jpg'
    };
    return ( 
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
