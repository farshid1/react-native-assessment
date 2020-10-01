/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  Keyboard,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

const NEXT_BUTTON_CONTAINER_HEIGHT = 80;
const NEXT_BUTTON_HEIGHT = 60;
const App = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const windowWidth = useWindowDimensions().width;
  const {windowHeight, scrollRef, nextButtonBottomPosition, keyboardShown, keyboardHeight} = useKeyboardState();
  
  const filled = email !== '' && password !== '';
  const emptySpaceStyle = {
    height: windowHeight - 550
  };
  const cancelButtonStyle = {
    ...styles.cancelButton,
    marginTop: keyboardShown ? 20: 110,
  };
  const keyboardSpacerStyle = {
    height: Platform.OS === "android" ? (keyboardShown ? NEXT_BUTTON_CONTAINER_HEIGHT : 0) :
     (keyboardHeight + (keyboardShown ? NEXT_BUTTON_CONTAINER_HEIGHT : 0))
  };
  const nextButtonContainerStyle = {
    ...styles.nextButtonContainer, 
    width: windowWidth,
    top: nextButtonBottomPosition,
  };
  const nextButtonStyle = {
    ...styles.nextButton,
    backgroundColor: filled ? 'orange': 'gray',
  };
  return (
    <>
      <ScrollView
        scrollEnabled={keyboardShown}
        ref={scrollRef}
        style={styles.scrollView}>
        <View style={emptySpaceStyle}/>
        <TextInput
          style={styles.emailInput}
          onChangeText={onChangeEmail}
          placeholder="Email"
          value={email}/>
        <TextInput
          style={styles.passwordInput}
          onChangeText={onChangePassword}
          placeholder="Password"
          value={password}/>
        <TouchableOpacity
          style={styles.signupButton}>
          <View style={styles.logoArea}>
            <Image
              style={styles.appleLogo}
              source={require(`./assets/apple.png`)}/>
          </View>
          <View style={styles.signupButtonTitleContainer}>
            <Text style={styles.signupButtonTitle}>Sign up with Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}>
          <View style={styles.logoArea}>
            <Image
              style={styles.facebookLogo}
              source={require(`./assets/facebook.png`)}/>
          </View>
          <View style={styles.signupButtonTitleContainer}>
            <Text style={styles.signupButtonTitle}>Sign up with Facebook</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.agreementText}>
          By creating an account, you are indicating that you agree to 
          the <Text style={styles.termsOfUseLink}>Terms of Use</Text> and
          that you are over the age of 13.
        </Text>
        <TouchableOpacity 
          style={cancelButtonStyle}>
          <Text style={styles.cancelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
        <View style={keyboardSpacerStyle}/>
      </ScrollView>
      <View 
        style={nextButtonContainerStyle}>
        <TouchableOpacity
          style={nextButtonStyle}
          disabled={!filled}>
          <Text style={styles.nextButtonTitle}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

function useKeyboardState() {
  const windowHeight = useWindowDimensions().height;
  const [nextButtonBottomPosition, setBottom] = useState(windowHeight - 190);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => {
    Keyboard.addListener("keyboardWillChangeFrame", _keyboardWillChangeFrame);
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener(Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide", _keyboardHide);
    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardWillChangeFrame", _keyboardWillChangeFrame);
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener(Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide", _keyboardHide);
    };
  }, []);

  const _keyboardWillChangeFrame = (e) => {
    setBottom(windowHeight - e.endCoordinates.height - NEXT_BUTTON_CONTAINER_HEIGHT);
    setKeyboardHeight(e.endCoordinates.height);
  };

  const _keyboardDidShow = (e) => {
    setBottom(windowHeight - e.endCoordinates.height - NEXT_BUTTON_CONTAINER_HEIGHT - (Platform.OS === "android" ? 20 : 0));
    setKeyboardHeight(e.endCoordinates.height);
    setKeyboardShown(true);
  };
  const _keyboardHide = () => {
    setKeyboardShown(false);
    setBottom(windowHeight - 190);
    setKeyboardHeight(0);
    scrollRef.current.scrollTo({y: 0});
  };

  return {windowHeight, scrollRef, nextButtonBottomPosition, keyboardShown, keyboardHeight};
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  nextButtonContainer: {
    position: 'absolute',
    height: NEXT_BUTTON_CONTAINER_HEIGHT,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    width: 300,
    height: NEXT_BUTTON_HEIGHT,
    borderRadius: NEXT_BUTTON_HEIGHT / 2,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0, height: 0,
    },
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  nextButtonTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  emailInput: {
    height: 40,
    margin: 10,
    marginHorizontal: 30,
    paddingBottom: 15,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  passwordInput: {
    height: 40,
    margin: 10,
    marginHorizontal: 30,
    marginBottom: 30,
    paddingBottom: 15,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  appleLogo: {
    width: 20,
    height: 24,
  },
  facebookLogo: {
    width: 27,
    height: 27,
  },
  logoArea: {
    width: 40,
    alignItems: "center"
  },
  signupButtonTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  signupButton: {
    height: 46,
    width: 210,
    marginTop: 10,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    alignSelf: "center",
  },
  signupButtonTitle: {
  },
  agreementText: {
    width: 300,
    fontSize: 10,
    textAlign: "center",
    alignSelf: "center",
    color: 'gray',
    marginTop: 70,
    height: 30,
  },
  termsOfUseLink: {
    textDecorationLine: "underline",
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonTitle: {
    textDecorationLine: 'underline',
    color: 'gray',
  }
});

export default App;
