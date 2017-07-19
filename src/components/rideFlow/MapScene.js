import * as React from 'react'
import  MapView, { PROVIDER_GOOGLE }  from 'react-native-maps'

const LATITUDE_DELTA = 0.1
const LONGITUDE_DELTA = 0.1

export default class MapScene extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  onRegionChange = (region) => {
    console.log(region)
    this.setState({ region })
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition( position => {
      this.setState({
        region:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      })
    })
  }

  render () {
    var marker = {
      latLng: {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude
      }
    }
    console.log('Marker', marker)
    console.log('Map state', this.state)
    return (
      <MapView
        style={styles.mapStyle}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        provider={PROVIDER_GOOGLE}>
        <MapView.Marker
          coordinate={marker.latLng}
          title={'Your current position'}
          />
      </MapView>
    )
  }
}

const styles = {
  mapStyle: {
    flex: 1
  }
}
