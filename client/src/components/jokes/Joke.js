import React from 'react';

class Joke extends React.Component {
  upvote(event){
    event.preventDefault() ;
    console.log("upvoting joke");
    var karma = this.props.joke.karma ;
    var joke_id = this.props.joke.id ;
    if (!!localStorage.getItem('username')){
      let url = `/api/jokes/upvote/${this.props.joke.id}/${localStorage.getItem('user_id')}`
      fetch(url, {method: 'POST'})
      .then(res => res.json())
      .then(function(json){
        console.log(json);
        document.getElementById(`karma_for_joke_${joke_id}`).innerHTML = ` ${karma + 1}` ;
        document.getElementById(`vote_icon_for_joke_${joke_id}`).className += ' accented_thing' ;
      })
    }
    else{
      alert('Sign in to vote on jokes');
    }
  }
  render(){
    return (
      <div key={this.props.joke.id} className="joke">
        <div className="joke_text">
          <div className="setup clickme" id={`setup${this.props.joke.id}`} onClick={() =>{
            var placeId = `placeholder${this.props.joke.id}` ;
            var punchId = `punchline${this.props.joke.id}`  ;
            document.getElementById(`${placeId}`).style.display = "none" ;
            document.getElementById(`${punchId}`).style.display = "block" ;
            document.getElementById(`setup${this.props.joke.id}`).className = "setup"
            document.getElementById(`placeholder${this.props.joke.id}`).className = "placeholder"
          }} >
            {this.props.joke.setup}
          </div>
          <div className="placeholder clickme" id={`placeholder${this.props.joke.id}`} onClick={() =>{
            document.getElementById(`setup${this.props.joke.id}`).click() ;
          }}>
            -------------
          </div>
          <div className="punchline" id={`punchline${this.props.joke.id}`}>
            {this.props.joke.punchline}
          </div>
        </div>
        <br/>
        <div className="joke_bottom_bar">
          <span className="comment_on_joke"> <i className="material-icons">message</i>
            {this.props.joke.comment_count}
          </span>
          <span className="vote_on_joke">
            <i onClick={event => this.upvote(event)}
            className="material-icons" id={`vote_icon_for_joke_${this.props.joke.id}`}>thumb_up</i>
            <span id={`karma_for_joke_${this.props.joke.id}`}> {this.props.joke.karma} </span>
          </span>
          <span className="joke_user_name">
           -{this.props.joke.user_name}
          </span>
        </div>
      </div>
    )
  }
}

export default Joke
