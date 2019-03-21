import React from 'react';

class Register extends React.Component {
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
            alert('Nice job creating your account. You have been signed in. ');
            localStorage.setItem("username", uname);
            localStorage.setItem("id", json.data.id);
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
      {!!localStorage.getItem("username") ?
      <h1> You are already logged in as {localStorage.getItem("username")}</h1> :
      <div>
        <h1> Register for this site </h1>
        <form onSubmit={event => this.doThing(event)}>
          username<span className="non_mobile" >(b):</span><input type="text" id="username" /><br></br>
          password<span className="non_mobile" >(c):</span><input type="text" id="password" /><br></br>
          <button id="log_in_button" type="submit" action="submit">Join<span className="non_mobile" >(d)</span></button>
        </form>
      </div>
      }
      </div>
    )
  }
}

export default Register
