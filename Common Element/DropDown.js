import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Images from '../Asset/Vector.png';

const DropDown = ({data, selectValue, oneSelect}) => {
  const [option, setOption] = React.useState(false);

  const selectOption = () => {
    setOption(!option);
  };

  const oneSelectItem = val => {
    setOption(false);
    oneSelect(val);
  };

  return (
    <View >
      <TouchableOpacity style={styles.dropDownStyle} onPress={selectOption}>
        <Text>{!!selectValue ? selectValue.title : 'Choose Option'}</Text>

        <Image
          source={Images}
          style={{
            transform: [{rotate: option ? '0deg' : '180deg'}],
          }}></Image>
      </TouchableOpacity>
      {option && (
        <View style={styles.openDropDown}>
          {data.map(val => {
            return (
              <TouchableOpacity onPress={() => oneSelectItem(val)}>
                <Text>{val.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownStyle: {
    minHeight: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#dddddd',
  },
  openDropDown: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
  },
});

export default DropDown;
