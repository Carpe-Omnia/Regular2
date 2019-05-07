import React from 'react';
import ColorCard from './ColorCard' ;
import ReactCardFlip from 'react-card-flip';
import PaletteMenu from './PaletteMenu' ;
class PaletteCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show_components: 'none',
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggle_colors = this.toggle_colors.bind(this) ;
  }
  handleClick = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  toggle_colors(){
    (this.state.show_components === 'none' ? this.setState({show_components: 'inline'}) : this.setState({show_components: 'none'})) ;
  }
  render(){
    var color1 = this.props.palette.colors[0] ;
    var others = this.props.palette.colors.filter(color => color !== color1) ;
    var other_height = `${75/others.length}%` ;
    var that = this ;
    return(
      <div style={{display: 'inline-block'}}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" infinite={true} style={{display: 'inline'}}>
          <div className="color_span palette_card" key="front">
            <div style={{backgroundColor: color1.rgb, height: '20%'}}>
              <h4 className="color_name" style={{color: 'white'}}>
                {this.props.palette.name}
              </h4>
              <span className="palette_card_menu">
                <PaletteMenu orientation={this.props.orientation} actions={this.props.actions} toggle_colors={this.toggle_colors} />
              </span>
            </div>

            {others.map(function(color){
              return(
                <div style={{backgroundColor: color.rgb, height: other_height}}></div>
              )
            })}
          </div>
          <div key="back" className="color_span"></div>
        </ReactCardFlip>
        <div style={{display: this.state.show_components }}>
          {this.props.palette.colors.map(function(color){
            return(
                <ColorCard key={color.name} text={color.name} rgb={color.rgb} color={color}
                actions={that.props.actions} orientation={that.props.orientation}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default PaletteCard
