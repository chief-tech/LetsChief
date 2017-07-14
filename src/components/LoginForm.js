import React from 'react'
import { Card, CardSection, Input, Button } from './common'
import { Text, View, Image } from 'react-native'

class LoginForm extends React.Component {
  render () {
    return (
     <View>
       <Card>
         <CardSection style={styles.thumbnailContainerStyle}>
           <Image source={require('../../assets/images/yellowCloud.png')}
                  style={styles.logoStyle}
                  resizeMode={'contain'}/>
         </CardSection>
         <CardSection>
           <Input
             label="Email"
             placeHolder="user@example.com"/>
         </CardSection>
         <CardSection>
           <Input
             label="Password"
             placeHolder="password"/>
         </CardSection>
         <CardSection>
           <Button>
             Login
           </Button>
         </CardSection>
       </Card>
     </View>
    )
  }
}

const styles = {
  logoStyle: {
    flex: 1,
    height: 200,
    width: null
  },
  thumbnailContainerStyle: {
    margin: 15,
    alignItems: 'center'
  }
}

export default LoginForm
