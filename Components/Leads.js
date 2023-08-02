import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Filter from '../Asset/mi_filter.png';
import Search from '../Asset/Search.png';
import Data from './Data.json';

const Leads = () => {
  // const userData = Data.data;
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = text => {
    setSearchTerm(text);
    // Keyboard.dismiss()
    console.log(text);
  };
  const searchBox = searchTerm => {
    console.log('clicked', searchTerm);
  };
  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.header}>My Leads</Text>
        <View style={styles.headerContainet}>
          <TouchableOpacity style={styles.searchBox}>
            <Image source={Search} />
            <TextInput
              style={styles.textBox}
              onChangeText={text => handleSearch(text)}
              placeholder="Search Leads"
              value={searchTerm}
              // onEndEditing={Keyboard.dismiss()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => searchBox(searchTerm)}>
            <Image source={Filter} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.cardsContainer}>
          <Text style={[styles.subHeader, {margin: '4%'}]}>
            Showing 28 items
          </Text>
          <View style={styles.card}>
            <View style={styles.child1}>
              <Text style={styles.subHeader}>Name</Text>
              <Text style={styles.subHeader}>Email</Text>
              <Text style={styles.subHeader}>Mobile</Text>
              <Text style={styles.subHeader}>Company</Text>
              <Text style={styles.subHeader}>Lead Details</Text>
            </View>
            <View style={styles.child}>
              <Text style={styles.detailsText}>Prakash Verma</Text>
              <Text style={styles.detailsText}>prakash.verma@kpmg.com</Text>
              <Text style={styles.detailsText}>9087654321</Text>
              <Text style={styles.detailsText}>Fertilizers PVT Ltd</Text>
              <Text style={styles.detailsText}>MO Review</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.child1}>
              <Text style={styles.subHeader}>Name</Text>
              <Text style={styles.subHeader}>Email</Text>
              <Text style={styles.subHeader}>Mobile</Text>
              <Text style={styles.subHeader}>Company</Text>
              <Text style={styles.subHeader}>Lead Details</Text>
            </View>
            <View style={styles.child}>
              <Text style={styles.detailsText}>Prakash Verma</Text>
              <Text style={styles.detailsText}>prakash.verma@kpmg.com</Text>
              <Text style={styles.detailsText}>9087654321</Text>
              <Text style={styles.detailsText}>Fertilizers PVT Ltd</Text>
              <Text style={styles.detailsText}>MO Review</Text>
            </View>
          </View>
        </ScrollView>

        {/* Cards */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  header: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    color: 'black',
    margin: '3%',
  },
  headerContainet: {
    margin: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 7,
    height: 45,
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '3%',
  },
  textBox: {
    border: 0,
    height: '80%',
  },
  filter: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 7,
    alignItems: 'center',
    padding: '2%',
  },
  cardsContainer: {
    backgroundColor: '#EBEBEB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  subHeader: {
    color: '#024122',
    fontWeight: '600',
    fontSize: 13,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    padding: '2%',
    width: 390,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 2,
    shadowRadius: 3,
  },
  child1: {
    flex: 2,
  },
  child: {
    flex: 4,
  },
  detailsText: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
    color: '#3D3D3D',
  },
});
export default Leads;
