import React from 'react';
import MessageList from './MessageList.jsx'
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx'
import mui from 'material-ui';

const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

class App extends React.Component {
  constructor() {
    super();
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightTheme),
    }
  };

  render(){
    return (
      <div>
        <AppBar title="Chat App" />
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: 1200,
            width: '100%',
            margin: '30px auto 30px'
          }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    )
  };
}

export default App;
