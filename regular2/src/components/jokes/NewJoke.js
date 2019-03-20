import React, { Component } from 'react';
import NavArrow from '../NavArrow';

class NewJoke extends React.Component {
  constructor(props){
    super(props);
  }
  doThing(event){
    event.preventDefault();
    var setup = document.getElementById('setup_input').value ;
    var punchline = document.getElementById('punchline_input').value ;
    var username = localStorage.getItem("username") ;
    var id = localStorage.getItem("id") ;
    var postData = {setup: setup, punchline: punchline, username: username, id: id } ;
    var link = `/api/jokes/create/${setup}/${punchline}/${id}` ;
    console.log(link)
    if (!!setup && !!punchline){
      console.log('working');
      fetch(link, {
        method: 'post',
        body: JSON.stringify(postData)
      }).then(res => res.json())
        .then(function(json){
          console.log(json);
          if(json.message === "joke created"){
            alert("nice job making that joke")
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
        <h3>
          Make a new joke
        </h3>
        <form onSubmit={event => this.doThing(event)} >
          setup<span className="non_mobile" > (s)</span>:<input type="text" id="setup_input" /><br></br>
          punchline<span className="non_mobile" >(p)</span>:<input type="text" id="punchline_input" /><br></br>
          <button type="submit" value="submit" id="submit_joke" >Submit <span className="non_mobile" >(j)</span> </button>
        </form>
      </div>
    )
  }
}

export default NewJoke
