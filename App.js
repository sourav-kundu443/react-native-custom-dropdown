import React from 'react';
import {View, StatusBar} from 'react-native';
import Dropdown from './src/CustomDropdown';

const App = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <Dropdown label="Select item" />
    </View>
  );
};

export default App;
