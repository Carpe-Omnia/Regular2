import React from 'react' ;
import Color from './Color' ;
function makeColor(text, rgbstring){
  return(
    {text: text, rgb: `rgb(${rgbstring})`}
  )
}
const colors = [
  {text: 'Twitter Blue', rgb:"rgb(29, 161, 242)"},
  {text: 'Twitch Purple', rgb: "rgb(100, 65, 164)"},
  {text: 'Living Coral', rgb: "rgb(255, 111, 97)" },
  {text: 'Burnt Henna', rgb: "rgb(119, 57, 52)"},
  {text: 'Rose Dawn', rgb: "rgb(187, 132, 123)"},
  {text: 'Coral Sands', rgb: "rgb(229, 168, 135)"},
  {text: 'Sun Coral', rgb: "rgb(224, 96, 118)"},
  {text: 'Sand', rgb: "rgb(197, 164, 128)"},
  {text: "Candle Peach", rgb: "rgb(240, 159, 156)"},
  {text: "Mellow Buff", rgb: "rgb(210, 183, 152)"},
  {text: "Conch Shell", rgb: "rgb(244, 137, 154)"},
  {text: "Hot Pink", rgb: "rgb(220, 82, 129)"},
  {text: "Aurora Pink", rgb: "rgb(224, 122, 164)"},
  {text: "Magenta Haze", rgb: "rgb(150, 63, 109)"},
  {text: "Papaya", rgb: "rgb(245, 159, 106)"},
  {text: "Radiant Yellow", rgb: "rgb(242, 157, 55)"},
  {text: "Amberglow", rgb: "rgb(210, 119, 70)"},
  makeColor("Some Grey", "74, 78, 77"),
  makeColor("Sea Blue", "14, 154, 167"),
  makeColor("Clear Sky", "61, 164, 171"),
  makeColor("Charlie Brown", "246, 205, 97"),
  makeColor("Canteloupe", "254, 138, 113")
] //keep the names short so they don't overflow into a second line
  //vh or whatever you're using appears to be a function of device height, so it messes with the 2-column structure
  //make the CSS responsive so it looks good on all devices.
  //make pallettes (combinations of colors) as a feature?
class ColorIndex extends React.Component {
  render(){
    return(
      colors.map(function(color){
        return(
          <Color key={color.text} text={color.text} rgb={color.rgb} />
        )
      })
    )
  }
}
export default ColorIndex ;
