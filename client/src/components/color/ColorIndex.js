import React from 'react' ;
import ColorCard from './Color' ;
import NavArrow from '../NavArrow' ;
function makeColor(text, rgbstring){
  return(
    {text: text, rgb: `rgb(${rgbstring})`}
  )
}
export const colors = [
  makeColor('Twitter Blue', "29, 161, 242") ,
  makeColor('Twitch Purple',  "100, 65, 164"),
  makeColor('Living Coral',  "255, 111, 97"),
  makeColor('Burnt Henna',  "119, 57, 52"),
  makeColor('Rose Dawn',  "187, 132, 123"),
  makeColor('Coral Sands',  "229, 168, 135"),
  makeColor('Sun Coral',  "224, 96, 118"),
  makeColor('Sand',  "197, 164, 128"),
  makeColor("Candle Peach",  "240, 159, 156"),
  makeColor("Mellow Buff",  "210, 183, 152"),
  makeColor("Conch Shell",  "244, 137, 154"),
  makeColor("Hot Pink",  "220, 82, 129"),
  makeColor("Aurora Pink",  "224, 122, 164"),
  makeColor("Magenta Haze",  "150, 63, 109"),
  makeColor("Papaya",  "245, 159, 106"),
  makeColor("Radiant Yellow",  "242, 157, 55"),
  makeColor("Amberglow",  "210, 119, 70"),
  makeColor("Some Grey", "74, 78, 77"),
  makeColor("Sea Blue", "14, 154, 167"),
  makeColor("Clear Sky", "61, 164, 171"),
  makeColor("Charlie Brown", "246, 205, 97"),
  makeColor("Canteloupe", "254, 138, 113")
] //keep the names short so they don't overflow into a second line
  //vh or whatever you're using appears to be a function of device height, so it messes with the 2-column structure
  //make the CSS responsive so it looks good on all devices.
  //make pallettes (combinations of colors) as a feature?
var fetchedColors = [] ;
class ColorIndex extends React.Component {
  constructor(props){
    super(props);
    this.props.actions.get_colors();
  }
  uploadColors = () => {
    console.log("uploading colors");
    colors.forEach(function(color){
      let url = 'api/colors/create' ;
      let postData = {name: color.text, rgb: color.rgb} ;
      var that = this ;
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(function(json){
        console.log(json)
      })
    })
  }

  render(){
    return(
      <div>
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} text="new colors" />
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} text="my colors" />
          <div className="main_page_content">
            {this.props.orientation.colors.map(function(color){
              return(
                  <ColorCard key={color.name} text={color.name} rgb={color.rgb} />
              )
            })}
          </div>
      </div>
    )
  }
}
export default ColorIndex ;
