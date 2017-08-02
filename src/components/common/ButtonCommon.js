import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native'

export class ButtonCommon extends React.Component {

  render () {
    return (
      <Button style={styles.buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </Button>
    )
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#FFF',
    marginBottom: 5
  },

  buttonStyle: {
    flexGrow: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5,
  }
}