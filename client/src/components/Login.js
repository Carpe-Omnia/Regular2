import React from 'react';
import Hotkey from './Hotkey'

class Login extends React.Component {
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
        {!!localStorage.getItem("username") ?
        <h1> You are already logged in as {localStorage.getItem("username")}</h1> :
        <div>
          <h1> Login to this site </h1>
          <form onSubmit={event => this.doThing(event)}>
            username<Hotkey text="b" /> <input type="text" id="username" /><br></br>
            password<Hotkey text="c" /><input type="text" id="password" /><br></br>
            <button id="log_in_button" type="submit" action="submit">Join<Hotkey text="d" /></button>
          </form>
        </div>
        }
      </div>

    )
  }
}

export default Login
