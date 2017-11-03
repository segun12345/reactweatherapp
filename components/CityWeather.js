import React, {Component} from 'react'
import {Platform} from 'react-native';
import { ListItem } from 'react-native-elements';

class CityWeather extends Component {
  render() {
    return (
      <ListItem
        title={this.props.name}
        subtitle={
          this.props.weather ? this.props.weather : 'TBD'
        }
        badge={{
          value: this.props.temp
            ? this.props.temp + ' °F'
            : '0 °F',
          badgeContainerStyle: {
            backgroundColor: 'lightblue',
          },
        }}
        avatar={{ uri: this.props.icon }}
        onPress={
          this.props.onPress ? this.props.onPress() : null
        }
        hideChevron={Platform.OS !== 'ios'}
      />
    );
  }
}

export default CityWeather;
