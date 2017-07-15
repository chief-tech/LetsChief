import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner } from './common'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
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
      .then(() => this.setState({ loading: false, error: '' }))
      .catch(() => this.setState({
        error: 'Authentication failed',
        loading: false
      }))
  }

  onRegisterPress = () => {

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
    console.log(this.state)
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
             {this.renderButton()}
           </CardSection>
           <CardSection>
             <View>
               <TouchableOpacity onPress={this.onRegisterPress}>
                 <Text style={styles.registrationStyle}>
                   Need an account?
                 </Text>
               </TouchableOpacity>
             </View>
           </CardSection>
         </View>
       </Card>
    )
  }
}

const styles = {
  logoStyle: {
    height: 75,
    width: 160,
    alignSelf: 'flex-start',
    marginRight: 15
  },
  thumbnailContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  headerStyle: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4F678C',
    paddingLeft: 25
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

export default LoginForm
