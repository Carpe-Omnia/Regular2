import React from 'react';
import NavArrow from '../NavArrow';
import Hotkey from '../Hotkey'

class NewJoke extends React.Component {
  doThing(event){
    event.preventDefault();
    var setup = document.getElementById('setup_input').value ;
    var punchline = document.getElementById('punchline_input').value ;
    var id = this.props.orientation.user.id ;
    var username = this.props.orientation.user.username;
    var postData = {setup: setup, punchline: punchline, username: username, id: id } ;
    var link = `/api/jokes/create` ;
    console.log(link)
    if (!!setup && !!punchline){
      console.log('working');
      var that = this ;
      fetch(link, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(function(json){
        console.log(json);
        if(json.message === "joke created"){
          alert("nice job making that joke")
          that.props.actions.add_joke(json.data["joke"]);
        }
        else{
          alert("something went terribly wrong")
        }
      })
    }
    else {
      alert('make sure to include a punchline and a setup')
    }
  }
  render(){
    return (
      <div>
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} text="Read Jokes" />
        <div className="main_page_content">
          <h3>
            Make a new joke
          </h3>
          <form onSubmit={event => this.doThing(event)} >
            <label>setup<Hotkey text="s" /></label><textarea type="text" id="setup_input" /><br></br>
            <label>punchline<Hotkey text="p" /></label><textarea type="text" id="punchline_input" /><br></br>
            <button type="submit" value="submit" id="submit_joke" >
              Submit <Hotkey text="j" click={true}/>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewJoke
