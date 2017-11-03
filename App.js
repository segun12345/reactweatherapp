import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import MasterScreen from './components/MasterScreen';
import DetailScreen from './components/DetailScreen';

export const SimpleApp = StackNavigator({
  Master: { screen: MasterScreen },
  Detail: { screen: DetailScreen },
});

export default class App extends Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}
