import React, { Component } from 'react'
import {
  Animated,
  Keyboard,
  Platform,
  Text,
  View
} from 'react-native'
import { Font } from 'expo'
import styles from './styles'

const ANIMATION_DURATION = 224

export default class Logo extends Component {
  constructor(props) {
    super(props)
    this.springValue = new Animated.Value(1)
    this.state = {
      fontLoaded: false,
      containerImageHeight: new Animated.Value(styles.$largeBackgroundHeight),
      containerImageWidth: new Animated.Value(styles.$largeBackgroundWidth),
      imageWidth: new Animated.Value(styles.$largeImageWidth),
      imageHeight: new Animated.Value(styles.$largeImageHeight)
    }
  }

  spring() {
    this.springValue.setValue(1.05)
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start()
  }

  async componentDidMount() {
    await Font.loadAsync({
      'titan-one': require('../../assets/fonts/Titan_One/TitanOne-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
    const name = Platform.OS === 'ios' ? 'Will' : 'Did'
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide
    )
    this.spring()
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }


  // TODO:  credit twitter logo source <a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by myriammira - www.freepik.com</a>

  keyboardWillShow = async () => {
    await Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallBackgroundWidth,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$smallImageWidth,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.containerImageHeight, {
        toValue: styles.$smallBackgroundHeight,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageHeight, {
        toValue: styles.$smallImageHeight,
        duration: ANIMATION_DURATION
      })
    ]).start()
    this.spring()
  }

  keyboardWillHide = async () => {
    await Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeBackgroundWidth,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$largeImageWidth,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.containerImageHeight, {
        toValue: styles.$largeBackgroundHeight,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.state.imageHeight, {
        toValue: styles.$largeImageHeight,
        duration: ANIMATION_DURATION
      })
    ]).start()
    this.spring()
  }

  render() {
    const containerImageStyles = [
      styles.containerImage,
      {
        width: this.state.containerImageWidth,
        height: this.state.containerImageWidth,
        transform: [{ scale: this.springValue }]
      }
    ]
    const imageStyles = [
      styles.image,
      {
        width: this.state.imageWidth,
        transform: [{ scale: this.springValue }]
      },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ]

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logowhite.png')}
          />
        </Animated.View>
        {this.state.fontLoaded && <Text style={styles.text}>tweetstr</Text>}
      </View>
    )
  }
}

