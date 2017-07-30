import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginForm from './components/authenticationFlow/LoginFormRemaster'
import RegistrationForm from './components/authenticationFlow/RegistrationForm'

const Router = StackNavigator({
  login: {
    screen: LoginForm
  },
  registrationForm: {
    screen: RegistrationForm
  }},
  {
    headerMode: 'float'
  }
)

export default Router
