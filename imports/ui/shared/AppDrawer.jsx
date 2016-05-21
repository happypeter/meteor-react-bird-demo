import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import { List, ListItem, MakeSelectable } from 'material-ui/List';
const SelectableList = MakeSelectable(List);

import { white, blue, pink } from '../styles/colors';
import typography from '../styles/typography';

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      listIndex: ''
    };
  }

  componentDidMount() {
    this.setState({
      listIndex: this.getSelectedIndex()
    })
  }

  componentWillReceiveProps() {
    this.setState({
      listIndex: this.getSelectedIndex()
    })
  }

  getSelectedIndex() {
    return this.context.router.isActive('/', true) ? '/' :
      this.context.router.isActive('/signup') ? '/signup' :
      this.context.router.isActive('/account') ? '/account' :
      this.context.router.isActive('/chat') ? '/chat' :
      this.context.router.isActive('/login') ? '/login' : '';
  }

  render() {
    let styles = {
      header: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontMiddleSize,
        color: white,
        lineHeight: '64px',
        fontWeight: typography.fontWeightNormal,
        backgroundColor: blue,
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: pink,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    };
    const currentUser = this.props.currentUser;
    return (
      <Drawer open={this.state.open}
               docked={false}
               onRequestChange={this.handleRequestChange.bind(this)}>
        <div style={styles.header}>
          Chat Room Demo
        </div>
        <SelectableList
          selectedItemStyle={styles.selectedList}
          value={this.state.listIndex}
          onChange={this.handleChange.bind(this)}>
          <ListItem value='/' primaryText='Home' />
          <ListItem
            value={ currentUser ? '/account' : '/signup' }
            primaryText={ currentUser ? 'Account' : 'Sign up' } />
          <ListItem
            value={ currentUser ? '/chat' : '/login' }
            primaryText={ currentUser ? 'Chat' : 'Log in' } />
        </SelectableList>
      </Drawer>
    );
  }

  handleChange(e, index) {
    this.context.router.push(index);
    this.setState({
      open: false,
      listIndex: index,
    });
  }

  handleRequestChange(open) {
    this.setState({open: open});
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
}

AppDrawer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default AppDrawer;
