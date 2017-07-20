import * as React from 'react'
import  MapView, { PROVIDER_GOOGLE }  from 'react-native-maps'
import { Spinner } from '../common'
const LATITUDE_DELTA = 0.002
const LONGITUDE_DELTA = 0.002

export default class MapScene extends React.Component {
  state = {loading: true}

  onRegionChange = (region) => {
    console.log(region)
    this.setState({ region })
  }

  componentWillMount() {
    console.log('in componentWillMount')
    const url = 'https://freegeoip.net/json/'
    // const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDScosZOkG518Zaqmt6X7pPD59iYXHlaSY'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          currentLocation: {
            latitude: json.latitude,
            longitude: json.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          loading: false
        })
      })
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position)
    //     this.setState({
    //       currentRegion: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA
    //       }
    //     })
    //   },
    //   (error) => console.log(error),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // )
    // this.watchID = navigator.geolocation.watchPosition(
    //   (position) => {
    //     console.log(position)
    //     this.setState({
    //       currentRegion: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA
    //       }
    //     })
    //   }
    // )
  }

  getCurrentLocation = () => {
    console.log('in getCurrentLocation')
  }

  render () {
    console.log('Map state', this.state)
      if(this.state.loading) {
      return (
        <Spinner size="large"/>
      )
    } else {
      const marker = {
        latitude: this.state.currentLocation.latitude,
        longitude: this.state.currentLocation.longitude
      }
      return (
        <MapView
          style={styles.mapStyle}
          region={this.state.currentLocation}
          showUserLocation
          provider={PROVIDER_GOOGLE}>
          <MapView.Marker coordinate={marker}/>
        </MapView>
      )
    }
  }
}

const styles = {
  mapStyle: {
    flex: 1
  }
}
