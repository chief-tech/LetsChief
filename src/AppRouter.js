import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginForm from './components/authenticationFlow/LoginFormRemaster'
import RegistrationForm from './components/authenticationFlow/RegistrationFormRemaster'

const Router = StackNavigator({
  login: {
    screen: LoginForm
  },
  registrationForm: {
    screen: RegistrationForm
  }},
  {
    headerMode: 'none'
  }
)

export default Router
