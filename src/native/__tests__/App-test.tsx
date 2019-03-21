import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

// TODO: The following line fails intermittently. Related to the following error. Should be safe to ignore warning.
// Animated: `useNativeDriver` is not supported because the native animated module is missing.
// Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`.
// More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('renders the loading screen', async () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
    app.unmount();
  });

  it('renders the root without loading screen', async () => {
    const app = renderer.create(<App skipLoadingScreen />);
    expect(app.toJSON()).toMatchSnapshot();
    app.unmount();
  });
});
