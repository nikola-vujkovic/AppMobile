import React, {useState} from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import Header from '../components/Header';
import Constants from '../constants/Constants';
import {Picker} from '@react-native-picker/picker';
import {TravellInfoData} from '../constants/TravellInfoData';
import Hyperlink from 'react-native-hyperlink';
import AppText from '../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

const TravelInfoScreen = () => {
  const list = TravellInfoData;
  const [number, setNumber] = useState({
    label: 'Bosna i Hercegovina',
    value: {
      milicija: 122,
      vatrogasci: 123,
      hitna: 124,
      ams: 1288,
    },
  });
  const [link, setLink] = useState({
    label: 'Bosna i Hercegovina',
    putovanje:
      'http://www.mvp.gov.ba/konzularne_informacije/sta_konzul_moze_uciniti_za_vas/?id=17675',
  });

  return (
    <View style={{flex: 1, backgroundColor: Constants.background}}>
      <Header />
      <LinearGradient
        colors={[
          Constants.primaryLight,
          Constants.primary,
          Constants.primaryDark,
        ]}
        style={styles.lowerView}>
        <View style={styles.numbersView}>
          <AppText style={styles.titleText}>POMOĆ NA PUTU ZA...</AppText>

          <DropDownPicker
            items={list}
            containerStyle={styles.dropContainer}
            style={styles.dropDownPickerViewStyle}
            placeholder={number.label}
            dropDownStyle={styles.dropDownStyle}
            placeholderStyle={styles.labelStyle}
            labelStyle={styles.labelStyle}
            onChangeItem={(item) => {
              setNumber(item);
            }}
          />

          <View style={styles.numberStyles}>
            <AppText>Policija:</AppText>
            <AppText color={Constants.red}>{number.value.milicija}</AppText>
          </View>
          <View style={styles.numberStyles}>
            <AppText>Vatrogasci:</AppText>
            <AppText color={Constants.red}>{number.value.vatrogasci}</AppText>
          </View>
          <View style={styles.numberStyles}>
            <AppText>Hitna pomoć:</AppText>
            <AppText color={Constants.red}>{number.value.hitna}</AppText>
          </View>
          <View style={styles.numberStyles}>
            <AppText>Pomoć na putu:</AppText>
            <AppText color={Constants.red}>{number.value.ams}</AppText>
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={[
          Constants.primaryLight,
          Constants.primary,
          Constants.primaryDark,
        ]}
        style={styles.lowerView}>
        <View style={styles.numbersView}>
          <AppText style={styles.titleText}>ŽELITE DA PUTUJETE?</AppText>
          <AppText style={styles.textStyle}>
            NAJNOVIJE INFORMACIJE VEZANE{'\n'}ZA PUTOVANJE U PANDEMIJI
          </AppText>
          <DropDownPicker
            items={list}
            containerStyle={styles.dropContainer}
            style={styles.dropDownPickerViewStyle}
            placeholder={link.label}
            dropDownStyle={styles.dropDownStyle}
            placeholderStyle={styles.labelStyle}
            labelStyle={styles.labelStyle}
            onChangeItem={(item) => {
              setLink(item);
            }}
          />
          <View>
            <Hyperlink
              linkDefault={true}
              linkStyle={{color: Constants.black, fontSize: 16}}
              linkText={(url) =>
                url === link.putovanje ? 'Više informacija na ovaj link' : url
              }>
              <AppText
                style={{
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                  marginVertical: 20,
                  justifyContent: 'flex-end',
                  alignSelf: 'center',
                }}>
                {link.putovanje}
              </AppText>
            </Hyperlink>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerView: {
    //flex: 1,
    width: Constants.screenWidth * 0.9,
    height: Constants.screenHeight * 0.35,
    borderRadius: 15,
    alignSelf: 'center',
    margin: 15,
    padding: 10,
    justifyContent: 'center',
  },
  numbersView: {
    flex: 1,
    width: Constants.screenWidth * 0.8,
    height: Constants.screenHeight * 0.3,
    alignSelf: 'center',
    backgroundColor: Constants.background,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignContent: 'center',
  },
  titleText: {
    fontSize: 20,
    color: Constants.black,
    alignSelf: 'center',
    margin: 15,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 16,
    color: Constants.black,
    textAlign: 'center',
  },
  dropDownPickerViewStyle: {
    //flex: 1,
    width: Constants.screenWidth * 0.7,
    height: 40,
    marginVertical: 5,
    alignSelf: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    backgroundColor: Constants.background,
    borderWidth: 1,
    borderColor: Constants.primary,
  },
  dropContainer: {
    width: Constants.screenWidth * 0.7,
    height: 45,
    alignSelf: 'center',
  },
  dropDownStyle: {
    backgroundColor: Constants.background, //+ '80',
    alignContent: 'center',
    fontFamily: 'Ubuntu-Regular',
  },
  labelStyle: {
    fontFamily: 'Ubuntu-Regular',
    color: Constants.red,
  },
  numberStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default TravelInfoScreen;
