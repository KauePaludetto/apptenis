import { ImageBackground } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaNike from './Componentes/TelaNike';
import TelaMizuno from './Componentes/TelaMizuno';
import TelaAdidas from './Componentes/TelaAdidas';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Nike' component={TelaNike}/>
        <Drawer.Screen name='Mizuno' component={TelaMizuno}/>
        <Drawer.Screen name='Adidas' component={TelaAdidas}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}