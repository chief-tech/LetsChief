import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from '../common/index'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button, SocialIcon, Icon, Text } from 'react-native-elements'
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

  render () {
    return (
      <Image source={require('../../../assets/images/Background.png')}
             style={styles.backgroundImage}
             resizeMode={'stretch'}>
        <Text h4 style={styles.headerStyle}>Login</Text>
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
        <Text h4 style={styles.headerStyle}>Need an account?</Text>
        <View style={styles.iconContainer}>
          <SocialIcon
            style={styles.socialIcons}
            type="facebook"/>
          <View style={[styles.circle, styles.socialIcons]}>
            <Icon
              name={'person-add'}
              size={24}
              color={'#007aff'}
              raised
              component={TouchableOpacity}
              onPress={() => {this.props.navigation.navigate('registrationForm')}}/>
          </View>
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
  }
}

export default LoginForm
