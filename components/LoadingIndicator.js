import React, {Component} from 'react'
import {View, ActivityIndicator} from 'react-native'

class LoadingIndicator extends Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 10,
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }
}

export default LoadingIndicator;
