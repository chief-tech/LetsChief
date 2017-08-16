import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from '../common/index'
import { View, Image, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button, SocialIcon, Icon, Text } from 'react-native-elements'
import firebase from 'firebase'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class RegistrationForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      hasError: false,
      loading: false
    }
  }

  onChangeFirstName = (firstName) => {
    this.setState({firstName})
  }

  onChangeLastName = (lastName) => {
    this.setState({lastName})
  }

  onChangeEmail = (email) => {
    this.setState({email})
  }

  onChangePassword = (password) => {
    this.setState({password})
  }

  onChangeConfirmPassword = (confirmPassword) => {
    this.setState({confirmPassword})
  }

  onButtonPress = () => {
    const passwordOk = this.validPasswords()
    const emailOk = this.validEmail()
    console.log({ emailOk })
    console.log({ passwordOk })
    if (emailOk && passwordOk) {
      this.createAccount()
      console.log('success')
    }
    this.createAccount()
    console.log('success')
  }

  validEmail = () => {
    this.setState({
      loading: true,
      hasError: false,
      error: ''
    })
    if (!this.state.email.includes('.edu') && !this.state.hasError) {
      this.setState({
        hasError: true,
        error: 'Sorry, we only support .edu email addresses',
        loading: false
      })
      return false
    } else {
      return true
    }
  }

  validPasswords = () => {
    this.setState({
      loading: true,
      hasError: false,
      error: ''
    })
    if (this.state.password !== this.state.confirmPassword && !this.state.hasError) {
      this.setState({
        hasError: true,
        error: 'Your passwords don\'t match!',
        loading: false
      })
      return false
    } else if (this.state.password.length < 6 && !this.state.hasError) {
      this.setState({
        hasError: true,
        error: 'Your password needs to be at least 6 characters you scrub',
        loading: false
      })
    } else {
      return true
    }
  }

  createAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          error: '',
          hasError: false,
          email: '',
          password: '',
          confirmPassword: '',
          loading: false
        })
      })
      .then(() => this.props.navigation.navigate('login'))
      .catch(err => {
        this.setState({
          hasError: true,
          error: err.message
        })
      })
    console.log('success')
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image source={require('../../../assets/images/Background.png')}
               style={styles.backgroundImage}
               resizeMode={'stretch'}>
          <Text h4 style={styles.headerStyle}>Make your account!</Text>
          <View style={styles.containerStyle}>
            <FormLabel labelStyle={{color: '#007aff'}}>First Name</FormLabel>
            <FormInput onChangeText={this.onChangeFirstName}/>
            <FormLabel labelStyle={{color: '#007aff'}}>Last Name</FormLabel>
            <FormInput onChangeText={this.onChangeLastName}/>
            <FormLabel labelStyle={{color: '#007aff'}}>Email (must be a .edu email address!)</FormLabel>
            <FormInput onChangeText={this.onChangeEmail}/>
            <FormValidationMessage>{this.props.error}</FormValidationMessage>
            <FormLabel labelStyle={{color: '#007aff'}}>Password</FormLabel>
            <FormInput
              onChangeText={this.onChangePassword}
              secureTextEntry
            />
            <FormLabel labelStyle={{color: '#007aff'}}>Confirm Password</FormLabel>
            <FormInput
              onChangeText={this.onChangeConfirmPassword}
              secureTextEntry
            />
            <Button raised
                    rounded
                    title={"Let's Chief"}
                    backgroundColor={'rgba(0, 122, 255, 0.2)'}
                    component={TouchableOpacity}
                    onPress={() => { this.onButtonPress() }}
                    textStyle={{fontSize: 20}}
            />
            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>
          </View>
        </Image>
      </TouchableWithoutFeedback>
    )
  }
}

const
  styles = {
    backgroundImage: {
      flex: 1,
      width: null
    },
    containerStyle: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    headerStyle: {
      alignSelf: 'center',
      color: '#007aff',
      padding: HEIGHT / 15,
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    socialIcons: {
      opacity: 0.8
    },
    circle: {
      width: 76,
      height: 76,
      borderRadius: 38,
      opacity: 0.3
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  }
