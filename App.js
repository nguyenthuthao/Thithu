import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Bills from './components/Bills';
import Insert from './components/Insert';
import Lists from './components/Lists';

export default function App() {
  return (
    <Router>
      <Stack key='root' hideNavBar={true}>
      <Scene key='bill' component={Bills} title='Bill'></Scene>
      <Scene key='insert' component={Insert} title='Insert'></Scene>
      <Scene key='list' component={Lists} title='List'></Scene>
      </Stack>
    </Router>
  );
}


