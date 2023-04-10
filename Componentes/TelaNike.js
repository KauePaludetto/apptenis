import React from 'react';
import {Text, ImageBackground, ScrollView} from 'react-native';
import x from "./x";

import nike1 from '../assets/nike/1.png';
import nike2 from '../assets/nike/2.png';
import nike3 from '../assets/nike/3.png';
import nike4 from '../assets/nike/4.png';
import nike5 from '../assets/nike/5.png';

export default function TelaNike () {
  return (
    <ScrollView>
      <ImageBackground style={x.container}>
        
      <ImageBackground style={x.card} source={nike1}> 
          <Text style={x.card_tiutlo}>Nike Air Winflo 9 Rosa</Text>
          <Text style={x.card_valor}>R$ 341,99</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={nike2}> 
          <Text style={x.card_tiutlo}>Nike Air Winflo 9 Preto</Text>
          <Text style={x.card_valor}>R$ 484,49</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={nike3}> 
          <Text style={x.card_tiutlo}>Nike Renew Ride 3</Text>
          <Text style={x.card_valor}>R$ 427,49</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={nike4}> 
          <Text style={x.card_tiutlo}>Nike Renew Ride 4</Text>
          <Text style={x.card_valor}>R$ 417,99</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={nike5}> 
          <Text style={x.card_tiutlo}>Nike Renew Run 3</Text>
          <Text style={x.card_valor}>R$ 427,49</Text>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
}
