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
        <div style={{color: 'green'}}>{message}</div>
      );
    });

    // render should only return one element, hence wrapping messagenodes
    return (
      <div>{messageNodes}</div>
    )
  }
}

export default App;
