import React from 'react' ;
import ColorIndex from './ColorIndex' ;
import MyColors from './MyColors' ;
import NewColor from './NewColor' ;

var colorHash = {
  "-1,0": NewColor ,
  "0,0": ColorIndex ,
  "1,0": MyColors
}
class Colors extends React.Component {
  constructor(props){
    super(props);
    if(this.props.orientation.colors.length === 0){
      this.props.actions.get_colors();
    }
    if(this.props.orientation.my_colors.length === 0 && !!this.props.orientation.user.id){
      console.log(this.props.orientation.user.id);
      this.props.actions.get_my_colors(this.props.orientation.user.id);
    }
  }
  render(){
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  colorHash[`${orientation}`]  ;
    return(
      <div>
        <Parent actions={this.props.actions}  z={this.props.z} orientation={this.props.orientation} />
      </div>
    )
  }
}
export default Colors ;
