import React from 'react';
import Hotkey from './Hotkey'
import GoogleLogin from 'react-google-login' ;
import FacebookLogin from 'react-facebook-login' ;
//import InstagramLogin from 'react-instagram-login' ;

/*const responseInstagram = (response) => {
  console.log("instagram response");
  console.log(response);
}*/
class Login extends React.Component {
  doThing(event){
    event.preventDefault()
    var email = document.getElementById('email').value
    var pword = document.getElementById('password').value
    var postData = {email: email, password: pword }
    var link = `/api/users/login` ;
    var that = this ;
    if ( !!email && !!pword) {
      fetch(link, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(function(json){
        console.log(json.message);
        if (json.message === "logged in"){
          document.getElementById('snackbar_success_message').innerHTML = "login successful" ;
          document.getElementById('show_snackbar_success').click();
          console.log(json.data)
          localStorage.setItem("username", json.data.name);
          localStorage.setItem("email", email);
          localStorage.setItem("id", json.data.id);
          let user = {
            username: json.data.name,
            email: email,
            id: json.data.id
          }
          that.props.actions.set_user(user) ;
        }
        else{
          document.getElementById('snackbar_error_message').innerHTML = "login unsuccessful" ;
          document.getElementById('show_snackbar_error').click();
        }
      })
    }
  }
  render(){
    return (
      <div>
        {!!this.props.orientation.user.id ?
        <h1> You are already logged in as {localStorage.getItem("username")}</h1> :
        <div>
          <h1> Login to this site </h1>
          <form onSubmit={event => this.doThing(event)}>
            email<Hotkey text="b" /> <input type="text" id="email" /><br></br>
            password<Hotkey text="c" /><input type="text" id="password" /><br></br>
            <button id="log_in_button" type="submit" action="submit">Log in<Hotkey text="d" /></button>
          </form>
        </div>
        }
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

        <br/>
        <InstagramLogin
          clientId="b2b0b30d4ef14fd5ac862e59aa2a26e9"
          buttonText="Login"
          onSuccess={responseInstagram}
          onFailure={responseInstagram}
        />
      */}
      </div>

    )
  }
}

export default Login
