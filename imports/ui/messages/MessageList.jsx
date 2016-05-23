import React, { Component } from 'react';
import map from 'lodash/fp/map';
import Radium from 'radium';
import CircularProgress from 'material-ui/CircularProgress';

import Message from './Message.jsx';

class MessageList extends Component {
  componentDidMount() {
    $(".loader").delay(800).fadeOut('slow', function() {
      $("#messages").fadeIn('slow');
      let msgList = document.getElementById('message-list');
      if(msgList !== null) {
        msgList.scrollTop = msgList.scrollHeight;
      }
    });
  }

  componentDidUpdate() {
    let msgList = document.getElementById('message-list');
    if(msgList !== null) {
      msgList.scrollTop = msgList.scrollHeight;
    }
  }

  render() {
    let styles = {
      circle: {
        margin: '0 auto',
        paddingTop: '100px',
        display: 'block'
      },
      list: {
        flexGrow: 1,
        overflowY: 'auto',
      },
      messages: {
        display: 'none'
      }
    };

    const allMessages = map((message) => {
      return (
        <Message message={message} key={message._id} />
      );
    }, this.props.messages);

    return (
      <div id="message-list" style={styles.list}>
        <CircularProgress
          mode="indeterminate"
          className="loader"
          style={styles.circle} />
        <div id="messages" style={styles.messages}>
          { allMessages }
        </div>
      </div>
    );
  }
}

export default Radium(MessageList);
