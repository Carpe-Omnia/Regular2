import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
const options = [
  'Add to my colors (soon)',
  'add to a pallete (soon)',
  'vote up (soon)',
  'vote down (soon)'
];

const ITEM_HEIGHT = 48;

class CardMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    console.log("closing") ;
    this.setState({ anchorEl: null });
  };
  handleAddToColors = () => {
    console.log("adding to colors");
    this.handleClose() ;
  }
  handleAddToPalette = () => {
    console.log("adding to palette");
    this.handleClose() ;
  }
  handleVoteUp = () => {
    console.log(`voting up`) ;
    this.handleClose() ;
  }
  handleVoteDown = () => {
    console.log(`voting down`) ;
    this.handleClose() ;
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <i className="material-icons add_card_icon">add</i>
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
            <MenuItem onClick={this.handleAddToColors}>
              {options[0]}
            </MenuItem>
            <MenuItem onClick={this.handleAddToPalette}>
              {options[1]}
            </MenuItem>
            <MenuItem onClick={this.handleVoteUp}>
              {options[2]}
            </MenuItem>
            <MenuItem onClick={this.handleVoteDown}>
              {options[3]}
            </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default CardMenu;
