import React from 'react'
import { View, Text, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { ButtonCommon } from './ButtonCommon'

export const ErrorModal = ({visible, children, onAccept}) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles
  return (
  <Modal
    animationType={'fade'}
    onRequestClose={() => {}}
    transparent
    visible={visible}
    >
    <View style={containerStyle}>
      <View>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <ButtonCommon onPress={onAccept}>Ok</ButtonCommon>
        </CardSection>
      </View>
    </View>
  </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}
