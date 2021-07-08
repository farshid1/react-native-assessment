import React, {FC, memo} from 'react';
import {
  EmailInput,
  FlexStyles,
  PasswordInput,
  SmallText,
  SocialButton,
  Spacer,
  TextStyles,
  UnderlineText,
  RoundedButton,
} from '@app/core-ui';
import {Colors, Images} from '@app/themes';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {LoginFormProps} from './type';

const {width: viewportWidth} = Dimensions.get('window');

export const LoginForm: FC<LoginFormProps> = memo(
  ({
    email,
    onEmailChangeText,
    password,
    onPasswordChangeText,
    animatedPaddingValue,
    onAppleSignUp,
    onFacebookSignUp,
    onTermsOfUsePress,
    onNextPress,
    onCancelPress,
  }) => {
    const nextButtonDisabled = !email || !password;

    return (
      <SafeAreaView style={FlexStyles.flexContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={[
              FlexStyles.alignItemsCenter,
              FlexStyles.justifyContentCenter,
              styles.innerContainer,
            ]}>
            <View
              style={[
                FlexStyles.justifyContentSpaceBetween,
                styles.inputContainer,
              ]}>
              <EmailInput
                accessibilityLabel="Email input"
                accessible
                containerStyle={styles.inputWidth}
                onChangeText={onEmailChangeText}
                value={email}
              />
              <PasswordInput
                accessibilityLabel="Password input"
                accessible
                containerStyle={styles.inputWidth}
                onChangeText={onPasswordChangeText}
                value={password}
              />
            </View>

            <View style={[FlexStyles.alignItemsCenter, styles.btnContainer]}>
              <SocialButton
                accessibilityLabel="Sign up with Apple"
                leftIcon={Images.appleLogo}
                onPress={onAppleSignUp}
                title="Sign up with Apple"
              />
              <Spacer />
              <SocialButton
                accessibilityLabel="Sign up with Facebook"
                leftIcon={Images.facebookLogo}
                onPress={onFacebookSignUp}
                title="Sign up with Facebook"
              />
            </View>

            <SmallText
              accessibilityLabel="Disclaimer"
              accessible
              style={[
                TextStyles.muted,
                TextStyles.textAlignCenter,
                styles.termsOfUse,
              ]}>
              By creating an account, you are indicating that you agree to the{' '}
              <SmallText
                accessibilityLabel="Terms of Use"
                accessible
                onPress={onTermsOfUsePress}
                style={[TextStyles.underline, TextStyles.muted]}>
                Terms of Use
              </SmallText>{' '}
              and that you are over the age of 13.
            </SmallText>
          </View>
        </ScrollView>
        <Animated.View
          style={[
            FlexStyles.justifyContentSpaceBetween,
            FlexStyles.alignItemsCenter,
            styles.footerContainer,
            {
              paddingBottom: animatedPaddingValue,
            },
          ]}>
          <RoundedButton
            accessibilityLabel="Next"
            disabled={nextButtonDisabled}
            onPress={onNextPress}
            style={styles.nextBtn}
            title="Next"
          />

          <UnderlineText
            accessibilityLabel="Cancel"
            accessible
            onPress={onCancelPress}
            style={[TextStyles.muted, TextStyles.textAlignCenter]}>
            Cancel
          </UnderlineText>
        </Animated.View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  btnContainer: {marginBottom: verticalScale(40), marginTop: verticalScale(50)},
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: verticalScale(40),
    height: verticalScale(80),
    paddingVertical: scale(6),
    position: 'absolute',
    width: viewportWidth,
  },
  innerContainer: {marginTop: verticalScale(130)},
  inputContainer: {
    height: scale(85),
  },
  inputWidth: {width: viewportWidth * 0.85},
  nextBtn: {
    borderRadius: scale(30),
    elevation: 20,
    height: scale(50),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    width: viewportWidth * 0.6,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  termsOfUse: {
    width: viewportWidth * 0.85,
  },
});
