import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from '../common/index'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button, SocialIcon, Icon } from 'react-native-elements'
import firebase from 'firebase'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

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
        <View style={styles.containerStyle}>
          <FormLabel labelStyle={{color: '#007aff'}}>Email</FormLabel>
          <FormInput onChangeText={this.onChangeEmail}/>
          <FormValidationMessage>{this.props.error}</FormValidationMessage>
          <FormLabel labelStyle={{color: '#007aff'}}>Password</FormLabel>
          <FormInput onChangeText={this.onChangePassword}/>
          <FormValidationMessage>{this.props.error}</FormValidationMessage>
          <Button raised
                  rounded
                  title={"Let's Chief"}
                  backgroundColor={'rgba(0, 122, 255, 0.2)'}
                  component={TouchableOpacity}
                  onPress={() => {}}
                  textStyle={{fontSize: 20}}
          />
        </View>
        <View style={styles.iconContainer}>
          <SocialIcon
            style={styles.socialIcons}
            type="facebook"/>

          <SocialIcon
            style={styles.socialIcons}
            type="twitter"/>
        </View>
      </Image>
    )
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingTop: HEIGHT / 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  socialIcons: {
    opacity: 0.6
  }
}

export default LoginForm
