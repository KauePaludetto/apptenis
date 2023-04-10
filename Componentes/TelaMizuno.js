import React from 'react';
import { Text, ImageBackground, ScrollView } from 'react-native';
import x from "./x";

import mizuno11 from '../assets/Mizuno/11.png';
import mizuno12 from '../assets/Mizuno/12.png';

export default function TelaMizuno () {
  return (
    <ScrollView>
      <ImageBackground style={x.container}>
        
      <ImageBackground style={x.card} source={mizuno11}> 
          <Text style={x.card_tiutlo}>Mizuno Cometa</Text>
          <Text style={x.card_valor}>R$ 199,40</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={mizuno12}> 
          <Text style={x.card_tiutlo}>Mizuno Cometa </Text>
          <Text style={x.card_valor}>R$ 249,90</Text>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
}