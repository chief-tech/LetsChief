import React from 'react'
import firebase from 'firebase'
import Router from './src/AppRouter'

export class App extends React.Component {
  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyB7YQDhbZxv47Vi8a8vgP3DzPB67QI0SAU',
      authDomain: 'lets-chief-2975b.firebaseapp.com',
      databaseURL: 'https://lets-chief-2975b.firebaseio.com',
      projectId: 'lets-chief-2975b',
      storageBucket: '',
      messagingSenderId: '14605005582'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Router/>
    )
  }
}

export default App
