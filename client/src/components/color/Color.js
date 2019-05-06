import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardMenu from './CardMenu' ;

class ColorCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render(){
    var rgb_text = this.props.rgb.replace("rgb","")
    return(
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" infinite={true} style={{display: 'inline'}}>
      <div style={{backgroundColor: this.props.rgb}} className="color_span" key="front" >
        <span className="icon_at_top">

        </span>
        <h4 className="color_name" style={{color: 'white'}} >
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
        <div className="card_action_dashboard">
          <span className="flip_card_icon">
            <i className="material-icons" onClick={event => this.handleClick(event)}>flip_to_back</i>
          </span>
          <span className="card_menu">
            {/*<i className="material-icons">add</i>*/}
            <CardMenu />
          </span>
        </div>
      </div>
      <div style={{backgroundColor: this.props.rgb}} className="color_span" key="back" onClick={event => this.handleClick(event)}>
      </div>
      </ReactCardFlip>
    )
  }
}

export default ColorCard ;
