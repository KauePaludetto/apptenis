import React from 'react';
import { Text, ImageBackground, ScrollView} from 'react-native';
import x from "./x";

import adidas6 from '../assets/Adidas/6.png';
import adidas7 from '../assets/Adidas/7.png';
import adidas8 from '../assets/Adidas/8.png';
import adidas9 from '../assets/Adidas/9.png';
import adidas10 from '../assets/Adidas/10.png';

export default function TelaAdidas () {
  return (
    <ScrollView>
      <ImageBackground style={x.container}>
        
      <ImageBackground style={x.card} source={adidas6}> 
          <Text style={x.card_tiutlo}>Adidas Coreracer Masculino</Text>
          <Text style={x.card_valor}>R$ 179,99</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={adidas7}> 
          <Text style={x.card_tiutlo}>Adidas Breaknet Masculino</Text>
          <Text style={x.card_valor}>R$ 208,99</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={adidas8}> 
          <Text style={x.card_tiutlo}>Adidas Lite Racer Rebold 1</Text>
          <Text style={x.card_valor}>R$ 379,99</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={adidas9}> 
          <Text style={x.card_tiutlo}>Adidas Lite Racer Rebold 2</Text>
          <Text style={x.card_valor}>R$ 329,05</Text>
        </ImageBackground>

        <ImageBackground style={x.card} source={adidas10}> 
          <Text style={x.card_tiutlo}>Adidas Lite Racer Rebold 3</Text>
          <Text style={x.card_valor}>R$ 218,49</Text>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
}