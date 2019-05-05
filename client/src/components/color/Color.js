import React from 'react';

class Color extends React.Component {
  render(){
    var rgb_text = this.props.rgb.replace("rgb","")
    return(
      <div style={{backgroundColor: this.props.rgb}} className="color_span">
        <h4 className="color_name" style={{color: 'white'}}>
          {this.props.text}
        </h4>
        <span className="rgb_text" style={{color: 'white'}}>{rgb_text}</span>
        <br/>
        <span style={{display: 'block'}}>
        <span style={{backgroundColor: 'black', color: this.props.rgb}} className="contrast_1 contrast">
          Black
        </span>
        <span style={{backgroundColor: this.props.rgb, color: 'black'}} className="contrast_2 contrast">
          <span className="contrast_2_text">Contrast</span>
        </span>
        </span>
        <span style={{display: 'block'}}>
          <span style={{backgroundColor: 'white', color: this.props.rgb}} className="contrast_3 contrast">
            White
          </span>
          <span style={{backgroundColor: this.props.rgb, color: 'white'}} className="contrast_4 contrast">
            Contrast
          </span>
        </span>
        <div className="black_bar"></div>
        <div className="white_bar"></div>
      </div>
    )
  }
}

export default Color ;
