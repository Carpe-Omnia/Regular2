import React from 'react' ;
import NavArrow from '../NavArrow' ;
import ColorCard from './ColorCard' ;
import PaletteCard from './PaletteCard' ;

const MyColors = (props) => {
  return(
    <div>
        <NavArrow direction="Left" actions={props.actions} z={props.z} text="colors" />
        <div className="main_page_content">
          <h2>My Colors</h2>
          {props.orientation.my_colors.map(function(color){
            return(
                <ColorCard key={color.name} text={color.name} rgb={color.rgb} color={color} actions={props.actions} orientation={props.orientation}/>
            )
          })}
          <h2>My Palettes</h2>
          {props.orientation.my_palettes.map(function(palette){

            return(
              <div style={{display: 'inline-block'}}>
                <PaletteCard key={palette.name} palette={palette} actions={props.actions} orientation={props.orientation} />
              </div>
            )
          })
        }
        </div>
    </div>
  )
}
export default MyColors ;
