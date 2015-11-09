import React from 'react';
import Channel from './Channel.jsx'
import mui from 'material-ui';

// Object destructuring!!!!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var {Card, List} = mui;

class ChannelList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [
        'channel1',
        'channel2'
      ]
    };
  }

  render() {
    var channelNodes = this.state.channels.map((channel) => {
      return (
        <Channel channel={channel} />
      );
    });

    return (
      <Card style={{
          flexGrow: 1
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    )
  }
}

export default ChannelList;
