import React from 'react';
import Hotkey from './Hotkey';
import GoogleLogin from 'react-google-login' ;
import FacebookLogin from 'react-facebook-login' ;
//import InstagramLogin from 'react-instagram-login' ;

/*const responseInstagram = (response) => {
  console.log("instagram response");
  console.log(response);
}*/

class Register extends React.Component {
  doThing(event){
    event.preventDefault()
    var uname = document.getElementById('username').value
    var pword = document.getElementById('password').value
    var email = document.getElementById('email').value
    var postData = {username: uname, password: pword, email: email }
    var link = `/api/users/new` ;
    if ( !!uname && !!pword && !!email) {
      console.log("The thing is being done");
      var that = this ;
      fetch(link, {
        method: 'post',
        body: JSON.stringify(postData),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(function(json){
        if (json.message === "user created") {
            alert('Nice job creating your account. You have been signed in. ');
            localStorage.setItem("username", uname);
            localStorage.setItem("email", email);
            localStorage.setItem("id", json.data.id);
            let user = {
              username: uname,
              email: email,
              id: json.data.id
            }
            that.props.actions.set_user(user);
            document.getElementById('navlink1').click() ;
          }
        else {
          alert('Something went wrong. Remember to enter a username, email, AND a password')
        }
      });
    }
    else {
      alert('Something went wrong. Remember to enter a username, email, AND a password')
    }
  }
  render() {
    return (
      <div>
      {!!this.props.orientation.user.username ?
      <h1> You are already logged in as {this.props.orientation.user.username}</h1> :
      <div>
        <h1> Register for this site </h1>
        <form onSubmit={event => this.doThing(event)}>
          username<Hotkey text="b" /><input type="text" id="username" /><br></br>
          password<Hotkey text="c" /><input type="text" id="password" /><br></br>
          email<Hotkey text="d" /><input type="text" id="email" /><br></br>
          <button id="log_in_button" type="submit" action="submit">Join<Hotkey text="e" /></button>
        </form>
        <br />
        <GoogleLogin
          clientId="901764343985-ve2ood2o9ihqmosuio9gv5fnn45rpuri.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.props.actions.googleAuth}
          onFailure={this.props.actions.googleAuthFail}
          cookiePolicy={'single_host_origin'}
        />
        <br/>
        {/*
        <FacebookLogin
          appId="2251217524945266"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.props.actions.facebookAuth} />
          */}
      </div>
      }
      </div>
    )
  }
}

export default Register
