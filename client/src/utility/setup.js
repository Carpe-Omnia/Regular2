import configureStore from '../store/configureStore'
import {home} from '../actions/orientationActions'
import {clickHash, hotkeyHash} from './keybinding.js'
//import {navHash} from './keybinding.js'
import {hotkeys_on} from '../components/ToggleHotkeys' ;

const store = configureStore();
store.dispatch(home());

function setup() {
  document.addEventListener('keydown', function(e){
    var act = document.activeElement;
    if(hotkeys_on){
      if (act.tagName !== "INPUT" && act.tagName !== "TEXTAREA"){
        handleKey(e, act);
        console.log()
      }
      else if (e.key === ";"){
        act.blur();
      }
    }
    else{
      console.log('hotkey swallowed')
    }
  })
  doPwa() ;
}
function hotkeyHandler(e, act){
  var target;
  target = document.getElementById(`hotkey_click_${e.key}`)
  if (!!target){target.click()}
  else {
    target = document.querySelector(clickHash[e.key])
    if (!!target){
      target.click() ;
    }
    target = document.querySelector(hotkeyHash[e.key])
    if (!!target){
      target.focus() ;
      e.preventDefault() ;
    }
  }
}

function handleKey(e, act){

  if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
    moveAround(e);
  }
  else {
    hotkeyHandler(e, act)
  }
}

function moveAround(e) {
  var direction = e.key.replace("Arrow","");
  var target = document.getElementById(`arrow ${direction}`)
  if (!!target){target.click()}
}
let deferredPrompt ;
function doPwa(){
  var btnAdd = document.getElementById('add_button') ;
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
  });
  btnAdd.addEventListener('click', (e) => {
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
   .then((choiceResult) => {
     if (choiceResult.outcome === 'accepted') {
       console.log('User accepted the A2HS prompt');
     } else {
       console.log('User dismissed the A2HS prompt');
     }
     deferredPrompt = null;
   });
 });
}
export  {store, setup, hotkeyHandler, handleKey, moveAround, doPwa, deferredPrompt} ;
// export {navigate}
