import React from 'react';
import mui from 'material-ui';

var {Card} = mui;

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style ={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea style={{
          witdth: '100%',
          borderColor: '#D0D0D0',
          resize: 'none',
          borderRadius: 3,
          minHeight: 50,
          color: '#555',
          fontSize: 14,
          outline: 'auto 0px'
        }}/>
      </Card>
    )
  }
}

export default MessageBox;
