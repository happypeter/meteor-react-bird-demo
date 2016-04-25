import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Hello extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RaisedButton label='material-ui' primary={true} />
      </MuiThemeProvider>
    );
  }
}

export default Hello;