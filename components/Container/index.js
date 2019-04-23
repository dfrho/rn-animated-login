import React from 'react'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native'
import { LinearGradient } from 'expo'

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <LinearGradient
      colors={['#252DCB', '#060C75', '#030755']}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  </TouchableWithoutFeedback>
)

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    '@media ios': {
      paddingTop: 20
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
    }
  }
})

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Container
