import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import DropDown from '../Common Element/DropDown';

function CustomerDetails() {
  const [address, setAddress] = useState({
    district: '',
    statae: '',
    country: '',
  });
  const districts = [
    {id: 1, title: 'ff'},
    {id: 2, title: 'gg'},
    {id: 3, title: 'hh'},
    {id: 4, title: 'ii'},
    {id: 5, title: 'jj'},
  ];
  const countries = [
    {
      id: 1,
      title: 'IND',
    },
    {
      id: 2,
      title: 'USA',
    },
    {
      id: 3,
      title: 'AUS',
    },
    {
      id: 4,
      title: 'NUZ',
    },
    {
      id: 5,
      title: 'ENG',
    },
  ];
  const states = [
    {
      id: 1,
      title: 'AA',
    },
    {
      id: 2,
      title: 'BB',
    },
    {
      id: 3,
      title: 'CC',
    },
    {
      id: 4,
      title: 'DD',
    },
    {
      id: 5,
      title: 'EE',
    },
  ];

  const updateState = item => {
    setAddress({...address, statae: item});
  };

  const updateDistrict = item => {
    setAddress({...address, district: item});
  };

  const updateCountry = item => {
    setAddress({...address, country: item});
  };

  return (
    <ScrollView style={{marginRight: '3%', backgroundColor: '#fff'}}>
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>Location details</Text>
        <View style={styles.bar} />
      </View>
      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>BuildingName</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="Building Name" />
      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>Street Name</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="Street Name" />
      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>Village /Location Name</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="Village /Location Name" />
      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>Mandal Name</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="Mandal Name" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: '2%',
          marginLeft: '1%',
          marginTop: '1%',
        }}>
        <View style={{width: '45%', alignContent: 'flex-start'}}>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.subHeader}>State</Text>
            <Text style={styles.star}>*</Text>
          </View>

          <DropDown
            selectValue={address.statae}
            data={states}
            oneSelect={updateState}
          />
        </View>

        <View
          style={{
            width: '45%',
            alignContent: 'flex-start',
            marginLeft: '1%',
            marginTop: '1%',
          }}>
          <View style={styles.inputBoxContainer}>
            <Text style={styles.subHeader}>District</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <DropDown
            selectValue={address.district}
            data={districts}
            oneSelect={updateDistrict}
          />
        </View>
      </View>

      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>Pincode</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput style={styles.input} placeholder="Pincode" />
      <View style={styles.inputBoxContainer}>
        <Text style={styles.subHeader}>Country</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <DropDown
        selectValue={address.country}
        data={countries}
        oneSelect={updateCountry}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '3%',
        }}>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#fff'},{borderColor:'#777777'}]}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#F36E21'},{borderColor:'#F36E21'}]}>
          <Text style={[styles.buttonText,{color:'#fff'}]}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    font: 'poppins',
  },
  mainHeader: {
    color: '#024122',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 25.5,
    width: 130,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
    marginLeft: '2%',
    marginRight: '1%',
  },
  bar: {
    flex: 1,
    height: 3,
    backgroundColor: '#b7b7b7',
  },
  subHeader: {
    color: '#024122',
    fontWeight: '600',
    fontSize: 15,
  },
  inputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginVertical: '1%',
  },
  star: {
    color: '#FF3333',
    fontWeight: '600',
    fontSize: 15,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginHorizontal: '2%',
  },
  dropdown: {
    backgroundColor: 'red',
  },
  button: {
    height:50,
        width:100,
        borderRadius:4,
        alignItems:'center',
        paddingTop:14,
        marginTop:20,
       borderWidth:2
  },
  buttonText: {
    textAlign:'center',
     fontWeight:'600',
     fontSize:15
  },
});

export default CustomerDetails;
