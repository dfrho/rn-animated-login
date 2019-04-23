import React, { Component } from 'react'
import { Icon, Text, Button } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import CreateUser from './CreateUser'
import LoginUser from './LoginUser'
import Container from '../Container'


class Login extends Component {
  state = {
    register: true
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.register ? (
          <CreateUser {...this.props} />
        ) : (
          <LoginUser {...this.props} />
        )}
        <Button
          onPress={() =>
            this.setState({
              register: !this.state.register
            })
          }
          style={styles.altAction}
        >
          <Icon type="SimpleLineIcons" name="arrow-left" style={styles.icon} />
          <Text>
            {this.state.register ? 'login instead' : 'new to tweetstr?'}
          </Text>
        </Button>
      </Container>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    padding: 5,
    flex: 1
  },
  altAction: {
    marginVertical: 18,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '$actionColor',
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: { color: '$highlightColor', fontSize: 14, marginRight: 2 }
})

export default Login
