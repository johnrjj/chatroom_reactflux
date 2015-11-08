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
      messages: []
    };

    this.firebaseRef = new Firebase('https://reactchatswag.firebaseio.com/messages');
    this.firebaseRef.once('value', (DataSnapshot) => {

      var messageVal = DataSnapshot.val();
      var messages = _(messageVal)
        .keys() //array of all keys in obj
        .map((messageKey) => {
          var cloned = _.clone(messageVal[messageKey]);
          cloned.key = messageKey; // Add a key to make react happy
          return cloned;
        })
        .value(); // run da chain
      console.log(messages);
      this.setState({
        messages: messages
      });
    });
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
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
