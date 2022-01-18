import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

const countries = [
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
];

const Dropdown = () => {
  return (
    <View style={styles.container}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select your country"
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select your country"
        buttonStyle={{
          width: '80%',

          borderWidth: 1.5,
          borderRadius: 10,
        }}
        buttonTextStyle={{
          fontSize: 20,
        }}
        renderDropdownIcon={isOpened => {
          return (
            <Icon
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#000'}
              size={18}
            />
          );
        }}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select your country"
        buttonStyle={{
          width: '80%',
          backgroundColor: '#333',
          borderWidth: 1.5,
          borderRadius: 10,
        }}
        buttonTextStyle={{
          fontSize: 20,
          color: '#eee',
        }}
        renderDropdownIcon={isOpened => {
          return (
            <Icon
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#eee'}
              size={18}
            />
          );
        }}
        rowStyle={{backgroundColor: '#333'}}
        rowTextStyle={{color: '#eee'}}
      />
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select your country"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Dropdown;
