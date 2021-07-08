import React from 'react';
import {render, RenderAPI} from 'react-native-testing-library';
import {LoginScreen} from './LoginScreen';

describe('<LoginScreen />', () => {
  let rendered: RenderAPI;

  beforeEach(() => {
    rendered = render(<LoginScreen />);
  });

  it('should match snapshot', () => {
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
