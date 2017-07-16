import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from './common'
import { Text, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      hasError: false,
      loading: false
    }
  }

  onChangeEmail = (email) => {
    this.setState({ email })
  }

  onChangePassword = (password) => {
    this.setState({ password })
  }

  onChangeConfirmPassword = (confirmPassword) => {
    this.setState({ confirmPassword })
  }

  onButtonPress = () => {
    const passwordOk = this.validPasswords()
    const emailOk = this.validEmail()
    if (emailOk && passwordOk) {
      this.createAccount()
    }
  }

  validEmail = () => {
    this.setState({loading: true})
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
    this.setState({loading: true})
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
      .then(Actions.pop())
      .catch(err => {
        this.setState({
          hasError: true,
          error: err.message
        })
      })
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
    console.log('Registration State', this.state)
    return (
        <Card>
          <View style={styles.containerStyle}>

            <CardSection style={styles.thumbnailContainerStyle}>
              <Image source={require('../../assets/images/yellowCloud.png')}
                     style={styles.logoStyle}
                     resizeMode={'contain'}/>
              <Text style={styles.headerStyle}>CHIEF</Text>
            </CardSection>
            <CardSection>
              <Input
                label="Email"
                placeHolder="user@example.com"
                onChangeText={this.onChangeEmail}
                value={this.state.email} />
            </CardSection>
            <CardSection>
              <Input
                label="Password"
                placeHolder="password"
                onChangeText={this.onChangePassword}
                value={this.state.password}
                secureTextEntry />
            </CardSection>
            <CardSection>
              <Input
                label="Confirm Password"
                placeHolder="confirm password"
                onChangeText={this.onChangeConfirmPassword}
                secureTextEntry />
            </CardSection>
            <CardSection>
              {this.renderButton()}
            </CardSection>
          </View>
          <ErrorModal
            visible={this.state.hasError}
            onAccept={() => this.setState({
              error: '',
              hasError: false,
              loading: false
            })}>
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          </ErrorModal>
        </Card>
    )
  }
}

const styles = {
  logoStyle: {
    height: 75,
    width: 160,
    alignSelf: 'center',
    flex: 1
  },
  thumbnailContainerStyle: {
    flexDirection: 'row'
  },
  headerStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4F678C',
    flex: 1
  },
  containerStyle: {
    backgroundColor: '#FFF'
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  },
  registrationStyle: {
    padding: 15,
    fontSize: 12,
    alignSelf: 'center',
    color: '#007AFF'
  }
}

export default RegistrationForm
