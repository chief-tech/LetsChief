import React from 'react'
import { Card, CardSection, Input, ButtonCommon, Spinner, ErrorModal } from '../common/index'
import { View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button, SocialIcon, Icon, Text } from 'react-native-elements'
import firebase from 'firebase'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class RegistrationForm extends React.Component{
  render(){
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

