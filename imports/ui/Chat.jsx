import React, { Component } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import MessageForm from './messages/MessageForm.jsx';
import MessageList from './messages/MessageList.jsx';

import { Messages } from '../api/messages.js';
import UserList from './user/UserList.jsx';

class Chat extends Component {
  getStyles() {
    return {
      root: {
        backgroundColor: '#FFF',
        border: '1px solid #ddd',
        width: '100%',
        overflowY: 'hidden',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        '@media (min-width: 600px)': {
          width: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
          borderRight: '2px',
        }
      },
    }
  }

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <UserList users={this.props.onlineUsers}/>
        <MessageList messages={this.props.messages} />
        <MessageForm currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('userInfo');
  Meteor.subscribe("messages");
  Meteor.subscribe("userStatus");
  return {
    currentUser: Meteor.user(),
    messages: Messages.find({}, {sort: {createdAt: 1}}).fetch(),
    onlineUsers: Meteor.users.find({}).fetch()
  };
}, Radium(Chat));