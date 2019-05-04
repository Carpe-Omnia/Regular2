import React from 'react';
import NavArrow from '../NavArrow'
import Hotkey from '../Hotkey'

class Messages extends React.Component {
  handleNewMessage(event){
    event.preventDefault();
    var recipient = document.getElementById('new_recipient').value ;
    var content = document.getElementById('new_content').value ;
    var url = `/api/messages/new/"placeholder"/${content}/${localStorage.getItem("id")}/${recipient}` ;
    fetch(url, {method: "post"})
    .then(res => res.json())
    .then(function(json){
      if(json.message === "message created"){alert("message sent")}
      else{alert("message not sent for some reason")}
    })
  }
  toggleForm(){
    var form = document.getElementById('new_message_form')
    form.style.display !== "block" ? form.style.display = "block" : form.style.display = "none"
  }

  render(){
    return(
      <div id="parent-top-left" className="parentElement" >
        <div className="main_page_content" >
        <h3> Messages </h3>
        {this.props.orientation.datapackage.map (function(convo){
          console.log(convo.inbox[0])
          return(
            <div key={convo.id} className="conversation" >
              <h5>conversation with {convo.inbox[0].user_name}</h5>
                <ul id={`ul_${convo.id}`}>
                {convo.messages.map(function(message) {
                  return (
                    <li key={message.id}>
                      <p> {message.content} </p>
                    </li>
                  )
                })}
                </ul>
                <form className="reply_form" id={`form_${convo.id}`}onSubmit={event => {
                  event.preventDefault();
                  var content = document.getElementById(`content_${convo.id}`).value
                  var conversation_id = document.getElementById(`convo_${convo.id}`).value ;
                  var user_id = localStorage.getItem("id");
                  var to_id =  convo.inbox.user_id
                  var url = `/api/messages/create/"placeholder"/${content}/${user_id}/${to_id}/${conversation_id}`
                  fetch(url,{method: "post"})
                  .then(res => res.json())
                  .then(function(json){
                    document.getElementById(`ul_${convo.id}`).innerHTML += `<li><p>${json.data.content}</p></li>`
                  })
                }}>
                  Message<input type="text" id={`content_${convo.id}`} name="content" /><br/>
                  <input type="hidden" id={`convo_${convo.id}`} value={convo.id} />
                  <input type="submit" value="send message" />
                </form>
                <button value="reply" id={`button_${convo.id}`} onClick={function(){
                  if (document.getElementById(`form_${convo.id}`).style.display !== 'block'){
                    document.getElementById(`form_${convo.id}`).style.display = 'block' ;
                    document.getElementById(`button_${convo.id}`).innerHTML = "never mind"
                  }
                  else{
                    document.getElementById(`form_${convo.id}`).style.display = 'none' ;
                    document.getElementById(`button_${convo.id}`).innerHTML = "reply"
                  }
                }}>
                reply
                </button>
            </div>
          )
        })}
        <span id="new_message_form_elements" >
          <form id="new_message_form" onSubmit={event => this.handleNewMessage(event)}>
            to: <Hotkey text="x" /><input type="text" id="new_recipient" /><br></br>
            message: <Hotkey text="y" /><input type="text" id='new_content' /><br></br>
            <button type="submit" action="submit" >send<Hotkey text="z" click={true} /> </button>
          </form>
          <br></br>
        <button id="new_message_toggle" onClick={this.toggleForm}>
          New Message Toggle <Hotkey click={true} text="n" />
        </button>
        </span>
        </div>
      </div>
    )
  }
}

export default Messages
// you can stick in ( {message.created_at} ) with the message content, but you'll need to figure out
// JavaScript's version of STRFtime
