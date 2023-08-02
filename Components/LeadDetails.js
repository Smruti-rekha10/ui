import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Arrow from '../Asset/LeadDetailsArrow.png';
import Details from './Details';
import LeadRelated from './LeadRelated';
import LeadChatter from './LeadChatter';
import LeadDocuments from './LeadDocuments';

const windowHeight = Dimensions.get('window').height;

const LeadDetails = () => {
  const [active, setActive] = useState('details');

  const handleActive = val => {
    setActive(val);
  };
  return (
    <View>
      <View style={styles.header}>
        <Image source={Arrow} style={{marginTop: '6%'}} />
        <View>
          <Text style={styles.subHeader}>Name</Text>
          <Text style={styles.detailsText}>Prakash Verma</Text>
          <Text style={styles.subHeader}>Email</Text>
          <Text style={styles.detailsText}>prakash.verma@kpmg.com</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Company</Text>
          <Text style={styles.detailsText}>Fertilizers PVT Ltd</Text>
          <Text style={styles.subHeader}>Lead Status</Text>
          <Text style={styles.detailsText}>MO Review</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Mobile</Text>
          <Text style={styles.detailsText}>9087654321</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.accordionContainer}>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => handleActive('details')}>
              <Text
                style={
                  active === 'details'
                    ? [
                        styles.optionText,
                        {fontWeight: '600'},
                        {textDecorationLine: 'underline'},
                      ]
                    : styles.optionText
                }>
                Details
              </Text>
              <View style={styles.verticalRuler}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => handleActive('related')}>
              <Text
                style={
                  active === 'related'
                    ? [
                        styles.optionText,
                        {fontWeight: '600'},
                        {textDecorationLine: 'underline'},
                      ]
                    : styles.optionText
                }>
                Related
              </Text>
              <View style={styles.verticalRuler}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => handleActive('chatter')}>
              <Text
                style={
                  active === 'chatter'
                    ? [
                        styles.optionText,
                        {fontWeight: '600'},
                        {textDecorationLine: 'underline'},
                      ]
                    : styles.optionText
                }>
                Chatter
              </Text>
              <View style={styles.verticalRuler}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => handleActive('document')}>
              <Text
                style={
                  active === 'document'
                    ? [
                        styles.optionText,
                        {fontWeight: '600'},
                        {textDecorationLine: 'underline'},
                      ]
                    : styles.optionText
                }>
                Documents
              </Text>
            </TouchableOpacity>
          </View>
          {active === 'details' ? <Details /> : <Text></Text>}
          {active === 'related' ? <LeadRelated /> : <Text></Text>}
          {active === 'chatter' ? <LeadChatter /> : <Text></Text>}
          {active === 'document' ? <LeadDocuments /> : <Text></Text>}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2%',
  },
  subHeader: {
    color: '#024122',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 19,
  },
  detailsText: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
    color: '#3D3D3D',
  },
  body: {
    backgroundColor: '#E7E7E7',
  },
  accordionContainer: {
    backgroundColor: '#fff',
    margin: '2%',
    borderRadius: 6,
    height: windowHeight,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '1%',
  },
  verticalRuler: {
    height: 17,
    width: 2,
    backgroundColor: '#D9D9D9',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20%',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#0a0909',
    lineHeight: 21,
    textAlign: 'center',
  },
});
export default LeadDetails;
