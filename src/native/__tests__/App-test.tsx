import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

// TODO: The following line fails intermittently.
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
