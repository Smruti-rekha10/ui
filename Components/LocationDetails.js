import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import DropDown from '../Common Element/DropDown';
import CheckBox from '../Common Element/Checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowHeight = Dimensions.get('window').height;

function LocationDetails() {
  // state for dropdown
  const [customer, setCustomer] = useState({
    custClass: '',
    status: '',
    primaryCode: '',
    secondaryCode: '',
    fertilizerRTID: '',
  });

  //State for accordion
  const [info, setInfo] = useState(false);
  const [cpc, setCpc] = useState(false);
  const [bank, setBank] = useState(false);

  // Dummy data for dropdown
  const customerClassification = [
    {id: 1, title: 'a'},
    {id: 2, title: 'b'},
    {id: 3, title: 'c'},
    {id: 4, title: 'd'},
  ];
  const customerStatus = [
    {id: 1, title: 'gkj'},
    {id: 2, title: 'ghdh'},
    {id: 3, title: 'hfdlkl'},
    {id: 4, title: 'jhl'},
    {id: 5, title: 'wrd'},
  ];
  const countryCode = [
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

  //state for type of customers
  const [retailer, setRetailer] = useState(false);
  const [wholeseller, setWholeseller] = useState(false);
  const [institutional, setInstitutional] = useState(false);

  const custClass = item => {
    setCustomer({...customer, custClass: item});
  };

  const status = item => {
    setCustomer({...customer, status: item});
  };

  const primaryCode = item => {
    setCustomer({...customer, primaryCode: item});
  };

  const secondaryCode = item => {
    setCustomer({...customer, secondaryCode: item});
  };

  const fertilizerRTID = item => {
    setCustomer({...customer, fertilizerRTID: item});
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.accodionBox}>
          <Text style={styles.accordionText}>Customer Information</Text>
          <TouchableOpacity
            onPress={() => {
              setInfo(!info);
              setBank(false);
              setCpc(false);
            }}>
            {info ? <Text>Clicked</Text> : <Text>Closed</Text>}
          </TouchableOpacity>
        </View>
        {/* //Customer Details */}
        {info && !cpc && !bank ? (
          <View style={styles.accordionContent}>
            <Text style={styles.subHeader}>Types Of Customer</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '1%',
              }}>
              <CheckBox
                onPress={() => setRetailer(!retailer)}
                title="Retailer"
                isChecked={retailer}
              />
              <CheckBox
                onPress={() => setWholeseller(!wholeseller)}
                title="Wholeseller"
                isChecked={wholeseller}
              />
              <CheckBox
                onPress={() => setInstitutional(!institutional)}
                title="Institutional"
                isChecked={institutional}
              />
            </View>
            <Text style={styles.subHeader}>Customer Classification</Text>
            <DropDown
              selectValue={customer.custClass}
              data={customerClassification}
              oneSelect={custClass}
            />
            <Text style={styles.subHeader}>Legal Status</Text>
            <DropDown
              selectValue={customer.status}
              data={customerStatus}
              oneSelect={status}
            />
            <Text style={styles.subHeader}>Primary Contact Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Primary Contact Name"
            />
            <Text style={styles.subHeader}>Primary Contact Number</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '20%'}}>
                <DropDown
                  selectValue={customer.primaryCode}
                  data={countryCode}
                  oneSelect={primaryCode}
                />
              </View>
              <View style={{width: '70%'}}>
                <TextInput style={styles.input} placeholder="Primary Number" />
              </View>
            </View>
            <Text style={styles.subHeader}>Secondary Contact Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Secondary Contact Name"
            />
            <Text style={styles.subHeader}>Secondary Contact Number</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '20%'}}>
                <DropDown
                  selectValue={customer.secondaryCode}
                  data={countryCode}
                  oneSelect={secondaryCode}
                />
              </View>
              <View style={{width: '70%'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Secondary Number"
                />
              </View>
            </View>
          </View>
        ) : (
          ''
        )}
        <View style={styles.accodionBox}>
          <Text style={styles.accordionText}>CPC License Details</Text>
          <TouchableOpacity
            onPress={() => {
              setCpc(!cpc), setInfo(false), setBank(false);
            }}>
            {cpc ? <Text>Clicked</Text> : <Text>Closed</Text>}
          </TouchableOpacity>
        </View>
        {/* CPC */}
        {cpc && !info && !bank ? (
          <View style={styles.accordionContent}>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Fertilizer RT ID Type</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <DropDown
              selectValue={customer.fertilizerRTID}
              data={customerClassification}
              oneSelect={fertilizerRTID}
            />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Fertilizer RT License Number</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Fertilizer RT License Number"
            />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>MFMS Retailer ID</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput style={styles.input} placeholder="MFMS Retailer ID" />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Fertilizer RT Valid From</Text>
              <Text style={styles.star}>*</Text>
            </View>
            {/* Calender */}
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>
                Fertilizer RT License Expiry Date
              </Text>
              <Text style={styles.star}>*</Text>
            </View>
            {/* Calender */}
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Fertilizer RT Mobile Number</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Fertilizer RT Mobile Number"
            />
          </View>
        ) : (
          ''
        )}

        {/* Bank */}
        <View style={[styles.accodionBox]}>
          <Text style={styles.accordionText}>Bank Details</Text>
          <TouchableOpacity
            onPress={() => {
              setBank(!bank), setInfo(false), setCpc(false);
            }}>
            {bank ? <Text>Clicked</Text> : <Text>Closed</Text>}
          </TouchableOpacity>
        </View>
        {bank && !info && !cpc ? (
          <View style={styles.accordionContent}>
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Bank Name</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput style={styles.input} placeholder="Bank Name" />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Customer Name in Bank</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Customer Name in Bank"
            />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>Bank Account Number</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput style={styles.input} placeholder="Bank Account Number" />
            <View style={styles.inputBoxContainer}>
              <Text style={styles.subHeader}>IFSC CODE</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput style={styles.input} placeholder="IFSC CODE" />
            <Text style={styles.subHeader}>Default Loading Point</Text>
            <TextInput
              style={styles.input}
              placeholder="Default Loading Point"
            />
            <Text style={styles.subHeader}>Unloading Point(s)</Text>
            <TextInput style={styles.input} placeholder="Unloading Point(s)" />
          </View>
        ) : (
          ''
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: '#fff'},
              {borderColor: '#777777'},
            ]}>
            <Text style={[styles.buttonText,{color:'#777777'}]}>Previous</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: '#EDEDED'},
                {borderColor: '#EDEDED'},
                {marginRight:0}
              ]}>
              <Text style={[styles.buttonText,{color:'#777777'}]}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: '#F36E21'},
                {borderColor: '#F36E21'},
              ]}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fonf: 'poppins',
    margin: '2%',
    borderRadius: 7,
    height: windowHeight - 200,
  },
  accodionBox: {
    height: 60,
    width: 370,
    borderRadius: 4,
    marginTop: '2.5%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    borderTopColor: '#F36E21',
    borderTopWidth: 4,
    borderBottom: 1,
    borderBottomColor: '#E8E5E5',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingLeft: '3%',
    paddingRight: '3%',
    borderWidth: 1,
    borderLeftColor: '#E8E5E5',
    borderRightColor: '#e5e8e8',
  },
  accordionText: {
    fontWeight: '600',
    font: 'poppins',
    color: '#333333',
    textAlign: 'center',
  },
  accordionContent: {
    borderColor: '#E8E5E5',
    borderWidth: 1,
    width: 370,
    marginBottom: '2.5%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    padding: '2%',
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
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  phoneContainer: {
    display: 'flex',
    justifyContent: 'space-between',
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
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
   bottom:0,
    marginBottom: '2%',
    width:'100%',
    justifyContent:'space-between'
  },
  button: {
    height: 50,
    width: 80,
    borderRadius: 4,
    alignItems: 'center',
    paddingTop: 14,
    margin: 10,
    borderWidth: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
});
export default LocationDetails;
