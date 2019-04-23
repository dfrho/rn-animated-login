import EStyleSheet from 'react-native-extended-stylesheet'

const backgroundHeight = 200
const backgroundWidth = 203
const imageWidth = 176
const imageHeight = 156

export default EStyleSheet.create({
  $largeBackgroundWidth: backgroundWidth,
  $largeBackgroundHeight: backgroundHeight,
  $smallBackgroundWidth: backgroundWidth / 1.6,
  $smallBackgroundHeight: backgroundHeight / 1.6,

  $largeImageWidth: imageWidth,
  $smallImageWidth: imageWidth / 1.6,
  $largeImageHeight: imageHeight,
  $smallImageHeight: imageHeight / 1.6,

  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    width: '$largeBackgroundWidth',
    height: '$largeBackgroundHeight'
  },
  image: {
    width: '$largeImageWidth',
    height: '$largeImageHeight'
  },
  text: {
    fontFamily: 'titan-one',
    color: '$white',
    fontSize: 32
  }
})
