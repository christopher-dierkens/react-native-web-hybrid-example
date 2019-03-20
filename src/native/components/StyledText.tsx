import React from 'react';
import { Text, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface MonoTextProps {
  style?: ViewStyle | TextStyle | ImageStyle;
}

export class MonoText extends React.Component<MonoTextProps> {
  render(): JSX.Element {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: 'space-mono' }]}
      />
    );
  }
}
