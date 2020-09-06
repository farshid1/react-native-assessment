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
                accessible
                accessibilityLabel="Email input"
                containerStyle={styles.inputWidth}
                onChangeText={onEmailChangeText}
                value={email}
              />
              <PasswordInput
                accessible
                accessibilityLabel="Password input"
                containerStyle={styles.inputWidth}
                value={password}
                onChangeText={onPasswordChangeText}
              />
            </View>

            <View style={[FlexStyles.alignItemsCenter, styles.btnContainer]}>
              <SocialButton
                accessibilityLabel="Sign up with Apple"
                title="Sign up with Apple"
                leftIcon={Images.appleLogo}
                onPress={onAppleSignUp}
              />
              <Spacer />
              <SocialButton
                accessibilityLabel="Sign up with Facebook"
                title="Sign up with Facebook"
                leftIcon={Images.facebookLogo}
                onPress={onFacebookSignUp}
              />
            </View>

            <SmallText
              accessible
              accessibilityLabel="Disclaimer"
              style={[
                TextStyles.muted,
                TextStyles.textAlignCenter,
                styles.termsOfUse,
              ]}>
              By creating an account, you are indicating that you agree to the{' '}
              <SmallText
                accessible
                accessibilityLabel="Terms of Use"
                style={[TextStyles.underline, TextStyles.muted]}
                onPress={onTermsOfUsePress}>
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
            title="Next"
            style={styles.nextBtn}
            accessibilityLabel="Next"
            disabled={nextButtonDisabled}
            onPress={onNextPress}
          />

          <UnderlineText
            accessible
            accessibilityLabel="Cancel"
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
  btnContainer: {marginTop: verticalScale(50), marginBottom: verticalScale(40)},
  inputContainer: {
    height: scale(85),
  },
  innerContainer: {marginTop: verticalScale(130)},
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  termsOfUse: {
    width: viewportWidth * 0.85,
  },
  footerContainer: {
    position: 'absolute',
    bottom: verticalScale(40),
    height: verticalScale(80),
    backgroundColor: 'white',
    width: viewportWidth,
    paddingVertical: scale(6),
    alignItems: 'center',
  },
  inputWidth: {width: viewportWidth * 0.85},
  nextBtn: {
    height: scale(50),
    borderRadius: scale(30),
    width: viewportWidth * 0.6,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 20,
  },
});
