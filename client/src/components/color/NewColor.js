import React from 'react' ;
import NumericInput from 'react-numeric-input'
import NavArrow from '../NavArrow' ;
import ColorCard from './Color' ;
function makeColor(text, rgbstring){
  return(
    {text: text, rgb: `rgb(${rgbstring})`}
  )
}

class NewColor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      red: 0,
      green: 0,
      blue: 0
    }
  }
  detectChange = () => {
    console.log("change detected")
    this.setState({
      name: document.getElementById('new_color_name').value,
      red: document.getElementById('new_red').value,
      green: document.getElementById('new_green').value,
      blue: document.getElementById('new_blue').value
    })
  }
  render(){
    var rgb = `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
    var name = this.state.name ;
    var preview_color = {name: name, rgb: rgb}
    return(
      <div>
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} text="colors" />
        <div className="main_page_content">
          <h4>Make a New Color</h4>
          <form>
            Name<input type="text" id="new_color_name" onChange={this.detectChange} /><br/>
            Red<NumericInput min={0} id="new_red" max={255} value={this.state.red} onChange={this.detectChange} /><br/>
            Green<NumericInput min={0} max={255} id="new_green" value={this.state.green} onChange={this.detectChange} /><br/>
            Blue <NumericInput min={0} max={255} id="new_blue" value={this.state.blue} onChange={this.detectChange} /><br/>
          </form>
          <ColorCard text={name} rgb={rgb} color={preview_color} actions={this.props.actions} />
        </div>
      </div>
    )
  }
}
export default NewColor ;
