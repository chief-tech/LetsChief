import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoginForm from './components/authenticationFlow/LoginForm'
import RegistrationForm from './components/authenticationFlow/RegistrationForm'
import MapScene from './components/rideFlow/MapScene'

const AppRouter = () => (
  <Router>
      <Scene key="authentication" type="reset" title="Login">
        <Scene key="loginForm" component={LoginForm} title={'Login'} type="reset"/>
        <Scene key="registrationForm" component={RegistrationForm} title={'Register'}/>
      </Scene>
      <Scene key="rider" type="reset">
        <Scene key="map" component={MapScene} title={'Map'}/>
      </Scene>
  </Router>
)

export default AppRouter
