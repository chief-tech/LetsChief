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
           <Text style={styles.headerStyle}>CHIEF</Text>
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
             Let's Chief
           </Button>
         </CardSection>
       </Card>
     </View>
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
    margin: 15,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  headerStyle: {
    alignSelf: 'center',
    justifySelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default LoginForm
