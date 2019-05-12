import React from 'react';
import Hotkey from '../Hotkey'

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.props.actions.set_profile(this.props.orientation.user.id)
  }
  editBio(event){
    event.preventDefault();
    var headline = document.getElementById('edit_headline').value;
    var content = document.getElementById('edit_content').value;
    var id = this.props.orientation.user.id
    var that = this ;
    var url = `/api/users/update` ;
    var postData = {
      headline: headline,
      content: content,
      id: id
    }
    fetch(url,{
      method: 'post',
      body: JSON.stringify(postData),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(json){
      if (json.message === "bio updated"){
        that.props.actions.set_profile(that.props.orientation.user.id)
      }
      else{
        document.getElementById('snackbar_error_message').innerHTML = "Something went wrong. My bad (probably)" ;
        document.getElementById('show_snackbar_error').click() ;
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
    var profile = this.props.orientation.profile ;
    return(
      <div id="parent-top-right" className="parentElement"  >
        <div className="main_page_content" >
          <h3>{profile.name}</h3>
          <p id="display_headline" value={profile.bio.headline} > {profile.bio.headline} </p>
          <p id="display_content" value={profile.bio.content} >{profile.bio.content}  </p>
          <form id="edit_bio_form" onSubmit={event => this.editBio(event)} >
            headline<Hotkey text="d" /><br/>
            <input type="text" defaultValue={profile.bio["headline"]} id="edit_headline" /><br/>
            content<Hotkey text="g" /> <br/>
            <textarea id="edit_content"></textarea><br/>
            <input type="hidden" id="hidden_content" value={profile.bio.content}></input>
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

export default Profile
