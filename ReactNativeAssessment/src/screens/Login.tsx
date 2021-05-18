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
  TouchableOpacity,
} from 'react-native';
import { AppTextInput } from '../components/AppTextInput';
import AppleSvg from '../assets/icons/apple.svg';
import FacebookSvg from '../assets/icons/facebook.svg';

import SignUpButton from '../components/SignupButton';
import { TermsText } from '../components/TermsText';
import { styles } from '../utils/styles';
import { useFormik } from 'formik';
import { loginSchema } from '../utils/validators';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        keyboardVerticalOffset={-64}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: '#fcfcfc' }}
          contentContainerStyle={{
            display: 'flex',

            padding: 36,
            paddingBottom: 64,
          }}>
          <View
            style={{
              width: 180,
              height: 120,
              marginBottom: 100,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}
          />

          {/* text inputs */}
          <View style={{ marginBottom: 37 }}>
            <AppTextInput
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
          pointerEvents="box-none"
          style={{
            marginBottom: 32,
          }}>
          <KeyboardAvoidingView
            behavior="position"
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 22,
            }}>
            <TouchableOpacity
              disabled={!(formik.isValid && formik.dirty)}
              style={[
                {
                  backgroundColor: !(formik.isValid && formik.dirty)
                    ? '#d5d5d5'
                    : '#0095ff',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 100,
                  width: 280,
                  height: 67,
                },
                styles.shadow,
              ]}>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                Next
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <Text
            style={{
              marginTop: 30,
              color: 'gray',
              textDecorationLine: 'underline',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
