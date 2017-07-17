import * as React from 'react'
import  MapView  from 'react-native-maps'

const LATITUDE_DELTA = 0
const LONGITUDE_DELTA = 0

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

  render () {
   return (
     <MapView
       style={styles.mapStyle}
       initialRegion={this.state.region}
       onRegionChange={() => {}}
     />
   )
  }
}

const styles = {
  mapStyle: {
    flex: 1
  }
}
