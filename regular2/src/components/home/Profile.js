import React from 'react';
import NavArrow from '../NavArrow'
import Hotkey from '../Hotkey'

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
      this.setState({bio: json.data.bio})
      this.setState({name: json.data.name})
    })
  }
  editBio(event){
    event.preventDefault();
    var headline = document.getElementById('edit_headline').value;
    var content = document.getElementById('edit_content').value;
    var id = localStorage.getItem("id");
    var url = `/api/users/edit/${id}/${headline}/${content}` ;
    fetch(url,{method: 'post'})
    .then(res => res.json())
    .then(function(json){
      if (json.message === "bio updated"){
        document.getElementById('display_headline').innerHTML = `${json.data.bio.headline}` ;
        document.getElementById('display_content').innerHTML = `${json.data.bio.content}` ;
      }
      else{
        alert("something went wrong. I bet it was your fault")
      }
    })
  }
  toggleForm(){
    var form = document.getElementById('edit_bio_form')
    var button = document.getElementById('edit_bio_button_text')
    if (form.style.display === ""){
      form.style.display = 'block' ;
      document.getElementById('edit_content').value = document.getElementById('hidden_content').value ;
      button.innerHTML = "Nevermind"
    }
    else if (form.style.display === "block"){
      form.style.display = 'none' ;
      button.innerHTML = "Edit Bio"
    }
    else {
      form.style.display = 'block' ;
      button.innerHTML = "Nevermind"
    }
  }
  render(){
    return(
      <div id="parent-top-right" className="parentElement"  >
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} text="Home"/>
        <div className="main_page_content" >
          <h3>{this.state.name}</h3>
          <p id="display_headline" value={this.state.bio.headline} > {this.state.bio.headline} </p>
          <p id="display_content" value={this.state.bio.content} >{this.state.bio.content}  </p>
          <form id="edit_bio_form" onSubmit={event => this.editBio(event)} >
            headline<Hotkey text="d" /><br/>
            <input type="text" defaultValue={this.state.bio["headline"]} id="edit_headline" /><br/>
            content<Hotkey text="g" /> <br/>
            <textarea id="edit_content"></textarea><br/>
            <input type="hidden" id="hidden_content" value={this.state.bio.content}></input>
            <button id="submit_bio_changes" type="submit" action="submit" >
              Submit changes
              <Hotkey text="a" click={true} />
            </button>
          </form>
          <button onClick={this.toggleForm} id="edit_bio_toggle_button">
          <span id="edit_bio_button_text">Edit Bio</span>
          <Hotkey text="e" click={true} />
          </button>
        </div>
      </div>
    )
  }
}
//<span className="non_mobile"> (H):</span><br/>
export default Profile
