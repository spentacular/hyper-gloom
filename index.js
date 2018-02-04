// core
const foregroundColor = '#F1EFF7'
const backgroundColor = '#292A44'
const cursorColor = 'rgba(79, 82, 138, 0.8)'
const selectionColor = '#4F528A'
const borderColor = '#333454'
// colors
const black = '#333454'
const red = '#FF6F9F'
const green = '#2DE0A7'
const yellow = '#FFBC69'
const blue = '#6D6DB5'
const magenta = '#AE81FF'
const cyan = '#66D9EF'
const white = '#F1EFF7'

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor,
    selectionColor,
    borderColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    }
  })
