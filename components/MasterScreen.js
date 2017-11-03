import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import LoadingIndicator from './LoadingIndicator'
import CityWeather from './CityWeather'

class MasterScreen extends Component {
  static navigationOptions = {
    title: 'Weather',
  };

  constructor() {
    super();

    this.state = {
      cities: [
        // { name: 'London', id: 2643744 },
        // { name: 'Paris', id: 2968815 },
        // { name: 'Hong Kong', id: 1819729 },
        { name: 'San Jose', id: 5392171 },
        { name: 'New York', id: 5128581 },
        { name: 'Singapore', id: 1880252 },
        { name: 'Beijing', id: 1816670 },
        { name: 'Sydney', id: 6619279 },
        { name: 'São Paulo', id: 3448439 },
        { name: 'San Juan', id: 4568138 },
        { name: 'Mumbai', id: 1275339 },
        { name: 'Reykjavík', id: 6692263 },
      ],
      isLoading: true,
    };
  }

  componentDidMount() {
    const ids = this.state.cities
      .map(city => city.id)
      .toString();

    fetch(
      `http://api.openweathermap.org/data/2.5/group?units=imperial&APPID=b1b35bba8b434a28a0be2a3e1071ae5b&id=${ids}`
    )
      .then(res => res.json())
      .then(body =>
        body.list.map(city => {
          return {
            id: city.id,
            name: city.name,
            temp: city.main.temp,
            icon: 'http://openweathermap.org/img/w/' +
              city.weather[0].icon +
              '.png',
            weather: city.weather[0].main,
          };
        }))
      .then(cities => {
        this.setState({
          cities,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        {this.state.cities.map(city => (
          <CityWeather
            key={city.id}
            name={city.name}
            // temp={city.temp}
            // weather={city.weather}
            // icon={city.icon}
            onPress={() =>
              () =>
                this.props.navigation.navigate('Detail', {
                  cityId: city.id,
                })}
          />
        ))}
      </ScrollView>
    );
  }
}

export default MasterScreen;
