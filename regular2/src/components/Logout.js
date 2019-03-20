import React, { Component } from 'react';

class Logout extends React.Component {
  constructor(props){
    super(props);
  }
  doThing(event){
    event.preventDefault() ;
    localStorage.setItem("username", "");
    localStorage.setItem("id", "");
  }
  render(){
    return (
      <form onSubmit={event => this.doThing(event)} >
        <button id="log_in_button" type="submit" >Logout <span className="non_mobile" >(d)</span></button>
      </form>
    )
  }
}

export default Logout
