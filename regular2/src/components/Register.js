import React, { Component } from 'react';

class Register extends React.Component {
  constructor(props){
    super(props);
  }
  doThing(event){
    event.preventDefault()
    var uname = document.getElementById('username').value
    var pword = document.getElementById('password').value
    var postData = {username: uname, password: pword }
    var link = `/api/users/new/${uname}/${pword}` ;
    if ( !!uname && !!pword) {
      console.log("The thing is being done");
      fetch(link, {
        method: 'post',
        body: JSON.stringify(postData),

      }).then(res => res.json())
        .then(function(json){
          if (json.data === "user created") {
            alert('Nice job creating your account');
          }
          else {
            alert('Something went wrong. Remember to enter a username AND a password')
          }
        }
        );
    }
    else {
        alert('Something went wrong. Remember to enter a username AND a password')
    }
  }
  render() {
    return (
      <div>
        <h1> Register for this site </h1>
        <form onSubmit={event => this.doThing(event)}>
          username: <input type="text" id="username" /><br></br>
          password: <input type="text" id="password" /><br></br>
          <button type="submit" action="submit">Join</button>
        </form>
      </div>
    )
  }
}

export default Register
