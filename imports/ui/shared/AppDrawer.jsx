import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    let styles = {
      header: {
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      }
    };

    return (
      <Drawer open={this.state.open}
               docked={false}
               onRequestChange={this.handleRequestChange.bind(this)}>
        <div style={styles.header}>
          Chat Room Demo
        </div>
        <List>
          <ListItem primaryText='Home' />
          <ListItem primaryText='Sign up' />
          <ListItem primaryText='Log in' />
        </List>
      </Drawer>
    );
  }

  handleRequestChange(open) {
    this.setState({open: open});
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
}

export default AppDrawer;
