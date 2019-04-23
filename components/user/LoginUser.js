import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import UserForm from './UserForm'
import { Logo } from '../Logo'

class LoginUser extends Component {


  render() {
    return (
      <View>
        <Logo />
        <UserForm
          type="login"
        />
      </View>
    )
  }
}

LoginUser.propTypes = {
  signinUser: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.obj
}

export default LoginUser
