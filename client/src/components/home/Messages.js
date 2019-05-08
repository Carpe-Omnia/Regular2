import React from 'react';
import NavArrow from '../NavArrow'
import Hotkey from '../Hotkey'

class Messages extends React.Component {
  constructor(props){
    super(props);
    this.props.actions.set_data_package(localStorage.getItem("id"));
  }
  handleNewMessage(event){
    event.preventDefault();
    var recipient = document.getElementById('new_recipient').value ;
    var content = document.getElementById('new_content').value ;
    var postData = {
      content: content,
      recipient: recipient,
      from_id: localStorage.getItem("id"),
    }
    var url = `/api/messages/new/` ;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers:{'Content-Type': 'application/json'}
    })
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
        <h4> Messages </h4>
        <span id="new_message_form_elements" >
          <form style={{display: "none"}} id="new_message_form" onSubmit={event => this.handleNewMessage(event)}>
            <label>to: <Hotkey text="x" /></label><input type="text" id="new_recipient" /><br></br>
            <label>message: <Hotkey text="y" /></label><textarea type="text" id='new_content' /><br></br>
            <button type="submit" action="submit" >send<Hotkey text="z" click={true} /> </button>
          </form>
          <br></br>
          <button id="new_message_toggle" onClick={this.toggleForm}>
            New Message Toggle <Hotkey click={true} text="n" />
          </button>
        </span>
        {this.props.orientation.datapackage.map (function(convo){
          console.log(convo.inbox[0])
          return(
            <div key={convo.id} className="conversation" >
              <h5>conversation with {convo.inbox[0].user_name}</h5>
              <div id={`ul_${convo.id}`}>
                {convo.messages.map(function(message) {
                  let name;
                  if (message.from_id === localStorage.getItem('id')){
                    name = "message_sent"
                  }
                  else {
                    name = "message_got"
                  }
                  console.log(localStorage.getItem('id'));
                  console.log(message.from_id);
                  return (
                      <p key={message.id} className={name}>
                        {message.content}
                      </p>
                  )
                })}
              </div>
                <form className="reply_form" id={`form_${convo.id}`}onSubmit={event => {
                  event.preventDefault();
                  var content = document.getElementById(`content_${convo.id}`).value
                  var conversation_id = document.getElementById(`convo_${convo.id}`).value ;
                  var user_id = localStorage.getItem("id");
                  var to_id =  convo.inbox.user_id
                  var postData = {
                    content: content,
                    conversation_id: conversation_id,
                    user_id: user_id,
                    to_id: to_id,
                    subject: ""
                  }
                  var url = `/api/messages/create/` ;
                  fetch(url,{
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers:{'Content-Type': 'application/json'}
                  })
                  .then(res => res.json())
                  .then(function(json){
                    let message = `<p style="background-color: rgb(29, 161, 242), ">${json.data.content}</p>`
                    document.getElementById(`ul_${convo.id}`).innerHTML += `${message}`
                  })
                }}>
                  <textarea id={`content_${convo.id}`} name="content" placeholder="Message" /><br/>
                  <input type="hidden" id={`convo_${convo.id}`} value={convo.id} style={{width: '20%'}}/>
                  <button type="submit" value="send message" style={{width: '20%'}}>Send</button>
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

        </div>
      </div>
    )
  }
}

export default Messages
// you can stick in ( {message.created_at} ) with the message content, but you'll need to figure out
// JavaScript's version of STRFtime
