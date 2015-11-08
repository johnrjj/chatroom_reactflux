import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'hi1',
        'hello2'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });

    // render should only return one element, hence wrapping messagenodes
    return (
      <div>{messageNodes}</div>
    )
  }
}

export default App;
