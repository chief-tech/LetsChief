import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from '../common/index'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

class LoginForm extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      hasError: false
    }
  }

  onChangeEmail = (email) => {
    this.setState({ email })
  }

  onChangePassword = (password) => {
    this.setState({ password })
  }

  onButtonPress = () => {
    this.setState({loading: true})
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({ loading: false, error: '' })
      })
      .catch((err) => this.setState({
        error: err.message,
        loading: false,
        hasError: true
      }))
  }

  onRegisterPress = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      hasError: false
    })
    this.props.navigation.navigate('registrationForm')
  }

  renderButton = () => {
    if (this.state.loading) {
      return (
        <Spinner size='large'/>
      )
    } else {
      return (
        <ButtonCommon onPress={this.onButtonPress}>
          Let's Chief
        </ButtonCommon>
      )
    }
  }

  render () {
    return (
      <Image source={require('../../../assets/images/Background.png')}
             style={styles.backgroundImage}
             resizeMode={'stretch'}>

      </Image>
    )
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
  }
}

export default LoginForm
