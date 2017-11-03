import React, {Component} from 'react'
import {View} from 'react-native';
import { ListItem } from 'react-native-elements';
import LoadingIndicator from './LoadingIndicator'
import CityWeather from './CityWeather'

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const cityId = this.props.navigation.state.params.cityId;

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=b1b35bba8b434a28a0be2a3e1071ae5b&id=${cityId}`
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({
          isLoading: false,
          city: {
            name: jsonRes.name,
            weather: jsonRes.weather[0].main,
            temp: jsonRes.main.temp,
            temp_min: jsonRes.main.temp_min,
            temp_max: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            pressure: jsonRes.main.pressure,
            wind_speed: jsonRes.wind.speed,
            cloudiness: jsonRes.clouds.all,
            icon: 'http://openweathermap.org/img/w/' +
              jsonRes.weather[0].icon +
              '.png',
          },
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    const { city } = this.state;

    //Component is lurky in the corner waiting to be used
    // <CityWeather
    //   key={city.id}
    //   name={city.name}
    //   // temp={city.temp}
    //   weather={city.weather}
    //   icon={city.icon}
    // />


    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ListItem
          key={city.id}
          title={city.name}
          subtitle={city.weather}
          hideChevron
        />
        <ListItem
          title="Humidity"
          rightTitle={city.humidity + '%'}
          titleStyle={{fontSize: 20, color: 'blue', backgroundColor:'tomato'}}
          hideChevron
        />
        <ListItem
          title="Pressure"
          rightTitle={city.pressure + ' hPa'}
          hideChevron
        />
        <ListItem
          title="Wind Speed"
          rightTitle={city.wind_speed + ' mph'}
          hideChevron
        />
        <ListItem
          title="Cloud Cover"
          rightTitle={city.cloudiness + '%'}
          hideChevron
        />
      </View>
    );
  }
}

export default DetailScreen;
