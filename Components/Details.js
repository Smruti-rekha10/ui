import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BasicDetails from './Details/BasicDetail';
import FertilierLicense from './Details/FertilierLicense';
import Cpc from './Details/Cpc';
import Address from './Details/Address';
import Link from './Details/Links';
import Bank from './Details/Bank';

const Details = () => {
  const [basic, setBasic] = useState(false);
  const [fetrilizer, setFertilizer] = useState(false);
  const [cpc, setCpc] = useState(false);
  const [address, setAddress] = useState(false);
  const [bank, setBank] = useState(false);
  const [link, setLink] = useState(false);
  // const [activeTab, setActiveTab] = useState('');

  // const handleAccordion = val => {
  //   setActiveTab(val);
  // };

  return (
    <View>
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>Basic Details</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(!basic);
              setFertilizer(false);
              setCpc(false);
              setAddress(false);
              setLink(false);
              setBank(false);
            }}>
            <View style={styles.logo}>
              {basic ? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {basic ? <BasicDetails /> : ''}
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>Fertilizer License Information</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(false);
              setFertilizer(!fetrilizer);
              setCpc(false);
              setAddress(false);
              setLink(false);
              setBank(false);
            }}>
            <View style={styles.logo}>
              {fetrilizer? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {fetrilizer ? <FertilierLicense /> : ''}
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>CPC License Information</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(false);
              setFertilizer(false);
              setCpc(!cpc);
              setAddress(false);
              setLink(false);
              setBank(false);
            }}>
            <View style={styles.logo}>
              {cpc ? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {cpc ? <Cpc /> : ''}
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>Address Informations</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(false);
              setFertilizer(false);
              setCpc(false);
              setAddress(!address);
              setLink(false);
              setBank(false);
            }}>
            <View style={styles.logo}>
              {address ? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {address? <Address /> : ''}
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>Bank Details</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(false);
              setFertilizer(false);
              setCpc(false);
              setAddress(false);
              setLink(false);
              setBank(!bank);
            }}>
            <View style={styles.logo}>
              {bank? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {bank? <Bank /> : ''}
      <View style={[styles.accodionBox]}>
        <Text style={styles.accordionText}>Custom Links</Text>
        <View style={styles.accordionLogoContainer}>
          <Text style={styles.listValue}>40 Items</Text>
          <TouchableOpacity
            onPress={() => {
              setBasic(false);
              setFertilizer(false);
              setCpc(false);
              setAddress(false);
              setLink(!link);
              setBank(false);
            }}>
            <View style={styles.logo}>
              {link ? (
                <Text style={styles.logoText}>^</Text>
              ) : (
                <Text style={[styles.logoText, styles.transformLogo]}>^</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {link? <Link /> : ''}
    </View>
  );
};
const styles = StyleSheet.create({
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
  accordionLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    textAlign: 'center',
  },
  listValue: {
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
    color: '#0A0909',
  },
  logo: {
    backgroundColor: '#024122',
    height: 15,
    width: 15,
    borderRadius: 15,
  },
  logoText: {
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
  },
  transformLogo: {
    transform: [{rotate: '180deg'}],
  },
});
export default Details;
