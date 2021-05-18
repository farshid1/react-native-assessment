/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { AppTextInput } from '../components/AppTextInput';
import AppleSvg from '../assets/icons/apple.svg';
import FacebookSvg from '../assets/icons/facebook.svg';

import SignUpButton from '../components/SignupButton';
import { TermsText } from '../components/TermsText';
import { colors } from '../utils/styles';
import { useFormik } from 'formik';
import { loginSchema } from '../utils/validators';
import SignInButton from '../components/SignInButton';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  contentContainer: {
    display: 'flex',
    padding: 36,
    paddingBottom: 64,
  },
  innerContainer: {
    width: 180,
    height: 120,
    marginBottom: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  cancelText: {
    marginTop: 30,
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 18,
  },
  nextButtonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 22,
  },
});

export function LoginScreen() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(val) {
      console.log(val);
    },
    validationSchema: loginSchema,
  });
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        keyboardVerticalOffset={-64}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.innerContainer} />

          {/* text inputs */}
          <View style={{ marginBottom: 37 }}>
            <AppTextInput
              autoCorrect={false}
              autoCompleteType={'off'}
              placeholder="Email"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
            />
            <AppTextInput
              placeholder="Password"
              isSecureTextEntry
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
            />
          </View>

          {/* signup button */}
          <View style={{ alignItems: 'center' }}>
            <SignUpButton
              img={
                <AppleSvg
                  fill="black"
                  width={20}
                  height={20}
                  style={{ marginRight: 12 }}
                />
              }
              text="Sign up with Apple"
            />
            <SignUpButton
              img={<FacebookSvg width={20} height={20} />}
              text="Sign up with Facebook"
            />
          </View>

          <TermsText />
        </ScrollView>
        <View
          style={{
            marginBottom: 32,
          }}>
          <View style={styles.nextButtonContainer}>
            <SignInButton
              text="Next"
              disabled={!(formik.isValid && formik.dirty)}
            />
          </View>
          <Text style={styles.cancelText}>Cancel</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
