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
      console.log(this.state.datapackage[0])
    })
  }
  render(){
    return(
      <div id="parent-top-left" className="parentElement" >
        <NavArrow direction="Right" actions={this.props.actions} z={this.props.z} text="Home"/>
        <div className="main_page_content" >
        <h3> Messages </h3>
        {this.state.datapackage.map (function(convo){
          return(
            <div key={convo.id} className="conversation" >
              <h3>conversation with {convo.inbox[0].user_name}</h3>
                <ul>
                {convo.messages.map(function(message) {
                  return (
                    <li key={message.id}>
                      <p> <strong>{message.subject} </strong></p>
                      <p> {message.content} </p>
                    </li>
                  )
                })}
                </ul>
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
