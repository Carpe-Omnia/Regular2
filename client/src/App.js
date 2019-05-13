import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from './style/logo.svg';
import './style/App.css';
import './style/Places.css';
import './style/Nav.css';
import './style/Joke.css' ;
import './style/Color.css' ;
import {  BrowserRouter as Router, Route} from 'react-router-dom';

import * as actions from './actions/orientationActions'
import NavBar from './components/NavBar';
import Jokes from './components/jokes/Jokes';
import Register from './components/Register'
import Login from './components/Login'
import HomeContainer from './components/home/HomeContainer'
import Profile from './components/home/Profile'
import Messages from './components/home/Messages'
import PlacesContainer from './components/places/PlacesContainer'
import SimpleSnackbar from './components/places/Snack.js' ;
import Colors from './components/color/Colors' ;
import { SnackbarProvider } from 'notistack';
import SnackDemo1 from './components/Snackbar' ;
import {SnackbarMessages} from './components/Snackbar' ;

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
        </header>
        <div className="App-body">
        <button id="add_button" style={{display: 'none', margin: '0 auto'}}>add to home</button>
        <Router>
          <React.Fragment >
            <NavBar id="NavBar" orientation={this.props.orientation} actions={this.props.actions} />
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
            <Route
              exact path="/profile"
              render={(props) => <Profile {...props} actions={this.props.actions} orientation={this.props.orientation} z="3" />}
            />
            <Route
              exact path="/messages"
              render={(props) => <Messages {...props} actions={this.props.actions} orientation={this.props.orientation} z="3" />}
            />
            <Route
              exact path="/color"
              render={(props) => <Colors {...props} actions={this.props.actions} orientation={this.props.orientation} z="0" />}
            />
          </React.Fragment >
        </Router >
        </div>
        <SnackbarMessages />
        <SnackbarProvider maxSnack={3}>
          <SnackDemo1 />
        </SnackbarProvider>
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
