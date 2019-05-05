import React from 'react';

class Color extends React.Component {
  render(){
    var rgb_text = this.props.rgb.replace("rgb","")
    return(
      <div style={{backgroundColor: this.props.rgb}} className="color_span">
        <h4 id="living-coral" style={{color: 'white'}}>
          {this.props.text}
        </h4>
        <span className="rgb_text" style={{color: 'white'}}>{rgb_text}</span>
        <br/>
        <span style={{display: 'block'}}>
        <span style={{backgroundColor: 'black', color: this.props.rgb}} className="contrast_1">
          Black
        </span>
        <span style={{backgroundColor: this.props.rgb, color: 'black'}} className="contrast_2">
          Contrast
        </span>
        </span>
        <span style={{display: 'block'}}>
          <span style={{backgroundColor: 'white', color: this.props.rgb}} className="contrast_1">
            White
          </span>
          <span style={{backgroundColor: this.props.rgb, color: 'white'}} className="contrast_2">
            Contrast
          </span>
        </span>
      </div>
    )
  }
}

export default Color ;
