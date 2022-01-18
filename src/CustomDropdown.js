import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const countries = [
  {id: 1, name: 'Egypt'},
  {id: 2, name: 'Canada'},
  {id: 3, name: 'India'},
  {id: 4, name: 'Ireland'},
];

const Dropdown = ({label}) => {
  const [visible, setVisible] = useState(false);
  const [selectdItem, setSelectdItem] = useState(null);
  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const onSelect = item => {
    setSelectdItem(item);
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.drpdownButton}>
        <Text style={styles.drpdownButtonText}>
          {selectdItem ? selectdItem : label}
        </Text>
        <Icon name="chevron-down" color="#333" size={20} />
      </TouchableOpacity>
      {visible && (
        <FlatList
          data={countries}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.drpdownItemBody}
                onPress={() => onSelect(item.name)}>
                <Text style={styles.drpdownItemText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.drpdownFlatlist}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  drpdownButton: {
    width: '60%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#888',
    borderWidth: 1.5,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
  },
  drpdownButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  drpdownFlatlist: {
    width: '60%',
    height: 150,
    backgroundColor: '#fff',
  },
  drpdownItemBody: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  drpdownItemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});

export default Dropdown;
