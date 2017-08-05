import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginForm from './components/authenticationFlow/LoginFormRemaster'
import RegistrationForm from './components/authenticationFlow/RegistrationFormRemaster'
import MapStart from './components/rideFlow/MapStart';

const Router = StackNavigator({
  login: {
    screen: LoginForm
  },
  registrationForm: {
    screen: RegistrationForm
  },
  mapScene: {
    screen: MapStart
  }},
  {
    headerMode: 'none'
  }
)

export default Router
