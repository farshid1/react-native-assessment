import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Dimensions,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//margin calcuated
const height = Dimensions.get('window').height + 16;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const App = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nextEnable, setNextEnable] = useState<boolean>(false);
  useEffect(() => {
    if (password.length > 5 && emailRegex.test(email)) {
      setNextEnable(true);
    } else {
      setNextEnable(false);
    }
  }, [email, password]);
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View style={styles.parent}>
          <View style={styles.container}>
            <View style={styles.square}></View>
            <TextInput
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType={'email-address'}
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              value={password}
              onChangeText={(e) => {
                setPassword(e);
              }}
              style={styles.textInput}
            />
            <View style={{marginTop: 16}}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.loginWith}
                onPress={(e) => {}}>
                <FontAwesome5
                  style={{marginRight: 16}}
                  color="#343434"
                  name={'apple'}
                  size={25}
                  solid
                />
                <Text style={styles.loginWithText}>Sign up with Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.loginWith}
                onPress={(e) => {}}>
                <FontAwesome5
                  style={{marginRight: 16}}
                  color="#1977f1"
                  name={'facebook'}
                  size={25}
                  solid
                />
                <Text style={styles.loginWithText}>Sign up with Apple</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 64}}>
              <Text
                style={{color: '#a3a3a3', textAlign: 'justify', fontSize: 12}}>
                By creating an account, you are indicating that you agree to the
                <Text
                  style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
                  {' '}
                  Terms of Use{' '}
                </Text>
                and that you are over the age of 13.
              </Text>
            </View>
            <KeyboardAvoidingView
              keyboardVerticalOffset={45}
              behavior={'position'}>
              <TouchableOpacity
                activeOpacity={0.6}
                disabled={!nextEnable}
                style={
                  nextEnable ? styles.nextEnabled : styles.nextDisabled
                }
                onPress={(e) => {}}>
                <Text style={styles.submitText}>Next</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.cancel}
              onPress={(e) => {}}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fafafa',
  },
  square: {
    height: height / 6,
    backgroundColor: '#ffffff',
    margin: 50,
  },
  container: {
    display: 'flex',
    backgroundColor: '#fcfcfc',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    height: height,
    borderRadius: 3,
    padding: 30,
    margin: 16,
  },
  textInput: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  loginWith: {
    borderColor: '#818181',
    borderWidth: 2,
    padding: 12,
    borderRadius: 32,
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loginWithText: {textAlign: 'center', fontSize: 16, color: '#616161'},
  nextDisabled: {
    padding: 20,
    borderRadius: 32,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    backgroundColor: '#d5d5d5',
  },
  nextEnabled: {
    padding: 20,
    borderRadius: 32,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 8,
    backgroundColor: 'orange',
  },
  submitText: {textAlign: 'center', fontSize: 18, color: 'white'},
  cancel: {
    padding: 20,
    marginTop: 16,
  },
  cancelText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#9c9c9c',
    textDecorationLine: 'underline',
  },
});

export default App;
