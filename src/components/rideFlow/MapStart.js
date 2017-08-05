import React from 'react';
import { MapView } from 'expo';
import { ActivityIndicator } from 'react-native'

const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = 0.0421

export default class MapStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      loading: true
    }
  }

  getLocationPermission() {
    return Expo.Permissions.askAsync(Expo.Permissions.LOCATION)
  }

  getCurrentPosition(permission) {
    console.log('status:', permission)
    if (permission.status === 'granted') {
      const currentPos = Expo.Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeInterval: 2000
      })
        .then(positionObject => {
          console.log(positionObject)
          return positionObject
        })
      return currentPos
    }
  }

  componentWillMount() {
    this.getLocationPermission()
      .then(permission => this.getCurrentPosition(permission))
      .then(position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          loading: false
        })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="large"/>
      )
    }
    else {
      return (
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          showsUserLocation
          followsUserLocation
        />
      );
    }
  }
}