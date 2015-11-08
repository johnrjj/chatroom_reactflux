import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'hi13456',
        'hello2'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <li key={message}>{message}</li>
      );
    });

    // render should only return one element, hence wrapping messagenodes
    return (
      <div>{messageNodes}</div>
    )
  }
}

export default App;
