import React from 'react';
import NavArrow from '../NavArrow'

class Messages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datapackage: []
    }
    var url = `/api/messages/index/${localStorage.getItem("id")}`
    fetch(url)
    .then( res => res.json())
    .then((json) => {
      this.setState({
        datapackage: json.data.datapackage
      })
    })
  }
  render(){
    return(
      <div id="parent-top-left" className="parentElement" >
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} text="Home"/>
        <div className="main_page_content" >
        <h3> Messages </h3>
        {this.state.datapackage.map (function(convo){
          console.log(convo.inbox[0])
          return(
            <div key={convo.id} className="conversation" >
              <h3>conversation with {convo.inbox[0].user_name}</h3>
                <ul id={`ul_${convo.id}`}>
                {convo.messages.map(function(message) {
                  return (
                    <li key={message.id}>
                      <p> <strong>{message.subject} </strong></p>
                      <p> {message.content} </p>
                    </li>
                  )
                })}
                </ul>
                <form className="reply_form" id={`form_${convo.id}`}onSubmit={event => {
                  event.preventDefault();
                  var subject = document.getElementById(`subject_${convo.id}`).value
                  var content = document.getElementById(`content_${convo.id}`).value
                  var conversation_id = document.getElementById(`convo_${convo.id}`).value ;
                  var user_id = localStorage.getItem("id");
                  var to_id =  convo.inbox.user_id
                  var url = `/api/messages/create/${subject}/${content}/${user_id}/${to_id}/${conversation_id}`
                  fetch(url,{method: "post"})
                  .then(res => res.json())
                  .then(function(json){
                    document.getElementById(`ul_${convo.id}`).innerHTML += `<li><p>${json.data.subject}</p><p>${json.data.content}</p></li>`
                  })
                }}>
                  Subject:<input  id={`subject_${convo.id}`} type="text" name="subject" /><br/>
                  Content<input type="text" id={`content_${convo.id}`} name="content" /><br/>
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
        </div>
      </div>
    )
  }
}

export default Messages
// you can stick in ( {message.created_at} ) with the message content, but you'll need to figure out
// JavaScript's version of STRFtime
