import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Icon, Input, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  cancelContainer: { alignItems: 'center', flex: 0 },
  cancelText: { fontSize: 20 },
  facebookIcon: { marginTop: 8 },
  facebookIconContainer: {
    backgroundColor: '#165ef8',
    borderRadius: 13,
    height: 25,
    justifyContent: 'flex-end',
    marginRight: 8,
    width: 25,
  },
  footer: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  formContainer: {
    alignItems: 'stretch',
    flex: 2,
    justifyContent: 'flex-end',
  },
  input: { marginBottom: 8, marginHorizontal: 8 },
  inputContainer: {
    marginHorizontal: 16,
  },
  keyboardAvoidingView: { flex: 1 },
  nextButton: {
    borderRadius: 30,
    height: 60,
    marginHorizontal: 54,
    marginTop: 16,
  },
  nextButtonDisabled: { backgroundColor: '#cbcbcb' },
  nextButtonDisabledTitle: { color: 'white' },
  nextButtonTitle: { fontWeight: 'bold' },
  safeArea: { flex: 1 },
  scroll: { flex: 1 },
  socialButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    height: 60,
    marginHorizontal: 80,
    marginVertical: 8,
  },
  socialButtonTitle: { color: 'black' },
  termsOfUseText: {
    alignSelf: 'center',
    color: '#8c8c8c',
    textAlign: 'center',
  },
  underlined: {
    color: '#8c8c8c',
    textDecorationLine: 'underline',
  },
});

type LoginFields = {
  email: string;
  password: string;
};

const loginSchema = yup.object().shape<LoginFields>({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum password length is 6')
    .max(16, 'Maximum password length is 16')
    .required('Password is required'),
});

const FacebookIcon = () => (
  <View style={styles.facebookIconContainer}>
    <Icon name="facebook" type="font-awesome" color="white" size={20} style={styles.facebookIcon} />
  </View>
);

const LoginPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Formik<LoginFields>
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <KeyboardAvoidingView
              style={styles.keyboardAvoidingView}
              enabled
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.formContainer}>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                  />
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    secureTextEntry
                  />
                  <Button
                    title="Sign up with Apple"
                    icon={{ type: 'material-community', name: 'apple' }}
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonTitle}
                  />
                  <Button
                    title="Sign up with Facebook"
                    icon={<FacebookIcon />}
                    buttonStyle={styles.socialButton}
                    titleStyle={styles.socialButtonTitle}
                  />
                </View>
                <View style={styles.footer}>
                  <Text style={styles.termsOfUseText}>
                    By creating an account, you are indicating that you agree to the{' '}
                    <Text style={styles.underlined}>Terms of Use</Text> and that you are over the age of 13.
                  </Text>
                  <Button
                    title="Next"
                    titleStyle={styles.nextButtonTitle}
                    disabled={!isValid || !values.email || !values.password}
                    disabledStyle={styles.nextButtonDisabled}
                    disabledTitleStyle={styles.nextButtonDisabledTitle}
                    buttonStyle={styles.nextButton}
                    onPress={() => handleSubmit()}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
            <View style={styles.cancelContainer}>
              <TouchableOpacity>
                <Text style={[styles.underlined, styles.cancelText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginPage;
