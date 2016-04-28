import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

class NavBar extends Component {
  handChange(value) {
    this.context.router.push(value);
  }

  render() {
    return (
      <div>
        <Tabs onChange={ this.handChange.bind(this) }>
          <Tab label='Home' value='/' />
          <Tab label='Sign Up' value='/signup' />
          <Tab label='Log In' value='/login' />
        </Tabs>
      </div>
    );
  }
}

NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default NavBar;
