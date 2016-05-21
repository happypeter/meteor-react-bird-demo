import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

class LogOutMenu extends Component {
  handleTouchTap() {
    Meteor.logout();
    this.context.router.push('/');
  }

  render() {
    let iconButtonElement = (
      <IconButton style={{height: '64px', width: '64px', marginLeft: '25px'}}>
        <ActionAccountCircle color='#fff' />
      </IconButton>
    );

    return (
      <IconMenu iconButtonElement={iconButtonElement} anchorOrigin={{vertical: 'center', horizontal: 'middle'}}>
        <MenuItem primaryText={this.props.username} disabled={true} style={{lineHeight: '30px'}} />
        <Divider />
        <MenuItem primaryText="退出" style={{lineHeight: '30px'}} onTouchTap={this.handleTouchTap.bind(this)} />
      </IconMenu>
    );
  }
}

LogOutMenu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LogOutMenu;
