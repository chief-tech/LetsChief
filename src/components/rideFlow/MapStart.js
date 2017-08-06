import React from 'react'
import { MapView } from 'expo'
import { ActivityIndicator } from 'react-native'
import { Spinner } from '../common'

const LATITUDE_DELTA = 0.00522
const LONGITUDE_DELTA = 0.00121
const LOCATION_REFRESH = 1000

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

  componentWillMount() {
    this.loadCurrentPosition()
  }

  getLocationPermission() {
    return Expo.Permissions.askAsync(Expo.Permissions.LOCATION)
  }

  getCurrentPosition(permission) {
    console.log('status:', permission)
    if (permission.status === 'granted') {
      const currentPos = Expo.Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeInterval: LOCATION_REFRESH
      })
        .then(positionObject => {
          console.log(positionObject)
          return positionObject
        })
      return currentPos
    }
  }

  loadCurrentPosition() {
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
          loading: false,
          coordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
      })
  }

  handleMarkerDrag = (e) => {
    this.setState({
      coordinate: e.nativeEvent.coordinate
    })
  }

  handleMapDrag = (region) => {
    this.setState({
      region,
      coordinate: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    })
  }

  render() {
    console.log(this.state)
    if (this.state.loading) {
      return (
        <Spinner />
      )
    }
    else {
        return (
          <MapView
            style={{ flex: 1 }}
            region={this.state.region}
            showsUserLocation
            showsPointsOfInterest={false}
            rotateEnabled={false}
            onRegionChange={this.handleMapDrag}
            onMapReady={this.loadCurrentPosition}
          >
            <MapView.Marker title={'Pickup Location'}
                            coordinate={this.state.coordinate}
                            draggable
                            onDragEnd={this.handleMarkerDrag}/>
          </MapView>
      )
    }
  }
}