import React, { Component } from 'react';
import './Chat.css';
import Message from 'components/Message';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    const inputValue = event.target.value;
    this.setState({
      messageInput: inputValue
    });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter' && this.state.messageInput !== '') {
      this.setState(state => ({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => {
              return <Message key={index} text={message.text} />;
            })}
          </div>
        </div>
        <input
          className="input-message"
          type="text"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
