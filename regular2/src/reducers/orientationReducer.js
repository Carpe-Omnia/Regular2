import React, { Component } from 'react';

function orientationReducer(state={orientation: [[0,0],[0,0],[0,0]] }, action){
  var newOr = state.orientation ;
  switch(action.type) {
    case 'DEFAULT_ORIENTATION':
      return state
    case 'MOVE_ORIENTATION':
      var z = parseInt(action.payload.z, 10);
      var pos = state.orientation[z] ;
      if (action.payload.direction === "Left"){
        pos[0] > -1 ? newOr[z] =  [ pos[0] - 1, pos[1] ]  : newOr = state.orientation ;
        return {orientation: newOr} ;
      }
      if (action.payload.direction === "Right") {
        pos[0] < 1 ? newOr[z] =   [pos[0] + 1, pos[1] ] : newOr = state.orientation ;
        return {orientation: newOr} ;
      }
      else {
        return state
      }
    default:
      return state
  }
}

export default orientationReducer
