# React Native/Web Example

## Development Prerequisites

Development for the web and native React applications is assumed do be done on `Mac OS X` and has been tested with the versions specified. Millage may very with newer versions.

### Homebrew 2.0.2

See the [Homebrew homepage](https://brew.sh/) for installation instructions.

#### Yarn 1.13.0

Install Homebrew first, then run `brew install yarn`.

### Android Studio 3.3

Download and install Android Studio from the [Android Studio download page](https://developer.android.com/studio/).

#### Create A Virtual Device

1. Create a blank project.
1. Open `AVD Manager` option from the `Tools` menu.
1. Create a virtual device.
1. [Turn on Developer settings in emulator](https://developer.android.com/studio/debug/dev-options).

### Xcode 10.1

This step requires an [Apple Developer account](https://developer.apple.com/).

Download and install [XCode](https://developer.apple.com/xcode/).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Run this command to install NPM package dependencies during first run, or whenever `package.json` chanages.

### `yarn build`

Runs all build scripts that match `build:*`.

### `yarn lint`

Lints all js, jsx, ts, and tsx files in the `src` directory.

This command is also run by a precommit hook to ensure code quality.

### `yarn start`

Runs all start scripts that match `start:*`.

### `yarn test`

Runs all start scripts that match `test:*` with the addition of the `--no-watch` flag.

### Web

#### `yarn build:web`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn start:web`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test:web`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Native

The following [`yarn run`](https://yarnpkg.com/lang/en/docs/cli/run/) scripts are wrappers to [Expo cli](https://docs.expo.io/versions/v32.0.0/workflow/expo-cli/).

#### `yarn build:ios`

This command requires additional iOS configuration. See the section about [Building Standalone Apps](https://docs.expo.io/versions/v32.0.0/distribution/building-standalone-apps/) in the Expo documentation.

#### `yarn build:android`

This command requires additional Android configuration. See the section about [Building Standalone Apps](https://docs.expo.io/versions/v32.0.0/distribution/building-standalone-apps/) in the Expo documentation.

#### `yarn start:native`

Starts and opens a local Expo web management application.

This command runs `expo start` which allows it to accept any options valid `expo start --help` option.

For example, you can open a native iOS application from the command line by running `yarn start:native --ios`;

#### `yarn test:native`

Launches the test runner in the interactive watch mode.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Expo (React Native), check out the [Expo documentation](https://docs.expo.io/versions/latest/).

## Dependencies

### `whatwg-fetch@2.0.4`

This specific version is an unnamed dependency of [`jest-expo@v32.0.0`](https://github.com/expo/expo/tree/sdk-32/packages/jest-expo). We can most likely drop this dependency when expo releases [SDK-33](https://github.com/expo/expo/milestone/22)
