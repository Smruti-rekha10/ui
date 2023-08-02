import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

const BasicDetails = () => {
  return (
    <ScrollView style={styles.accordionContent}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Name</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>PAN Number</Text>
            <Text style={styles.textDisplay}>TYUIO1234F</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Credit Type</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Credit limit remark</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Email
</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Dealer remarks</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Current Record Reviewer</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Approval Rejection Date</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Legal Status</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Customer Name in Bank</Text>
            <Text style={styles.textDisplay}>Kim Jane</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Unloading Point</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Nielson ID
</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>PAN Number</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Application ID</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Company</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Business Unit</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Secondary Contact Name</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Customer Classification</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Submitted for Approval</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Fax</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
        </View>
        {/* Other Panel */}
        <View style={{marginRight:'2%'}}>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Firm Name</Text>
            <Text style={styles.textDisplay}>Fertilizers PVT Ltd</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Type of customer</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Credit limit</Text>
            <Text style={styles.textDisplay}>Fertilizers PVT Ltd</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Duplicate PAN/GST</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Mobile</Text>
            <Text style={styles.textDisplay}>Fertilizers PVT Ltd</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Check ZM</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Check Admin</Text>
            <Text style={styles.textDisplay}>Fertilizers PVT Ltd</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Secondary Contact Mobile</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Check MO user</Text>
            <Text style={styles.textDisplay}>Fertilizers PVT Ltd</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Submitted for Approval</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Primary Business Unit...</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Default Unloading Point</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Duplicate Record Id</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Physically Received the Docu..</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Lead Status</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>GST Number</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Primary Contact Name</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Primary Contact Mobile</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Legal Status old</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subHeader}>Lead Review</Text>
            <Text style={styles.textDisplay}>customer type</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    color: '#024122',
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 16,
  },
  displayText: {
    width: '95%',
    color: '#333333',
    fontSize: 12,
    borderWidth: 0.5,
    borderColor: '#333333',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    height: 40,
    marginTop: 0,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  textDisplay: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 16,
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
  container: {
    marginTop: '2%',
    marginBottom:'3%',
    marginLeft:'2%'
  },
});
export default BasicDetails;
