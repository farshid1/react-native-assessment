import React, {useState, useRef} from 'react';
import {Text, View, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Spinner from 'react-native-loading-spinner-overlay';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Link from 'components/Link';
import Social from '../Social';
import Terms from '../Terms';
import style from './style';

export default function Form() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = async (values, actions) => {
    try {
      Alert.alert('Submit');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const initialValues = {
    email: null,
    password: null,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().nullable().required('This field is required.'),
    password: Yup.string().nullable().required('This field is required.'),
  });

  return (
    <>
      <Spinner visible={loading} animation="fade" />
      <Formik
        innerRef={formRef}
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          resetForm,
          setFieldTouched,
        }) => (
          <View style={style.wrap}>
            <View style={style.form}>
              <View style={style.inputBlock}>
                <TextInput
                  value={values.email}
                  placeholder="Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="Next"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  onSubmitEditing={() => {
                    if (passwordRef?.current) {
                      passwordRef?.current?.getNativeRef()?.focus();
                    }
                  }}
                />
                <View style={style.error}>
                  {touched.email && errors.email && (
                    <Text style={style.errorText}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={style.inputBlock}>
                <TextInput
                  ref={passwordRef}
                  value={values.password}
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry
                  autoCapitalize="none"
                  returnKeyType="done"
                  returnKeyLabel="Done"
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  onSubmitEditing={handleSubmit}
                />
                <View style={style.error}>
                  {touched.password && errors.password && (
                    <Text style={style.errorText}>{errors.password}</Text>
                  )}
                </View>
              </View>
            </View>
            <Social />
            <Terms />
            <Button
              text="Next"
              disabled={!validationSchema.isValidSync(values)}
              onPress={handleSubmit}
              customStyle={style.button}
            />
            <Link
              text="Cancel"
              onPress={() => formRef?.current?.resetForm(initialValues)}
            />
          </View>
        )}
      </Formik>
    </>
  );
}
