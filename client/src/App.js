import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './style/logo.svg';
import './style/App.css';
import './style/Places.css';
import './style/Nav.css';
import './style/Joke.css' ;
import {  BrowserRouter as Router, Route} from 'react-router-dom';

import * as actions from './actions/orientationActions'
import NavBar from './components/NavBar';
import Jokes from './components/jokes/Jokes';
import Register from './components/Register'
import Login from './components/Login'
import HotkeyToggle from './components/HotkeyToggle'
import HomeContainer from './components/home/HomeContainer'
import PlacesContainer from './components/places/PlacesContainer'
import SimpleSnackbar from './components/places/Snack.js' ;

class App extends Component {
  /*
  constructor(props){
    super(props);
  }
  */
  componentWillMount() {
    this.props.actions.home();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
          <HotkeyToggle />
          <span className="non_mobile" >press ';' to access hotkeys from within an input </span>
          */}
        </header>
        <div className="App-body">
        <Router>
          <React.Fragment >
            <NavBar id="NavBar" />
            <Route
              exact path="/"
              render={(props) => <HomeContainer {...props} actions={this.props.actions} orientation={this.props.orientation} z="0" />}
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
            <Route
              exact path="/places"
              render={(props) => <PlacesContainer {...props} actions={this.props.actions} orientation={this.props.orientation} z="3" />}
            />
          </React.Fragment >
        </Router >
        <SimpleSnackbar message={this.props.orientation.snackbar_message} />
        </div>
      </div>
    );
  }
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
