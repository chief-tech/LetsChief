import React from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import AppRouter from './src/AppRouter'

export class App extends React.Component {
  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyDWSikJ_edGbUL6qHVw4pK2VHx2wpDWFpo',
      authDomain: 'letschief-ae90d.firebaseapp.com',
      databaseURL: 'https://letschief-ae90d.firebaseio.com',
      projectId: 'letschief-ae90d',
      storageBucket: '',
      messagingSenderId: '596693327275'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <AppRouter/>
    )
  }
}

export default App
