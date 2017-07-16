import React from 'react'
import { View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import LoginForm from './components/authenticationFlow/LoginForm'
import RegistrationForm from './components/authenticationFlow/RegistrationForm'
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
      <Router>
        <Scene key="authentication">
          <Scene key="loginForm" component={LoginForm} title={'Login'} type="reset"/>
          <Scene key="registrationForm" component={RegistrationForm} title={'Register'}/>
        </Scene>
      </Router>
    )
  }
}

export default App
