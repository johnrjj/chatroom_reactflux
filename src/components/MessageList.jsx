import React from 'react';
import Message from './Message.jsx'
import mui from 'material-ui';

// Object destructuring!!!!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var {Card, List} = mui;


class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'message1',
        'message2'
      ]
    };
  }


  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message message={message} />
      );
    });

    // render should only return one element, hence wrapping messagenodes
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
