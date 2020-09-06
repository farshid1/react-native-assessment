import React from 'react';
import {render, RenderAPI, fireEvent} from 'react-native-testing-library';
import {LoginFormProps} from './type';
import {Animated} from 'react-native';
import {LoginForm} from './LoginForm';

describe('<LoginForm />', () => {
  let rendered: RenderAPI;
  const props: LoginFormProps = {
    animatedPaddingValue: new Animated.Value(0),
    email: 'foo@bar.com',
    onAppleSignUp: jest.fn(),
    onCancelPress: jest.fn(),
    onEmailChangeText: jest.fn(),
    onFacebookSignUp: jest.fn(),
    onNextPress: jest.fn(),
    onPasswordChangeText: jest.fn(),
    onTermsOfUsePress: jest.fn(),
    password: 'secure',
  };

  beforeEach(() => {
    rendered = render(<LoginForm {...props} />);
  });

  it('should show email input', () => {
    const actual = rendered.getByA11yLabel('Email input');

    expect(actual).toBeDefined();
    fireEvent.changeText(actual, 'newUser@example.com');

    expect(props.onEmailChangeText).toHaveBeenCalledWith('newUser@example.com');
  });

  it('should show password input', () => {
    const actual = rendered.getByA11yLabel('Password input');

    expect(actual).toBeDefined();
    fireEvent.changeText(actual, 'secret123');

    expect(props.onPasswordChangeText).toHaveBeenCalledWith('secret123');
  });

  it('should Sign up with Apple button', () => {
    const actual = rendered.getByA11yLabel('Sign up with Apple');

    expect(actual).toBeDefined();
    fireEvent.press(actual);

    expect(props.onAppleSignUp).toHaveBeenCalled();
  });

  it('should Sign up with Facebook button', () => {
    const actual = rendered.getByA11yLabel('Sign up with Facebook');

    expect(actual).toBeDefined();
    fireEvent.press(actual);

    expect(props.onFacebookSignUp).toHaveBeenCalled();
  });

  it('should show disclaimer text', () => {
    const actual = rendered.getByA11yLabel('Disclaimer');

    expect(actual).toBeDefined();
  });

  it('should show terms of use', () => {
    const actual = rendered.getByA11yLabel('Terms of Use');

    expect(actual).toBeDefined();
    fireEvent.press(actual);
    expect(props.onTermsOfUsePress).toHaveBeenCalled();
  });

  it('should show next button', () => {
    const actual = rendered.getByA11yLabel('Next');

    expect(actual).toBeDefined();
    fireEvent.press(actual);
    expect(props.onNextPress).toBeCalled();
  });

  it('should show cancel button', () => {
    const actual = rendered.getByA11yLabel('Cancel');

    expect(actual).toBeDefined();
    fireEvent.press(actual);
    expect(props.onCancelPress).toBeCalled();
  });
});
