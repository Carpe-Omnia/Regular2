import React from 'react';
import NavArrow from '../NavArrow'

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      bio: {headline: "", content: ""}
    }
    var url = `/api/users/show/${localStorage.getItem("username")}`
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      this.setState({
        bio: json.data.bio
      })
      this.setState({
        name: json.data.name
      })
    })
  }
  render(){
    return(
      <div id="parent-top-right" className="parentElement"  >
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} text="Home"/>
        <div className="main_page_content" >
          <h3>{this.state.name}</h3>
          <p> {this.state.bio.headline} </p>
          <p> {this.state.bio.content} </p>
        </div>
      </div>
    )
  }
}

export default Profile
