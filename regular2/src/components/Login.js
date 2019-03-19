import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
  }
  doThing(event){
    event.preventDefault()
    var uname = document.getElementById('username').value
    var pword = document.getElementById('password').value
    var postData = {username: uname, password: pword }
    var link = `/api/users/login/${uname}/${pword}` ;
    if ( !!uname && !!pword) {
      fetch(link, {
        method: 'post',
        body: JSON.stringify(postData),
      }).then(res => res.json())
        .then(function(json){
          if (json.message === "logged in"){
            alert("nice job logging in")
            console.log(json.data)
            localStorage.setItem("username", uname);
            localStorage.setItem("id", json.data.id);
          }
          else{
            alert("something went terribly wrong. Try again, or don't. See what I care")
          }
        })
    }
  }
  render(){
    return (
      <div>
        <h1> Login to this site </h1>
        <form onSubmit={event => this.doThing(event)}>
          username: <input type="text" id="username" /><br></br>
          password: <input type="text" id="password" /><br></br>
          <button type="submit" action="submit">Join</button>
        </form>
      </div>
    )
  }
}

export default Login
