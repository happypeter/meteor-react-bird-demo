import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab label='Home' />
          <Tab label='Sign Up' />
          <Tab label='Log In' />
        </Tabs>
      </div>
    );
  }
}

NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default NavBar;
