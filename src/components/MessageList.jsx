import React from 'react';
import Message from './Message.jsx'
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

// Object destructuring!!!!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var {Card, List} = mui;

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://reactchatswag.firebaseio.com/messages');
    // firebase events: child_added, child_removed...
    this.firebaseRef.on('child_added', (message) => {
      // already have message
      if(this.state.messages[message.key()]) {
        return;
      }
      // reminder to self: let is block scope, var is function scope
      let messageVal = message.val();
      messageVal.key = message.key();
      this.state.messages[messageVal.key] = messageVal;
      this.setState({messages: this.state.messages});
    });

    this.firebaseRef.on('child_removed', (message) => {
      console.log('deleting message:', message.val());
      let key = message.key();
      delete this.state.messages[key];
      this.setState({messages: this.state.messages});
    });
  }

  render() {
    var messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message message={message.message}  key={message.key}/>
      );
    });

    return (
      <Card style={{
          flexGrow: 2,
          maringLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    )
  }
}

export default MessageList;
