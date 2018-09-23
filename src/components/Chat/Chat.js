import React, { Component } from 'react';
import './Chat.css';
import Message from 'components/Message';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  componentDidUpdate() {
    let messageList = document.querySelector('.message-list');
    messageList.scrollTop = messageList.scrollHeight;
  }


  changeInputMessage = e => {
    const inputValue = e.target.value;
    this.setState({
      messageInput: inputValue
    });
  };

  sendMessageOnEnter = e => {
    const { messages, messageInput } = this.state
    if (e.key === 'Enter' && this.state.messageInput !== '') {
      this.setState(state => ({
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    const { messages, messageInput } = this.state
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => {
              return <Message key={index} text={message.text} />;
            })}
          </div>
        </div>
        <input
          className="input-message"
          type="text"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          placeholder="Enter your text here"
        />
      </div>
    );
  }
}

export default Chat;
