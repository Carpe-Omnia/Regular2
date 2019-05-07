import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
const ITEM_HEIGHT = 48;

class PaletteMenu extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      anchorEl: null
    }
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  }
  render(){
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return(
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i className="material-icons palette_card_icon">add</i>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <MenuItem onClick={this.handleClose}>
            close
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
export default PaletteMenu ;
