import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import * as actions from './actions/orientationActions'
import NavBar from './components/NavBar';
import NavArrow from './components/NavArrow'
import {Jokes} from './components/Jokes';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    this.props.actions.home();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome</h4>
          <span className="non_mobile" >press ';' to access hotkeys from within an input </span>
        </header>
        <div className="App-body">
        <p id="testr" > Tester </p>
        <p id="sandbox1" > Sandbox </p>
        <p id="sandbox2" > Sandbox </p>
        <Router>
          <React.Fragment >
            <NavBar />
            <Route
              exact path="/"
              render={(props) => <GrandParent0 {...props} actions={this.props.actions} orientation={this.props.orientation} z="0" />}
            />
            <Route
              exact path="/jokes"
              render={(props) => <Jokes {...props} actions={this.props.actions} orientation={this.props.orientation} z="1" />}
            />
            <Route
              exact path="/register"
              render={(props) => <Register {...props} actions={this.props.actions} orientation={this.props.orientation} z="2" />}
            />
            <Route
              exact path="/login"
              render={(props) => <Login {...props} actions={this.props.actions} orientation={this.props.orientation} z="2" />}
            />
          </React.Fragment >
        </Router >
        </div>
      </div>
    );
  }
}

class GrandParent0 extends React.Component {

  render() {
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      <h1> Home </h1>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

class GrandParent2 extends React.Component {
  render() {
    var orientation = this.props.orientation.orientation[2] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      <h1> Container 2 </h1>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

const ParentTopCenter = (props) => {
  return (
    <div id="parent-top-center" className="parentElement">
      <h3> Top-Center </h3>
      <EnterText />
      <NavArrow direction="Left" actions={props.actions} z={props.z} text="go left"/>
      <NavArrow direction="Right" actions={props.actions} z={props.z} text="go right"/>
    </div>
  )
}
const ParentTopLeft = (props) => {
  return(
    <div id="parent-top-left" className="parentElement">
      <h3> Top-left </h3>
      <NavArrow direction="Right" actions={props.actions} z={props.z} text="go right"/>
    </div>
  )
}

const ParentTopRight = (props) => {
  return(
    <div id="parent-top-right" className="parentElement" >
      <h3> Top-Right </h3>
      <NavArrow direction="Left" actions={props.actions} z={props.z} text="go left"/>
    </div>
  )
}
class EnterText extends React.Component {
  render() {
    return (
      <form>
        <input type="text" id="hotkey1" />
        <span className="non_mobile" >(a)</span>
        <input id="test_button" type="button" onClick={() => console.log("button click")} />
      </form>
    )
  }
}
var parentHash = {
  "-1,0": ParentTopLeft ,
  "0,0": ParentTopCenter ,
  "1,0": ParentTopRight ,
}



function mapStateToProps(state){
  return {orientation: state.orientation}
}
function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connector(App)



export default connectedComponent;
