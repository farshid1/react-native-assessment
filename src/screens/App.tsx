import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';

import { TextButton } from '../components/TextButton';
import { NextButton } from '../components/NextButton';

import { validateInputs } from '../utils/validation';

import { AppleLoginButton } from '../components/AppleLoginButton';
import { FacebookLoginButton } from '../components/FacebookLoginButton';
import { TermsAndCondition } from '../components/TermsAndCondition';
import { RectanglePlaceholder } from '../components/RectanglePlaceholder';
import { Spacer } from '../components/common/Spacer';
import { colors } from '../constants/colors';

const App = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardHidden, setKeyboardHidden] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
    };
  }, []);

  const keyboardWillShow = () => {
    setKeyboardHidden(false);
  };

  const keyboardWillHide = () => {
    setKeyboardHidden(true);
  };

  const onNextPress = () => {
    Alert.alert('Login under construction');
  };
  const onCancelPress = () => {
    Alert.alert('Login canceled');
  };

  const inputsValid = validateInputs(login, password);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingContainer}>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} scrollEnabled>
            <RectanglePlaceholder />
            <Spacer distance={20} />
            <TextInput
              placeholder={'Email'}
              placeholderTextColor={colors.dustyGray}
              value={login}
              onChangeText={(text) => setLogin(text)}
              style={styles.textInput}
            />
            <Spacer distance={15} />
            <TextInput
              placeholder={'Password'}
              placeholderTextColor={colors.dustyGray}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              secureTextEntry
            />
            <Spacer distance={40} />
            <AppleLoginButton />
            <Spacer distance={20} />
            <FacebookLoginButton />
            <Spacer distance={40} />
            <TermsAndCondition />
          </ScrollView>
          <View style={styles.buttonsContainer}>
            <NextButton title={'Next'} onPress={onNextPress} disabled={!inputsValid} />
            <Spacer />
            {keyboardHidden && (
              <>
                <TextButton title={'Cancel'} onPress={onCancelPress} />
                <Spacer />
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.alabaster,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    height: 40,
    width: 260,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
});

export default App;
