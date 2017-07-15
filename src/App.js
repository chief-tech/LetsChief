import React from 'react'
import { Text, View } from 'react-native'
import LoginForm from './components/LoginForm'
import firebase from 'firebase'

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
      <View>
        <LoginForm />
      </View>
    )
  }
}

export default App
