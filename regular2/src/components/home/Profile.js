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
        document.getElementById('edit_headline').value = json.data.bio.headline
        document.getElementById('edit_content').value = json.data.bio.content
      }
      else{
        alert("something went wrong. I bet it was your fault")
      }
    })
  }
  showForm(){
    document.getElementById('edit_bio_form').style.display = 'block'
  }
  render(){
    return(
      <div id="parent-top-right" className="parentElement"  >
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} text="Home"/>
        <div className="main_page_content" >
          <h3>{this.state.name}</h3>
          <p> {this.state.bio.headline} </p>
          <p> {this.state.bio.content} </p>
          <form id="edit_bio_form" onSubmit={event => this.editBio(event)} >
            headline: <br></br>
            <input type="text" defaultValue={this.state.bio["headline"]} id="edit_headline" /><br/>
            <textarea id="edit_content" defaultValue={this.state.bio.content}></textarea><br></br>
            <button type="submit" action="submit" >Submit changes</button>
          </form>
          <button onClick={this.showForm} > Edit Bio </button>
        </div>
      </div>
    )
  }
}
//you need to change the defaultValue type tyhing of the textarea. I guess it enjoys being difficult
export default Profile
