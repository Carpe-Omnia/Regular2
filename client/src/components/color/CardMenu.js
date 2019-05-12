import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
const options = [
  'Add to my colors (beta)',
  'add to a palette (beta)',
  'vote up (soon)',
  'vote down (soon)'
];

const ITEM_HEIGHT = 48;

class CardMenu extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    anchorEl: null,
    display_normal: 'inline',
    display_palette: 'none',
    display_create: 'none'
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
     });
    setTimeout(()=>{
      this.setState({
       display_normal: 'inline',
       display_palette: 'none',
       display_create: 'none'
      });
    }, 200)

  };
  submitColor = (color) => {
    var user_id;
    if(!!this.props.orientation.user.id){
      user_id = this.props.orientation.user.id
    }
    else{
      user_id = null
    }
    var postData = {
      rgb: color.rgb,
      name: color.name,
      user_id: user_id
    }
    fetch('/api/colors/create', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(json){
      console.log(json);
    })
  }
  addColor = () => {
    console.log(this.props.color);
    if(!!this.props.orientation.user.id && this.props.color.id){
      var postData = {
        color_id: this.props.color.id,
        user_id: this.props.orientation.user.id
      }
      fetch('/api/colors/my_colors/new', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(function(json){
        console.log(json);
      })
    }
  }

  expandPalette = () => {
    console.log("adding to palette");
    this.setState({
      display_normal: 'none',
      display_palette: 'inline'
    })
  }
  expandCreate = () => {
    console.log("expanding Create");
    this.setState({
      display_palette: 'none',
      display_create: 'inline'
    })
  }
  handlePaletteCreate = () => {
    let name = document.getElementById(`name_input_for_new_palette`).value ;
    console.log(name) ;
    let color = {
      name: this.props.name,
      rgb: this.props.rgb
    }

    let user_id = null
    if(this.props.orientation.user.id){user_id = this.props.orientation.user.id}
    var postData = {
      palette_name: name,
      user_id: user_id
    }
    var that = this ;
    var palette_id = null
    fetch('/api/palettes/create', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(json){
      palette_id = json.data.id
      that.AddToPalette(palette_id)
    })
    this.handleClose() ;
  }

  AddToPalette = (palette_id) => {
    var that = this ;
    var postData2 = {palette_id: palette_id, color_id: that.props.color.id}
    fetch('/api/palettes/add_color',{
      method: 'POST',
      body: JSON.stringify(postData2),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(json){
      let palette = {
        name: json.data.name,
        id: json.data.palette_id,
        colors: json.data.colors
      }
      that.props.actions.add_to_my_palettes(palette);
    })
  }
  handleAddToColors = () => {
    let thing = {
      name: this.props.color.name,
      rgb: this.props.color.rgb
    }
    this.props.actions.add_to_my_colors(thing)
    this.handleClose() ;
    if(this.props.new){
      this.submitColor(thing)
    }
    else{
      this.addColor()
    }
  }
  handleAddToPalette = (event, palette, index) => {
    event.preventDefault() ;
    let color = {
      name: this.props.color.name,
      rgb: this.props.color.rgb,
      id: this.props.color.id
    }
  //  this.props.actions.add_to_palette(color, palette) ;
    this.AddToPalette(palette.id) ;
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

  normalMenu = () => {
    return(
      <div>
        <MenuItem onClick={this.handleAddToColors}>
          {options[0]}
        </MenuItem>
        <MenuItem onClick={this.expandPalette}>
          {options[1]}
        </MenuItem>
        <MenuItem onClick={this.handleVoteUp}>
          {options[2]}
        </MenuItem>
        <MenuItem onClick={this.handleVoteDown}>
          {options[3]}
        </MenuItem>
      </div>
    )
  }
  paletteMenu = () => {
    let that = this ;
    return(
      <div>
        <MenuItem onClick={this.expandCreate}>
          Create New
        </MenuItem>
        {this.props.orientation.my_palettes.map(function(palette, index){
          return(
            <MenuItem key={index} onClick={event => that.handleAddToPalette(event, palette, index)}>
              {palette.name}
            </MenuItem>
          )
        })}
      </div>
    )
  }
  createNewMenu = () => {
    return(
      <div>
        <input type="text" placeholder="name" className="special_menu_input" id="name_input_for_new_palette"/>
        <MenuItem onClick={this.handlePaletteCreate}>
          Create
        </MenuItem>
      </div>
    )
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let display_normal = this.state.display_normal ;
    let display_palette = this.state.display_palette ;
    let display_create = this.state.display_create ;
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
          <div style={{display: display_normal }} className="normal_menus">{this.normalMenu()}</div>
          <div style={{display: display_palette }} className="palette_menu">{this.paletteMenu()}</div>
          <div style={{display: display_create }} className="create_menu">{this.createNewMenu()}</div>
        </Menu>
      </div>
    );
  }
}

export default CardMenu;
